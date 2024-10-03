import React from "react";
import "../styles/IndonesiaSection5.css";
import IndonesiaSection5Image1 from "../images/IndonesiaSection5Image1.webp";
import IndonesiaSection5Image2 from "../images/IndonesiaSection5Image2.png";
import IndonesiaSection5Image3 from "../images/IndonesiaSection5Image3.webp";
import IndonesiaSection5Image4 from "../images/IndonesiaSection5Image4.png";

const IndonesiaSection5 = () => {
  return (
    <>
      <div className="IndonesiaSection5">
        <div className="container container_IndonesiaSection5">
          <div className="headText_IndonesiaSection5">
            <h2>Partners</h2>
          </div>
          <div className="row_IndonesiaSection5">
            <div className="col1_IndonesiaSection5">
              <h6>
                <img
                  src={IndonesiaSection5Image1}
                  alt="IndonesiaSection5Image1"
                />
              </h6>
            </div>
            <div className="col2_IndonesiaSection5">
              <h6>
                <img
                  src={IndonesiaSection5Image2}
                  alt="IndonesiaSection5Image2"
                />
              </h6>
            </div>
            <div className="col3_IndonesiaSection5">
              <h6>
                <img
                  src={IndonesiaSection5Image3}
                  alt="IndonesiaSection5Image3"
                />
              </h6>
            </div>
            <div className="col4_IndonesiaSection5">
              <h6>
                <img
                  src={IndonesiaSection5Image4}
                  alt="IndonesiaSection5Image4"
                />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndonesiaSection5;
