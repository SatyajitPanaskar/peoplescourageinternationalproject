import React from "react";
import "../styles/BangladeshSection4.css";
import BangladeshSection4Image1 from "../images/BangladeshSection4Image1.webp";
import BangladeshSection4Image2 from "../images/BangladeshSection4Image2.webp";
import BangladeshSection4Image3 from "../images/BangladeshSection4Image3.webp";
import BangladeshSection4Image4 from "../images/BangladeshSection4Image4.jpeg";

const BangladeshSection4 = () => {
  return (
    <>
      <div className="BangladeshSection4">
        <div className="container container_BangladeshSection4">
          <div className="headText_BangladeshSection4">
            <h2>Partners</h2>
          </div>
          <div className="row_BangladeshSection4">
            <div className="col1_BangladeshSection4">
              <h6>
                <img
                  src={BangladeshSection4Image1}
                  alt="BangladeshSection4Image1"
                />
              </h6>
            </div>
            <div className="col2_BangladeshSection4">
              <h6>
                <img
                  src={BangladeshSection4Image2}
                  alt="BangladeshSection4Image2"
                />
              </h6>
            </div>
            <div className="col3_BangladeshSection4">
              <h6>
                <img
                  src={BangladeshSection4Image4}
                  alt="BangladeshSection4Image3"
                />
              </h6>
            </div>
            <div className="col4_BangladeshSection4">
              <h6>
                <img
                  src={BangladeshSection4Image3}
                  alt="BangladeshSection4Image4"
                />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BangladeshSection4;
