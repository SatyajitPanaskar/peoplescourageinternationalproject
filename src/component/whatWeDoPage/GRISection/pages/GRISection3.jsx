import React from "react";
import "../styles/GRISection3.css";
import GRISection3Image1 from "../image/GRISection3image1.webp";
import GRISection3Image2 from "../image/GRISection3image2.webp";
import GRISection3Image3 from "../image/GRISection3image3.webp";
import GRISection3Image4 from "../image/GRISection3image4.png";
const GRISection3 = () => {
  return (
    <>
      <div className="griSection3">
        <div className="container container_griSection3">
          <div className="row row1_griSection3">
            <div className="col-3 col1_grisection3">
              <h6>
                <img src={GRISection3Image1} alt="GRISection3Image1" />
              </h6>
            </div>
            <div
              className="col-9 col2_grisection3 "
              style={{ paddingLeft: "100px" }}>
              <h1>Our Solution</h1>
              <p>
                The Grassroots Resilience Institute (GRI) Initiative aims to
                collaborate with Community-Based Organizations (CBOs) and assist
                them in building their OD capacity. We aim to provide
                comprehensive support to the CSOs that will enable them in
                holistically furthering their mission. This will be enabled by
                providing capacity-building support in these organizations in
                the following areas:
              </p>
              <li>Financial Management and Compliances</li>
              <li>Leadership, Governance, and Policies</li>
              <li>Fundraising and Donor Management</li>
            </div>
          </div>
          <div className=" row2_griSection3">
            <div className="col3_grisection3">
              <h6>
                <img src={GRISection3Image2} alt="" />
              </h6>
              <h2>Flexible</h2>
              <p>
                Flexible in our approach, considering the size and stage of the
                organization and the type of support required.
              </p>
            </div>

            <div className="col4_grisection3">
              <h6>
                <img src={GRISection3Image3} alt="" />
              </h6>
              <h2>Customizable</h2>
              <p>
                Adaptable to the specific needs of each organization, ranging
                from 3-5 years of support through a mix of cohort-based
                workshops, 1:1 coaching sessions, and a series of expert
                sessions.
              </p>
            </div>

            <div className="col5_grisection3">
              <h6>
                <img src={GRISection3Image4} alt="" />
              </h6>
              <h2>Organization</h2>
              <p>
                Mission-aligned organizations led by individuals from
                marginalized communities.
              </p>
            </div>
          </div>
          <div className="row row3_griSection3">
            <div className="col-12">
              <p>
                We hope to see our work helping grassroots organizations become
                robust and resilient with program delivery and financial health,
                and thriving together in an uncertain and complex world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GRISection3;
