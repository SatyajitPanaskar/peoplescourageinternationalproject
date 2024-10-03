import React from "react";
import "../styles/PhilippinesSection2.css";
import PhilippinesSection2image1 from "../images/PhilippinesSection2image1.webp";
import PhilippinesSection2image2 from "../images/PhilippinesSection2image2.png";
import PhilippinesSection2image3 from "../images/PhilippinesSection2image3.png";
import PhilippinesSection2image4 from "../images/PhilippinesSection2image4.webp";

const PhilippinesSection2 = () => {
  return (
    <>
      <div className="PhilippinesSection2">
        <div className="container conatiner_PhilippinesSection2">
          <div className="title_PhilippinesSection2">
            <h1>Key Facts on internal migration</h1>
            <h4>Overview</h4>
          </div>
          <div className="row1_PhilippinesSection2">
            <div className="col1_PhilippinesSection2">
              <h6>
                <img
                  src={PhilippinesSection2image1}
                  alt="PhilippinesSection2image1"
                />
              </h6>
              <h2>Number of internal migrants</h2>
              <p>10.5 million[1] lifetime migrants</p>
            </div>
            <div className="col2_PhilippinesSection2">
              <h6>
                <img
                  src={PhilippinesSection2image2}
                  alt="PhilippinesSection2image2"
                />
              </h6>
              <h2>Migration trends</h2>
              <p>
                65%[2] of all migrants move from rural to urban areas in Nepal
              </p>
            </div>
          </div>
          <div className="row2_NepalSection2">
            <div className="col3_NepalSection2">
              <h6>
                <img
                  src={PhilippinesSection2image3}
                  alt="PhilippinesSection2image3"
                />
              </h6>
              <h2>Key destination areas</h2>
              <p>Kathmandu [3]</p>
            </div>
            <div className="col4_NepalSection2">
              <h6>
                <img
                  src={PhilippinesSection2image4}
                  alt="PhilippinesSection2image4"
                />
              </h6>
              <h2>Prominent sectors of employment for migrants</h2>
              <p>
                Service sector[5] (42.7%), construction (12.6%) and
                manufacturing (9.9).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhilippinesSection2;
