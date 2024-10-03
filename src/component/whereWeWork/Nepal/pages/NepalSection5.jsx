import React from "react";
import "../styles/NepalSection5.css";
import NepalSection5Image1 from "../images/NepalSection5Image1.webp";
const NepalSection5 = () => {
  return (
    <>
      <div className="NepalSection5">
        <div className="container container_NepalSection5">
          <div className="row1_NepalSection5">
            <h1>Geographical Presence of PCI</h1>
          </div>
          <div className="row2_NepalSection5">
            <h6>
              <img src={NepalSection5Image1} alt="NepalSection5Image1" />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default NepalSection5;
