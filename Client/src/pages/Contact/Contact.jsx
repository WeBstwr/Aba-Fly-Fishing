import "./contact.css";
import React from "react";
import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },

    validate: (formValues) => {
      let errors = {};
      if (formValues.name === "") {
        errors.name = "Name is required";
      }
      if (formValues.email === "") {
        errors.email = "Email is required";
      }

      return errors;
    },
  });
  return (
    <>
      <section className="contact">
        <div className="contact-bg">
          <h2>contact</h2>
        </div>
        <div className="contact-container">
          <div className="contact-form">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-name">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <p>{formik.errors.name}</p>
                )}
              </div>
              <div className="form-email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p>{formik.errors.email}</p>
                )}
              </div>
              <div className="message">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                ></textarea>
              </div>
              <div className="form-button">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
          <div className="why-us">
            <h3>why us</h3>
            <p>
              Contact us because we offer the finest handcrafted flies and
              exceptional customer service. We're always available to provide
              expert advice, ensuring you have the best tools for a successful
              fishing experience.
            </p>
          </div>
        </div>
        <div className="map-section">
          <div className="open-hours">
            <h3>open hours</h3>
            <p>
              Monday - Friday <br /> 0700 - 1800 EAT
            </p>
            <p>
              Saturday <br /> 0800 - 1400 EAT
            </p>
            <p>
              Sunday <br /> closed
            </p>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97717.07698920867!2d36.76188834548789!3d-1.2937155101305813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1720030649551!5m2!1sen!2ske"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
