import React from "react";
import "../styles/PhilippinesSection4.css";
import PhilippinesSection4Image1 from "../images/PhilippinesSection4Image1.jpeg";
import PhilippinesSection4Image2 from "../images/PhilippinesSection4Image2.webp";
import PhilippinesSection4Image3 from "../images/PhilippinesSection4Image3.webp";

const PhilippinesSection4 = () => {
  return (
    <>
      <div className="PhilippinesSection4">
        <div className="container container_PhilippinesSection4">
          <div className="headText_PhilippinesSection4">
            <h2>Partners</h2>
          </div>
          <div className="row_PhilippinesSection4">
            <div className="col1_PhilippinesSection4">
              <h6>
                <img
                  src={PhilippinesSection4Image1}
                  alt="PhilippinesSection4Image1"
                />
              </h6>
            </div>
            <div className="col2_PhilippinesSection4">
              <h6>
                <img
                  src={PhilippinesSection4Image2}
                  alt="PhilippinesSection4Image2"
                />
              </h6>
            </div>
            <div className="col3_PhilippinesSection4">
              <h6>
                <img
                  src={PhilippinesSection4Image3}
                  alt="PhilippinesSection4Image3"
                />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhilippinesSection4;
