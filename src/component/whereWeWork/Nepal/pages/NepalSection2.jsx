import React from "react";
import "../styles/NepalSection2.css";
import NepalSection2image1 from "../images/NepalSection2image1.webp";
import NepalSection2image2 from "../images/NepalSection2image3.png";
import NepalSection2image3 from "../images/NepalSection2image2.png";
import NepalSection2image4 from "../images/NepalSection2image4.webp";

const NepalSection2 = () => {
  return (
    <>
      <div className="NepalSection2">
        <div className="container conatiner_NepalSection2">
          <div className="title_NepalSection2">
            <h1>Key Facts on internal migration</h1>
            <h4>Overview</h4>
          </div>
          <div className="row1_NepalSection2">
            <div className="col1_NepalSection2">
              <h6>
                <img src={NepalSection2image1} alt="NepalSection2image1" />
              </h6>
              <h2>Number of internal migrants</h2>
              <p>13.7 million[1] lifetime migrants.</p>
            </div>
            <div className="col2_NepalSection2">
              <h6>
                <img src={NepalSection2image2} alt="NepalSection2image2" />
              </h6>
              <h2>Migration trends</h2>
              <p>
                66.2%[2] of all migrants move from rural to urban areas in
                Bangladesh
              </p>
            </div>
          </div>
          <div className="row2_NepalSection2">
            <div className="col3_NepalSection2">
              <h6>
                <img src={NepalSection2image3} alt="NepalSection2image3" />
              </h6>
              <h2>Key destination areas</h2>
              <p>[3]Dhaka, Khulna, Rajshahi</p>
            </div>
            <div className="col4_NepalSection2">
              <h6>
                <img src={NepalSection2image4} alt="NepalSection2image4" />
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

export default NepalSection2;
