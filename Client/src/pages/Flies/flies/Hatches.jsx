import React from "react";
import { useNavigate } from "react-router-dom";
import FliesList from "../FliesList.jsx";
import hatchesData from "../../../data/hatchesData.js"

const Hatches = () => {
  const navigate = useNavigate();

  const handleClick = (fly) => {
    navigate("/Purchase", {
      state: { fly },
    });
  };

  return (
    <section className="flies">
      <h4>Hatches</h4>
      <FliesList fliesData={hatchesData} handleClick={handleClick} />
    </section>
  );
};

export default Hatches;
