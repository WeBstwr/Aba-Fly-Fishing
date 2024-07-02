import { Link } from "react-router-dom";
import "./header.css";

const HeaderBottom = () => {
  return (
    <div className="header-btm">
      <nav className="header-nav">
        <ol className="header-nav-list">
          <li className="header-nav-item">
            <Link to="/">home</Link>
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
        </ol>
      </nav>
    </div>
  );
};

export default HeaderBottom;
