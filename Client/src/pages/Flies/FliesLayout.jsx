import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./flies.css";

const FliesLayout = () => {
  return (
    <section className="flies">
      <div className="flies-category">
        <h3>Category</h3>
        <div className="flies-names">
          <Link to="Nymphs">Nymphs</Link>
          <Link to="Bass">Bass</Link>
          <Link to="Dry">Dry</Link>
        </div>
      </div>
      <div className="flies-content">
        <Outlet />
      </div>
    </section>
  );
};

export default FliesLayout;
