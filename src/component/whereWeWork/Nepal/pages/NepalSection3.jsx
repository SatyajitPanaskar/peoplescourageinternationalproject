import React from "react";
import "../styles/NepalSection3.css";
import NepalSection3image1 from "../images/NepalSection3image1.webp";
import NepalSection3image2 from "../images/NepalSection3image2.webp";
import NepalSection3image3 from "../images/NepalSection3image3.webp";
const NepalSection3 = () => {
  return (
    <>
      <div className="NepalSection3">
        <div className="container container_NepalSection3">
          <div className="head_NepalSection3">
            <h1>Climate impacts</h1>
          </div>
          <div className="row_NepalSection3">
            <div className="col1_NepalSection3">
              <h6>
                <img src={NepalSection3image1} alt="NepalSection3image1" />
              </h6>
              <p>
                Climate migrants in Bangladesh (prediction): 13.3 million
                internal migrants by 2050 as a result of climate change[10]
              </p>
            </div>
            <div className="col2_NepalSection3">
              <h6>
                <img src={NepalSection3image2} alt="NepalSection3image2" />
              </h6>
              <p>
                Top three impacts at source on livelihood are crop loss (73%),
                wage loss (64%) and wage cut (41%), and household impacts are
                food insecurity (92%), health issues (75%) and house damage
                (47%). (sample size- 1048)
              </p>
            </div>
            <div className="col3_NepalSection3">
              <h6>
                <img src={NepalSection3image3} alt="NepalSection3image3" />
              </h6>
              <p>
                Top three impacts at source on livelihood are wage loss (80%)
                wage cut (41%) and job loss (20%), and household impacts are
                health issues (84%), food insecurity (83%), and house damage
                (38%). (sample size- 615)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NepalSection3;
