import React from "react";
import { useNavigate } from "react-router-dom";
import FliesList from "../FliesList.jsx";
import bassData from "../../../data/bassData.js";

const Bass = () => {
  const navigate = useNavigate();

  const handleClick = (fly) => {
    navigate("/Purchase", {
      state: { fly },
    });
  };

  return (
    <section className="flies">
      <h4>Bass</h4>
      <FliesList fliesData={bassData} handleClick={handleClick} />
    </section>
  );
};

export default Bass;
