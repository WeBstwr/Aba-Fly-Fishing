// import { Link } from "react-router-dom";
// import "./header.css";

// const HeaderBottom = () => {
//   return (
//     <div className="header-btm">
//       <nav className="header-nav">
//         <ol className="header-nav-list">
//           <li className="header-nav-item">
//             <Link to="/">home</Link>
//           </li>
//           <li className="header-nav-item">
//             <Link to="/Flies">flies</Link>
//           </li>
//           <li className="header-nav-item">
//             <Link to="/Contact">contact</Link>
//           </li>
//           <li className="header-nav-item">
//             <Link to="/Cart">cart</Link>
//           </li>
//           <li className="header-nav-item">
//             <Link to="/Profile">profile</Link>
//           </li>
//           <li className="header-nav-item">
//             <Link to="/signUp">SignUp</Link>
//           </li>
//         </ol>
//       </nav>
//     </div>
//   );
// };

// export default HeaderBottom;

// src/components/Header/HeaderBottom.jsx
import { Link } from "react-router-dom";
import "./header.css";
import useAuthStore from "../../store/authStore"; // import the store

const HeaderBottom = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated); // get auth state

  return (
    <div className="header-btm">
      <nav className="header-nav">
        <ol className="header-nav-list">
          <li className="header-nav-item">
            <Link to="/Home">home</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/Flies">flies</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/Contact">contact</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/Cart">cart</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/Profile">profile</Link>
          </li>
          {!isAuthenticated && (
            <li className="header-nav-item">
              <Link to="/SignUp">SignUp</Link>
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default HeaderBottom;
