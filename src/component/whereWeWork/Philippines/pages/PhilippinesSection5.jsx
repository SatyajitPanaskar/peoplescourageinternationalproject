import React from "react";
import "../styles/PhilippinesSection5.css";
import PhilippinesSection5Image1 from "../images/PhilippinesSection5Image1.webp";
const PhilippinesSection5 = () => {
  return (
    <>
      <div className="PhilippinesSection5">
        <div className="container container_PhilippinesSection5">
          <div className="row1_PhilippinesSection5">
            <h1>Geographical Presence of PCI</h1>
          </div>
          <div className="row2_PhilippinesSection5">
            <h6>
              <img
                src={PhilippinesSection5Image1}
                alt="PhilippinesSection5Image1"
              />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhilippinesSection5;
