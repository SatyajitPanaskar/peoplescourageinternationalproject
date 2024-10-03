import React from "react";
import "../styles/IndonesiaSection2.css";
import IndonesiaSection2image1 from "../images/IndonesiaSection2image1.webp";
import IndonesiaSection2image2 from "../images/IndonesiaSection2image2.webp";
import IndonesiaSection2image3 from "../images/IndonesiaSection2image3.webp";
import IndonesiaSection2image4 from "../images/IndonesiaSection2image4.png";

const IndonesiaSection2 = () => {
  return (
    <>
      <div className="IndonesiaSection2">
        <div className="container conatiner_IndonesiaSection2">
          <div className="title_IndonesiaSection2">
            <h1>Key Facts on internal migration</h1>
            <h4>Overview</h4>
          </div>
          <div className="row1_IndonesiaSection2">
            <div className="col1_IndonesiaSection2">
              <h6>
                <img
                  src={IndonesiaSection2image1}
                  alt="IndonesiaSection2image1"
                />
              </h6>
              <h2>Number of internal migrants</h2>
              <p>27 million internal migrants[1]</p>
            </div>
            <div className="col2_IndonesiaSection2">
              <h6>
                <img
                  src={IndonesiaSection2image2}
                  alt="IndonesiaSection2image2"
                />
              </h6>
              <h2>Migration trends</h2>
              <p>
                62% migrants move from rural to rural areas followed by 20%
                migrating from rural to urban [2]
              </p>
            </div>
          </div>
          <div className="row2_IndonesiaSection2">
            <div className="col3_IndonesiaSection2">
              <h6>
                <img
                  src={IndonesiaSection2image3}
                  alt="IndonesiaSection2image3"
                />
              </h6>
              <h2>Key destination areas</h2>
              <p>[3] Maharashtra, Delhi and Gujarat</p>
            </div>
            <div className="col4_IndonesiaSection2">
              <h6>
                <img
                  src={IndonesiaSection2image4}
                  alt="IndonesiaSection2image4"
                />
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

export default IndonesiaSection2;
