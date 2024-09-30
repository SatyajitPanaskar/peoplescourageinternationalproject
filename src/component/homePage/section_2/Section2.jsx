import React from "react";
import colImage from "./image (1).webp";
import "./section2.css";
const Section2 = () => {
  return (
    <>
      <div className="container section_2">
        <div className="row section_2_row">
          <div className="col-5 section_2_col1">
            <img src={colImage} alt="image" width={500} height={500} />
          </div>
          <div className="col-7 section_2_col2">
            <h1>People’s Courage International</h1>
            <h4>
              PCI promotes initiatives that work deeply – and at scale – on the
              ground and leverage this to change systems. To ensure the success
              of our initiatives, we support grassroots leaders and
              organizations by bringing resources, technical capacity, research,
              technology, and other supports so they can better
              <br /> realize their impact potential
            </h4>
            <h5 className="section_2_button">
              <a href="/HomePage">Read More</a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
