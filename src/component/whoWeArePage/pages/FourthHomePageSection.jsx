import React from "react";
import Image1 from "../images/fourthicon1.webp";
import Image2 from "../images/fourthicon2.webp";
import Image3 from "../images/fourth3.webp";
import "../styles/fourthHomePageSection.css";
const FourthHomePageSection = () => {
  return (
    <>
      <div className="fourthSection">
        <div className="container">
          <div className="textSection">
            <h1>How we do it</h1>
            <p>
              We support organizations working across South and Southeast Asia
              to:
            </p>
          </div>
          <div className="cardIocnSection">
            <div className="col1_fourthSection">
              <h6 className="text-center">
                <img src={Image1} alt="Image1" />
              </h6>
              <h4>
                Build resilience for migrants, informal workers, and vulnerable
                communities through climate-responsive social protection
              </h4>
            </div>
            <div className="col2_fourthSection">
              <h6 className="text-center">
                <img src={Image2} alt="Image1" />
              </h6>
              <h4>
                Strengthen grassroots organizations' resilience through capacity
                building
              </h4>
            </div>
            <div className="col3_fourthSection">
              <h6 className="text-center">
                <img src={Image3} alt="Image1" />
              </h6>
              <h4>
                Prevent sexual violence against women and children with a focus
                on prevention
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthHomePageSection;
