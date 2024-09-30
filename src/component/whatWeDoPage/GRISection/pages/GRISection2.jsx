import React from "react";
import "../styles/GRISection2.css";
import GRISection2Image1 from "../image/GRISection2image1.webp";
const GRISection2 = () => {
  return (
    <>
      <div className="griSection2">
        <div className="container container_griSection2">
          <div className="row row_griSection2">
            <div className="col-9 col1_griSection2">
              <h1>The Problem</h1>
              <p>
                Over the years, the grassroots civil societies organizations
                (CSOs) have done remarkable work which has made their
                contributions indispensable for several reasons such as
                effective community engagement, local knowledge & expertise and
                building resilience of the communities.
              </p>
              <p>
                CSOs, especially those led by individuals from marginalized
                communities, have always faced challenges in maintaining and
                expanding their work. Despite playing a crucial role in deep
                community work, these organizations receive very negligible
                support of any kind due to a lack of awareness among funders.
                Due to the lack of Organizational Development (OD) funding,
                their growth in critical areas such as strategy, policy
                compliance, and fundraising are significantly hindered.
              </p>
            </div>
            <div className="col-3 col2_griSection2">
              <h6>
                <img src={GRISection2Image1} alt="GRISection2Images1" />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GRISection2;
