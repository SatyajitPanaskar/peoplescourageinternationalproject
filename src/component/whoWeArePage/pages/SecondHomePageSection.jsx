import React from "react";
import "../styles/secondHomepageSection.css";
import Image1 from "../images/SecondHomePage.webp";
const SecondHomePageSection = () => {
  return (
    <>
      <div className="secondHomepageSection">
        <div className="container container_SecondSection">
          <div className="row row_SecondSection">
            <div className="col-9 col1_SecondSection">
              <h2>How it started</h2>
              <p>
                Vulnerable communities, particularly those from low-to-middle
                income countries, face complex and interconnected challenges,
                leaving them more exposed to risks like climate change and
                economic instability. These challenges are particularly acute
                for internal migrants, informal workers, survivors of violence,
                and other marginalized groups. Grassroots organizations embedded
                in these communities play a critical role in addressing these
                issues, from providing social protection and building resilience
                to preventing violence against women and children. Yet, these
                community leaders and organizations often struggle to sustain
                their work, including limited funding for capacity building.
                Moreover, investments in people-centred approaches to migration,
                climate change, and violence prevention remain scarce.
              </p>
              <p>
                Founded in 2020, PCI is a US-based nonprofit that empowers
                community-led organizations across South and Southeast Asia. Our
                focus is on building resilience for internal migrants,
                strengthening grassroots organizations, and preventing sexual
                violence against women and children.
              </p>
            </div>
            <div className="col-3 col2_SecondSection">
              <h3>
                <img src={Image1} />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondHomePageSection;
