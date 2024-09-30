import React from "react";
import "../styles/fifthHomePageSection.css";

import fifthSectionImage1 from "../images/fifthSectionimage1.webp";
import fifthSectionImage2 from "../images/fifthSectionimage.webp";

const FifthHomePageSection = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 mb-4 col1_fifthSection">
          <div
            className="card"
            style={{
              width: "25rem",
              height: "22rem",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <img
              src={fifthSectionImage1}
              className="card-img-top"
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="..."
            />
            <div class="card-body fifthSectionCardbody">
              <h3 className="card-title ">Our Vision</h3>
              <p className="card-text">Dignity and equality for all.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4 col2_fifthSection">
          <div
            className="card "
            style={{
              width: "25rem",
              height: "22rem",
              alignItems: "center",
            }}>
            <img
              src={fifthSectionImage2}
              className="card-img-top"
              alt="Mission"
            />
            <div className="card-body text-center fifthSectionCardbody">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                People’s Courage International seeks to end violence against
                women and children in South and Southeast Asia. Besides, it aims
                to ensure safe migration and labor security for the most
                marginalized social groups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthHomePageSection;
