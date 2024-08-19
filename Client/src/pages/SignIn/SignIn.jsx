// import "./signIn.css";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import { useFormik } from "formik";
// import { apiBase } from "../../utils/config.js";

// const SignIn = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();

//   const handleClick = async (formValues) => {
//     try {
//       setLoading(true);
//       setError(false);

//       const response = await axios.post(
//         `${apiBase}/api/users/login`,
//         formValues,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         },
//       );

//       if (response.data.success) {
//         navigate("/Home");
//       } else {
//         setError(response.data.message);
//       }
//     } catch (e) {
//       setError(e.response ? e.response.data.message : e.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       userNameOrEmail: "",
//       password: "",
//     },
//     onSubmit: (values) => {
//       handleClick(values);
//     },
//     validate: (formValues) => {
//       let errors = {};
//       if (formValues.userNameOrEmail === "") {
//         errors.userNameOrEmail = "User Name or Email is required";
//       } else if (
//         !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
//           formValues.userNameOrEmail,
//         ) &&
//         !/^[a-zA-Z0-9]+$/.test(formValues.userNameOrEmail)
//       ) {
//         errors.userNameOrEmail = "Invalid User name or Email";
//       }
//       if (formValues.password === "") {
//         errors.password = "Password is required";
//       }

//       return errors;
//     },
//   });

//   return (
//     <>
//       <div className="log-in-logo">
//         <img src={logo} alt="logo" />
//       </div>
//       <div className="log-in-section">
//         <div className="log-in-form-title">
//           <h1>log in</h1>
//         </div>
//         <div className="log-in-form">
//           <form onSubmit={formik.handleSubmit}>
//             <div className="errors">
//               {formik.touched.userNameOrEmail &&
//                 formik.errors &&
//                 formik.errors.userNameOrEmail && (
//                   <p>{formik.errors.userNameOrEmail}</p>
//                 )}
//             </div>
//             <div className="log-in-form-name">
//               <label htmlFor="userNameOrEmail">user name/email</label>
//               <input
//                 type="text"
//                 name="userNameOrEmail"
//                 id="userNameOrEmail"
//                 value={formik.values.userNameOrEmail}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//             </div>

//             <div className="errors">
//               {formik.touched.password && formik.errors.password && (
//                 <p>{formik.errors.password}</p>
//               )}
//             </div>
//             <div className="log-in-form-name">
//               <label htmlFor="password">password</label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//             </div>
//             <div className="log-in-submit">
//               <button type="submit" disabled={loading}>
//                 {loading ? "please wait..." : "log in"}
//               </button>
//             </div>
//             <p className="error">{error && error}</p>
//           </form>
//           <div className="got-to-sign-up">
//   <p>don't have an account?</p>
//   <Link to="/SignUp" className="sign-up-link">sign up</Link>
// </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignIn;

// src/pages/SignIn/SignIn.jsx
import "./signIn.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useFormik } from "formik";
import { apiBase } from "../../utils/config.js";
import useAuthStore from "../../store/authStore"; // import the store

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated); // get the setter function

  const handleClick = async (formValues) => {
    try {
      setLoading(true);
      setError(false);

      const response = await axios.post(
        `${apiBase}/api/users/login`,
        formValues,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      if (response.data.success) {
        setIsAuthenticated(true); // update auth state
        navigate("/Home");
      } else {
        setError(response.data.message);
      }
    } catch (e) {
      setError(e.response ? e.response.data.message : e.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      userNameOrEmail: "",
      password: "",
    },
    onSubmit: (values) => {
      handleClick(values);
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
              <label htmlFor="userNameOrEmail">user name/email</label>
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
              <label htmlFor="password">password</label>
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
              <button type="submit" disabled={loading}>
                {loading ? "please wait..." : "log in"}
              </button>
            </div>
            <p className="error">{error && error}</p>
          </form>
          <div className="got-to-sign-up">
            <p>don't have an account?</p>
            <Link to="/SignUp" className="sign-up-link">
              sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
