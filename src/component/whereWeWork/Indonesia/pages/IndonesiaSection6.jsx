import React from "react";
import "../styles/IndonesiaSection6.css";
import IndonesiaSection6Image1 from "../images/IndonesiaSection6Image1.webp";
const IndonesiaSection6 = () => {
  return (
    <>
      <div className="IndonesiaSection6">
        <div className="container container_IndonesiaSection6">
          <div className="row1_IndonesiaSection6">
            <h1>Geographical Presence of PCI</h1>
          </div>
          <div className="row2_IndonesiaSection6">
            <h6>
              <img
                src={IndonesiaSection6Image1}
                alt="IndonesiaSection6Image1"
              />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndonesiaSection6;
