import "./signUp.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const SignUp = () => {
  const navigate = useNavigate();

  function handleclick() {
    navigate("/SignIn");
  }

  const formik = useFormik({
    initialValues: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },

    validate: (formValues) => {
      let errors = {};
      if (formValues.userName === "") {
        errors.userName = "User Name is required";
      }
      if (formValues.firstName === "") {
        errors.firstName = "First Name is required";
      }
      if (formValues.lastName === "") {
        errors.lastName = "Last Name is required";
      }
      if (formValues.email === "") {
        errors.email = "Email is required";
      }
      if (formValues.password === "") {
        errors.password = "Password is required";
      }

      return errors;
    },
  });
  return (
    <>
      <div className="main-banner">
        <div className="sign-up-banner">
          <div className="sign-up-title">
            <h1>aba-fly-fishing</h1>
          </div>
        </div>
      </div>
      <div className="sign-up-section">
        <div className="main-sign-up-form">
          <div className="sign-up-form-title">
            <h1>Sign Up</h1>
          </div>
          <div className="sign-up-form">
            <form onSubmit={formik.handleSubmit}>
              <div className="errors">
                {formik.touched.userName &&
                  formik.errors &&
                  formik.errors.userName && <p>{formik.errors.userName}</p>}
              </div>
              <div className="sign-up-form-name">
                <label htmlFor="name">user name</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="errors">
                {formik.touched.firstName && formik.errors.firstName && (
                  <p>{formik.errors.firstName}</p>
                )}
              </div>
              <div className="sign-up-form-name">
                <label htmlFor="name">first name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="errors">
                {formik.touched.lastName && formik.errors.lastName && (
                  <p>{formik.errors.lastName}</p>
                )}
              </div>
              <div className="sign-up-form-name">
                <label htmlFor="name">last name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="errors">
                {formik.touched.email && formik.errors.email && (
                  <p>{formik.errors.email}</p>
                )}
              </div>
              <div className="sign-up-form-name">
                <label htmlFor="name">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="errors">
                {formik.touched.password && formik.errors.password && (
                  <p>{formik.errors.password}</p>
                )}
              </div>
              <div className="sign-up-form-name">
                <label htmlFor="name">password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="sign-up-submit">
                <button type="submit" onClick={(event) => handleclick()}>
                  register
                </button>
              </div>
            </form>
          </div>
          <div className="sign-up-form-title">
            <h1>
              or <button onClick={(event) => handleclick()}>log in</button>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
