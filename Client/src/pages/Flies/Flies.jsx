import React from "react";
import { useNavigate } from "react-router-dom";
import FliesList from "./FliesList";
import { FliesData } from "./FliesData";
import "./flies.css";

const Flies = () => {
  const navigate = useNavigate();

  const handleClick = (fly) => {
    navigate("/Purchase", {
      state: { fly },
    });
  };

  return (
    <section className="flies">
      <div className="flies-category">
        <h3>Category</h3>
        <div className="flies-names">
          <p onClick={() => navigate("/Flies/Nymphs")}>Nymphs</p>
        </div>
      </div>
      <FliesList fliesData={FliesData} handleClick={handleClick} />
    </section>
  );
};

export default Flies;
