import React from "react";
import "../styles/IndiaSection4.css";
import IndiaSection4Image1 from "../images/IndiaSection4image1.webp";
const IndiaSection4 = () => {
  return (
    <>
      <div className="IndiaSection4">
        <div className="container container_IndiaSection4">
          <div className="row1_IndiaSection4">
            <h1>Geographical Presence of PCI</h1>
          </div>
          <div className="row2_IndiaSection4">
            <h6>
              <img src={IndiaSection4Image1} alt="IndiaSection4Image1" />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndiaSection4;
