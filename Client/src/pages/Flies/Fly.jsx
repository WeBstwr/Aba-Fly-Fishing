// import { Link } from "react-router-dom";
// import "./flies.css";

// const Fly = ({ image, name, description, price, handleClick }) => {
//   return (
//     <div className="fly">
//       <img src={image} alt={name} />
//       <h3>{name}</h3>
//       <p>{description}</p>
//       <h4>{price}</h4>
//       <div className="fly-buttons">
//         <button className="fly-btn" onClick={handleClick}>
//           Purchase
//         </button>
//         <Link to="/Cart" className="fly-btn">
//           Add to Cart
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Fly;

import React from "react";
import { Link } from "react-router-dom";
import "./flies.css";

const Fly = ({ image, name, description, price, handleClick }) => {
  return (
    <div className="fly">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="fly-buttons">
        <button className="fly-btn" onClick={handleClick}>
          Purchase
        </button>
        <Link to="/Cart" className="fly-btn">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default Fly;
