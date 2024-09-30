import React from "react";
import "../styles/IndiaSection2.css";
import IndiaSection2image1 from "../images/IndiaSection2image1.png";
import IndiaSection2image2 from "../images/IndiaSection2image2.webp";
import IndiaSection2image3 from "../images/IndiaSection2image3.webp";
import IndiaSection2image4 from "../images/IndiaSection2image4.png";

const IndiaSection2 = () => {
  return (
    <>
      <div className="IndiaSection2">
        <div className="container conatiner_IndiaSection2">
          <div className="title_IndiaSection2">
            <h1>Key Facts on internal migration</h1>
            <h4>Overview</h4>
          </div>
          <div className="row1_IndiaSection2">
            <div className="col1_IndiaSection2">
              <h6>
                <img src={IndiaSection2image1} alt="IndiaSection2image1" />
              </h6>
              <h2>Number of internal migrants</h2>
              <p>140 million internal migrants move for work [1]</p>
            </div>
            <div className="col2_IndiaSection2">
              <h6>
                <img src={IndiaSection2image2} alt="IndiaSection2image2" />
              </h6>
              <h2>Migration trends</h2>
              <p>
                62% migrants move from rural to rural areas followed by 20%
                migrating from rural to urban [2]
              </p>
            </div>
          </div>
          <div className="row2_IndiaSection2">
            <div className="col3_IndiaSection2">
              <h6>
                <img src={IndiaSection2image3} alt="IndiaSection2image3" />
              </h6>
              <h2>Key destination areas</h2>
              <p>[3] Maharashtra, Delhi and Gujarat</p>
            </div>
            <div className="col4_IndiaSection2">
              <h6>
                <img src={IndiaSection2image4} alt="IndiaSection2image4" />
              </h6>
              <h2>Prominent sectors of employment for migrants</h2>
              <p>
                [4] construction sector, agriculture and manufacturing sector
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndiaSection2;
