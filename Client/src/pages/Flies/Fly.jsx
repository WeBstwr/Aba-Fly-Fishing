import React from "react";
import { Link } from "react-router-dom";
import "./flies.css";
import useCartStore from "../../cartStore/useCartStore";

const Fly = ({ image, name, description, handleClick }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({ image, name, description });
  };

  return (
    <div className="fly">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="fly-buttons">
        <button className="fly-btn" onClick={handleClick}>
          Purchase
        </button>
        <button className="fly-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Fly;
