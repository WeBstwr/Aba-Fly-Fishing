import "./signIn.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const SignIn = () => {
  const navigate = useNavigate();

  function handleclick() {
    navigate("/");
  }

  const formik = useFormik({
    initialValues: {
      userNameOrEmail: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },

    validate: (formValues) => {
      let errors = {};
      if (formValues.userNameOrEmail === "") {
        errors.userNameOrEmail = "User Name or Email is required";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          formValues.userNameOrEmail,
        ) &&
        !/^[a-zA-Z0-9]+$/.test(formValues.userNameOrEmail)
      ) {
        errors.userNameOrEmail = "Invalid User name or Email";
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
      <div className="log-in-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="log-in-section">
        <div className="log-in-form-title">
          <h1>log in</h1>
        </div>
        <div className="log-in-form">
          <form onSubmit={formik.handleSubmit}>
            <div className="errors">
              {formik.touched.userNameOrEmail &&
                formik.errors &&
                formik.errors.userNameOrEmail && (
                  <p>{formik.errors.userNameOrEmail}</p>
                )}
            </div>
            <div className="log-in-form-name">
              <label htmlFor="name">user name/email</label>
              <input
                type="text"
                name="userNameOrEmail"
                id="userNameOrEmail"
                value={formik.values.userNameOrEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="errors">
              {formik.touched.password && formik.errors.password && (
                <p>{formik.errors.password}</p>
              )}
            </div>
            <div className="log-in-form-name">
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
            <div className="log-in-submit">
              <button type="submit" onClick={(event) => handleclick()}>
                log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
