import React from "react";
import "../styles/BangladeshSection5.css";
import BangladeshSection5Image1 from "../images/BangladeshSection5Image1.webp";
const BangladeshSection5 = () => {
  return (
    <>
      <div className="BangladeshSection5">
        <div className="container container_BangladeshSection5">
          <div className="row1_BangladeshSection5">
            <h1>Geographical Presence of PCI</h1>
          </div>
          <div className="row2_BangladeshSection5">
            <h6>
              <img
                src={BangladeshSection5Image1}
                alt="BangladeshSection5Image1"
              />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default BangladeshSection5;
