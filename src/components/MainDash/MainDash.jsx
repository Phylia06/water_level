import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <div>
        <div className="Maindash2">
        <h3>Water Temperature</h3>
        <CustomerReview />
        </div>
      </div>
      <div className="Maindash3">
        <Table />
      </div>
    </div>
  );
};

export default MainDash;
