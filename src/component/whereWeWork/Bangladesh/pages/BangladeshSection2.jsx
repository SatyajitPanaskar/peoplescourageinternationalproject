import React from "react";
import "../styles/BangladeshSection2.css";
import BangladeshSection2image1 from "../images/BangladeshSection2image1.webp";
import BangladeshSection2image2 from "../images/BangladeshSection2image2.png";
import BangladeshSection2image3 from "../images/BangladeshSection2image3.png";
import BangladeshSection2image4 from "../images/BangladeshSection2image4.webp";

const BangladeshSection2 = () => {
  return (
    <>
      <div className="BangladeshSection2">
        <div className="container conatiner_BangladeshSection2">
          <div className="title_BangladeshSection2">
            <h1>Key Facts on internal migration</h1>
            <h4>Overview</h4>
          </div>
          <div className="row1_BangladeshSection2">
            <div className="col1_BangladeshSection2">
              <h6>
                <img
                  src={BangladeshSection2image1}
                  alt="BangladeshSection2image1"
                />
              </h6>
              <h2>Number of internal migrants</h2>
              <p>13.7 million[1] lifetime migrants.</p>
            </div>
            <div className="col2_BangladeshSection2">
              <h6>
                <img
                  src={BangladeshSection2image2}
                  alt="BangladeshSection2image2"
                />
              </h6>
              <h2>Migration trends</h2>
              <p>
                66.2%[2] of all migrants move from rural to urban areas in
                Bangladesh
              </p>
            </div>
          </div>
          <div className="row2_BangladeshSection2">
            <div className="col3_BangladeshSection2">
              <h6>
                <img
                  src={BangladeshSection2image3}
                  alt="BangladeshSection2image3"
                />
              </h6>
              <h2>Key destination areas</h2>
              <p>[3]Dhaka, Khulna, Rajshahi</p>
            </div>
            <div className="col4_BangladeshSection2">
              <h6>
                <img
                  src={BangladeshSection2image4}
                  alt="BangladeshSection2image4"
                />
              </h6>
              <h2>Prominent sectors of employment for migrants</h2>
              <p>
                Ready Made Garment sector[4] (85% are internal migrants[5] ),
                Rickshaw pullers[6], Construction sector[7]
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BangladeshSection2;
