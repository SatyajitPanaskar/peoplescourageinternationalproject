import React from "react";
import "../styles/NepalSection4.css";
import NepalSection4Image1 from "../images/NepalSection4Image1.webp";
import NepalSection4Image2 from "../images/NepalSection4Image2.jpeg";
import NepalSection4Image3 from "../images/NepalSection4Image3.png";

const NepalSection4 = () => {
  return (
    <>
      <div className="NepalSection4">
        <div className="container container_NepalSection4">
          <div className="headText_NepalSection4">
            <h2>Partners</h2>
          </div>
          <div className="row_NepalSection4">
            <div className="col1_NepalSection4">
              <h6>
                <img src={NepalSection4Image1} alt="NepalSection4Image1" />
              </h6>
            </div>
            <div className="col2_NepalSection4">
              <h6>
                <img src={NepalSection4Image2} alt="NepalSection4Image2" />
              </h6>
            </div>
            <div className="col3_NepalSection4">
              <h6>
                <img src={NepalSection4Image3} alt="NepalSection4Image3" />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NepalSection4;
