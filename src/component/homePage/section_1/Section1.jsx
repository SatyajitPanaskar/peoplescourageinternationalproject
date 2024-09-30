import React, { useState, useEffect } from "react";
import imageClendar from "./Date.webp";
import imageTime from "./Watch.webp";
import imageMap from "./Map.webp";
import "./section_1.css";

const Section1 = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const getCurrentDate = () => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const today = new Date();
      return today.toLocaleDateString(undefined, options);
    };

    setCurrentDate(getCurrentDate());
  }, []);

  return (
    <>
      <div className="section_1">
        <div className="section_1_main container">
          <h1>UNGA and Climate Week 2024</h1>
          <p>
            PCI and MRC are organizing a convening on “Centering Migrant Workers
            and Communities in the <br />
            Climate Resilience Narrative and Actions” around UNGA and Climate
            week.
          </p>
        </div>
        <div className="container" id="section_1icon">
          <div className="section_1_icon1">
            <h4>
              <img src={imageClendar} className="icon" alt="Calendar Icon" />
            </h4>
            <h3 className="h4_1">{currentDate}</h3>
          </div>
          <div className="section_1_icon2">
            <h4>
              <img src={imageTime} className="icon" alt="Time Icon" />
            </h4>
            <h3 id="h4_2">2.00pm to 4.30pm ET</h3>
          </div>
          <div className="section_1_icon3">
            <h4>
              <img src={imageMap} className="icon" alt="Map Icon" />
            </h4>
            <h3 id="h4_3">
              Jay Conference Bryant Park, 109 <br />
              W 39th St 2nd Fl, New York, NY <br />
              10018, United States
            </h3>
          </div>
        </div>
        <div className="section_1_button container">
          <a href="/">Read More</a>
        </div>
      </div>
    </>
  );
};

export default Section1;
