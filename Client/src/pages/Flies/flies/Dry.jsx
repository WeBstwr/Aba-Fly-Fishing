import React from "react";
import { useNavigate } from "react-router-dom";
import FliesList from "../FliesList.jsx";
import dryData from "../../../data/dryData.js";

const Dry = () => {
  const navigate = useNavigate();

  const handleClick = (fly) => {
    navigate("/Purchase", {
      state: { fly },
    });
  };

  return (
    <section className="flies">
      <h4>Dry</h4>
      <FliesList fliesData={dryData} handleClick={handleClick} />
    </section>
  );
};

export default Dry;
