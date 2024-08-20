import React from "react";
import Fly from "./Fly";
import "./flies.css";

const FliesList = ({ fliesData, handleClick }) => {
  return (
    <div className="flies-container">
      {fliesData.map((currentFly, i) => (
        <Fly
          key={i}
          image={currentFly.image}
          name={currentFly.name}
          description={currentFly.description}
          handleClick={() => handleClick(currentFly)}
        />
      ))}
    </div>
  );
};

export default FliesList;
