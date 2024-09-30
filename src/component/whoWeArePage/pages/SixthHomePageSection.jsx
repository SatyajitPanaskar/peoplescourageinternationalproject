import React from "react";
import "../styles/sixthHomePageSection.css";
import sixthSectionImage1 from "../images/sixthSectionImage1.gif";
import sixthSectionImage2 from "../images/sixthSectionImage2.gif";
import sixthSectionImage3 from "../images/sixthSectionImage3.gif";
import sixthSectionImage4 from "../images/sixthSectionImage4.gif";
import sixthSectionImage5 from "../images/sixthSectionImage5.gif";

const SixthHomePageSection = () => {
  return (
    <>
      <div className="container sixthContainerSection">
        <div className="sixthHeadlineSection">
          <h2>Our Values</h2>
          <p>
            In our work and interactions with both internal and external
            individuals, we uphold the following five core values:
          </p>
        </div>
        <div className="row row1_SixthSection">
          <div className="col-4 col1_sixthSection">
            <h6 className="text-center mt-3">
              <img src={sixthSectionImage1} alt="Image1" />
            </h6>
            <h2>Equity</h2>
            <p>
              Through inclusive strategies, we aim to dismantle social
              hierarchies. Besides, we also aim to minimize hierarchies within
              our organization as well. In order to promote an equitable
              culture, we give particular attention to the needs of the
              excluded.
            </p>
          </div>
          <div className="col-4 col2_sixthSection">
            <h6 className="text-center mt-3">
              <img src={sixthSectionImage2} alt="Image1" />
            </h6>
            <h2>Dignity</h2>
            <p>
              We respect and recognize each person's agency, autonomy and worth.
              Although the people we assist are among the most marginalized, we
              acknowledge their leadership and the labour they put into the
              fight against injustice and violence. We uphold reverence even
              when resolving disputes.
            </p>
          </div>
          <div className="col-4 col3_sixthSection">
            <h6 className="text-center mt-3">
              <img src={sixthSectionImage3} alt="Image1" />
            </h6>
            <h2>Integrity</h2>
            <p>
              We have a responsibility towards the community, survivors, and the
              partners who collaborate with us. We make it a point to
              communicate about our difficulties, successes, and failures which
              helps us to reflect and learn both from our own, as well as other
              people's experiences.
            </p>
          </div>
        </div>
        <div className="row row2_SixthSection">
          <div className="col-2 col4_sixthSection"></div>
          <div className="col-4 col5_sixthSection">
            <h6 className="text-center mt-3">
              <img src={sixthSectionImage4} alt="Image1" />
            </h6>
            <h2>Co-Creation</h2>
            <p>
              We actively aim to draw the participation of the communities and
              survivors we deal with in, as well as the rest of our team, from
              advisors to field staff. As a result, we can innovate, improve our
              strategies, and develop our ability to expand our bandwidth for
              change.
            </p>
          </div>
          <div className="col-4 col6_sixthSection">
            <h6 className="text-center mt-3">
              <img src={sixthSectionImage5} alt="Image1" />
            </h6>
            <h2>Transformative Leadership</h2>
            <p>
              People’s Courage International means ‘people’s courage’. We want
              to foster this courage through our work so that those we
              collaborate with can become leaders, and facilitators of change.
            </p>
          </div>
          <div className="col-2 col7_sixthSection"></div>
        </div>
      </div>
    </>
  );
};

export default SixthHomePageSection;
