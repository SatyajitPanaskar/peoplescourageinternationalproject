import React from "react";
import "../styles/IndiaSection3.css";
import IndiaSection3image1 from "../images/IndiaSection3image1.webp";
import IndiaSection3image2 from "../images/IndiaSection3image2.png";
import IndiaSection3image3 from "../images/IndiaSection3image3.webp";
import IndiaSection3image4 from "../images/IndiaSection3image4.webp";
import IndiaSection3image5 from "../images/IndiaSection3image5.webp";

const IndiaSection3 = () => {
  return (
    <>
      <div className="IndiaSection3">
        <div className="container container_IndiaSection3">
          <div className="head_IndiaSection3">
            <h1>Climate impacts</h1>
          </div>
          <div className="row_IndiaSection3">
            <div className="col1_IndiaSection3">
              <h6>
                <img src={IndiaSection3image1} alt="IndiaSection3image1" />
              </h6>
              <p>
                Climate migrants in Bangladesh (prediction): 13.3 million
                internal migrants by 2050 as a result of climate change[10]
              </p>
            </div>
            <div className="col2_IndiaSection3">
              <h6>
                <img src={IndiaSection3image2} alt="IndiaSection3image2" />
              </h6>
              <p>
                Top three impacts at source on livelihood are crop loss (73%),
                wage loss (64%) and wage cut (41%), and household impacts are
                food insecurity (92%), health issues (75%) and house damage
                (47%). (sample size- 1048)
              </p>
            </div>
            <div className="col3_IndiaSection3">
              <h6>
                <img src={IndiaSection3image3} alt="IndiaSection3image3" />
              </h6>
              <p>
                Top three impacts at source on livelihood are wage loss (80%)
                wage cut (41%) and job loss (20%), and household impacts are
                health issues (84%), food insecurity (83%), and house damage
                (38%). (sample size- 615)
              </p>
            </div>
          </div>
          <div className="row2_IndiaSection3">
            <div className="col4_IndiaSection3">
              <h6>
                <img src={IndiaSection3image4} alt="IndiaSection3image4" />
              </h6>
              <p>
                Climate migrants in Bangladesh (prediction): 13.3 million
                internal migrants by 2050 as a result of climate change[10]
              </p>
            </div>
            <div className="col5_IndiaSection3">
              <h6>
                <img src={IndiaSection3image5} alt="IndiaSection3image5" />
              </h6>
              <p>
                Top three impacts at source on livelihood are crop loss (73%),
                wage loss (64%) and wage cut (41%), and household impacts are
                food insecurity (92%), health issues (75%) and house damage
                (47%). (sample size- 1048)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndiaSection3;
