import React, { useState } from "react";
import "./purchase.css";
import { useLocation } from "react-router-dom";

const Purchase = () => {
  const location = useLocation();
  const { fly } = location.state || {};

  const [quantity, setQuantity] = useState(1);
  const unitPrice = 3;
  const [totalPrice, setTotalPrice] = useState(unitPrice);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      setTotalPrice(newQuantity * unitPrice);
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        const newQuantity = prevQuantity - 1;
        setTotalPrice(newQuantity * unitPrice);
        return newQuantity;
      }
      return prevQuantity;
    });
  };

  if (!fly) {
    return <div>No fly selected</div>;
  }

  return (
    <section className="purchase">
      <div className="purchase-fly-container">
        <div className="purchase-fly-image">
          <img src={fly.image} alt={fly.name} />
        </div>
        <div className="purchase-fly-text-box">
          <h3>Name: {fly.name}</h3>
          <p>Description: {fly.description}</p>
          <h4>Price: ${totalPrice}</h4>
          <div className="add-quantity">
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <div className="purchase-buttons">
            <button>Buy</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
