import React from "react";
import "../Styles/CRISection4.css";
import CRISection4Image1 from "../images/image.webp";
const CRISection4 = () => {
  return (
    <>
      <div className="criSection4">
        <div className="container container_criSection4">
          <h1>Where we work</h1>
          <div className="row row_criSection4">
            <div className="col-12 col2_criSection4">
              <h6>
                <img src={CRISection4Image1} alt="Image" />
              </h6>
            </div>
          </div>
          <div className="criSection4Maptext">
            <p className="p1">
              <span> South Asia:</span> Bangladesh, India, and Nepal
            </p>
            <p className="p2">
              <span> Southeast Asia: </span> Indonesia, and Philippines
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CRISection4;
