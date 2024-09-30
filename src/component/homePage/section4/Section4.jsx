import React from "react";
import imageMap from "./image (5).webp";
import "./section4.css";
const Section4 = () => {
  return (
    <>
      <div className="section4 container">
        <h1>Where we work</h1>
        <h5>
          <img src={imageMap} />
        </h5>
        <h4>
          <span>South Asia: </span>Bangladesh, India, and Nepal
        </h4>
        <h4>
          {" "}
          <span>Southeast Asia:</span> Indonesia, and Philippines
        </h4>
      </div>
    </>
  );
};

export default Section4;
