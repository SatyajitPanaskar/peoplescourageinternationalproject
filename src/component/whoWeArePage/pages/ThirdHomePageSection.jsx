import React from "react";
import "../styles/thirdHomePageSection.css";
import Image1 from "../images/ThirdHomePage.webp";
const ThirdHomePageSection = () => {
  return (
    <>
      <div className="thirdHomePageSection container m-5">
        <div className="row row_thirdSection">
          <div className="col-3 col1_thirdSection">
            <h3>
              <img src={Image1} />
            </h3>
          </div>
          <div className="col-9 col2_thirdSection">
            <h2>Initiatives we Support</h2>
            <p>
              PCI invests in initiatives that create lasting impact for those
              often excluded. We have a strong legacy of collaborating with
              grassroots, community-led partners serving marginalized
              communities. Our belief is simple: scaling our mission requires
              collaboration across nonprofits, philanthropy, and public-private
              partnerships.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdHomePageSection;
