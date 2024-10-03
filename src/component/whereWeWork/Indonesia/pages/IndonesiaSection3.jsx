import React from "react";
import "../styles/IndonesiaSection3.css";
import IndonesiaSection3image1 from "../images/IndonesiaSection3image1.png";
import IndonesiaSection3image2 from "../images/IndonesiaSection3image2.webp";
import IndonesiaSection3image3 from "../images/IndonesiaSection3image3.webp";
import IndonesiaSection3image4 from "../images/IndonesiaSection3image4.webp";

const IndonesiaSection3 = () => {
  return (
    <>
      <div className="IndonesiaSection3">
        <div className="container conatiner_IndonesiaSection3">
          <div className="title_IndonesiaSection3">
            <h4>Climate impacts</h4>
          </div>
          <div className="row1_IndonesiaSection3">
            <div className="col1_IndonesiaSection3">
              <h6>
                <img
                  src={IndonesiaSection3image1}
                  alt="IndonesiaSection3image1"
                />
              </h6>

              <p>
                110 million Indonesians across 60 cities of the country are
                exposed to the impacts of climate change, with the poor being
                highly vulnerable. [6] Current estimates for climate migrants in
                the country are unavailable.
              </p>
            </div>
            <div className="col2_IndonesiaSection3">
              <h6>
                <img
                  src={IndonesiaSection3image2}
                  alt="IndonesiaSection3image2"
                />
              </h6>

              <p>
                Indonesia’s Jakarta is a well-known example of the environmental
                impacts of rapid urbanisation. It has been projected to be the
                fastest-sinking city globally [7], and is estimated to sink 95%
                by 2050. [8] Such a catastrophic event could lead to large-scale
                migration out of the city
              </p>
            </div>
          </div>
          <div className="row2_IndonesiaSection3">
            <div className="col3_IndonesiaSection3">
              <h6>
                <img
                  src={IndonesiaSection3image3}
                  alt="IndonesiaSection3image3"
                />
              </h6>

              <p>
                Top three impacts at source on livelihoods in Indonesia are crop
                loss (58%), job loss (37%) and wage loss (28%), and household
                impacts are food insecurity (57%), lost access to water and
                sanitation (37%) and health issues (34%). (Sample size - 368)
              </p>
            </div>
            <div className="col4_IndonesiaSection3">
              <h6>
                <img
                  src={IndonesiaSection3image4}
                  alt="IndonesiaSection3image4"
                />
              </h6>

              <p>
                Top three impacts at destination on livelihoods are wage loss
                (57%) , wage cut (45%) and job loss (31%), and household impacts
                are health issues (63%), transportation routes in/out of migrant
                locations damaged/slowed (28%) and house damage (19%). (Sample
                size - 662)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndonesiaSection3;
