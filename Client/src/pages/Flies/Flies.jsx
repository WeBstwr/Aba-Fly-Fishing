import React from "react";
import { useNavigate } from "react-router-dom";
import "./flies.css";

const Flies = () => {
  const navigate = useNavigate();

  return (
    <section className="flies">
      <div className="flies-category">
        <h3>Category</h3>
        <div className="flies-names">
          <p onClick={() => navigate("/Flies/Nymphs")}>Nymphs</p>
          <p onClick={() => navigate("/Flies/Bass")}>Bass</p>
        </div>
      </div>
      <h2>we have a wide variety of flies</h2>
    </section>
  );
};

export default Flies;
