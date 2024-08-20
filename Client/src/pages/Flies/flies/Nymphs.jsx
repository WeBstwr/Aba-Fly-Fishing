import React from "react";
import { useNavigate } from "react-router-dom";
import FliesList from "../FliesList.jsx";
import nymphsData from "../../../data/nymphsData.js";

const Nymphs = () => {
  const navigate = useNavigate();

  const handleClick = (fly) => {
    navigate("/Purchase", {
      state: { fly },
    });
  };

  return (
    <section className="flies">
      <h2>Nymphs</h2>
      <FliesList fliesData={nymphsData} handleClick={handleClick} />
    </section>
  );
};

export default Nymphs;
