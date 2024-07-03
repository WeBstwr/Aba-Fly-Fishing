import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact-bg">
          <h2>contact</h2>
        </div>
        <div className="contact-container">
          <div className="contact-form">
            <h3>a form</h3>
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
