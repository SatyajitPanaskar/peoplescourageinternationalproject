import React from "react";
import "../styles/PhilippinesSection3.css";
import PhilippinesSection3image1 from "../images/PhilippinesSection3image1.webp";
import PhilippinesSection3image2 from "../images/PhilippinesSection3image2.webp";
import PhilippinesSection3image3 from "../images/PhilippinesSection3image3.webp";
const PhilippinesSection3 = () => {
  return (
    <>
      <div className="PhilippinesSection3">
        <div className="container container_PhilippinesSection3">
          <div className="head_PhilippinesSection3">
            <h1>Climate impacts</h1>
          </div>
          <div className="row_PhilippinesSection3">
            <div className="col1_PhilippinesSection3">
              <h6>
                <img
                  src={PhilippinesSection3image1}
                  alt="PhilippinesSection3image1"
                />
              </h6>
              <p>
                Climate migration: There are 345,018[7] estimated climate
                migrants in the country. An estimated 1.3 million people are
                predicted to migrate by 2050 as a result of climate change[8]
              </p>
            </div>
            <div className="col2_PhilippinesSection3">
              <h6>
                <img
                  src={PhilippinesSection3image2}
                  alt="PhilippinesSection3image2"
                />
              </h6>
              <p>
                Top three impacts at source on livelihoods are wage loss (74%)
                wage cut (68%) and crop loss (50%), and top three negative
                household impacts are food insecurity (83%), health issues (42%)
                and loss of access to water or sanitation services (37%)
                livelihoods impacts. (Sample size - 1494)
              </p>
            </div>
            <div className="col3_PhilippinesSection3">
              <h6>
                <img
                  src={PhilippinesSection3image3}
                  alt="PhilippinesSection3image3"
                />
              </h6>
              <p>
                Top three impacts at destination top three negative livelihood
                impacts are wage loss (87%), wage cut (49%), and employment
                related asset loss (17%), and top three negative household
                impacts are food insecurity (64%), health issues (63%), and loss
                of access to water and sanitation (37%). (Sample size - 734)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhilippinesSection3;
