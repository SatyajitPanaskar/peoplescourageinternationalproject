import React from "react";
import CRISection3Image from "../images/CRISection3Image.webp";
import CRISection3Image1 from "../images/CRISection3Image1.webp";
import CRISection3Image2 from "../images/CRISection3Image2.webp";
import CRISection3Image3 from "../images/CRISection3Image3.webp";

import "../Styles/CRISection3.css";

const CRISection3 = () => {
  return (
    <>
      <div className="criSection3">
        <div className="container container_criSection3 pt-5">
          <div className="row row1_criSection3">
            <div className="col-3 col2_criSection3">
              <h6>
                <img src={CRISection3Image} alt="CRISection2Image1" />
              </h6>
            </div>
            <div className="col-9 col1_criSection3 pt-4 ">
              <h1>Our Solution</h1>
              <p>
                The mission of our initiative is to build the resilience of
                climate-affected informal workers by ensuring their access to
                climate-responsive social protection and adaptation supports. We
                aim to serve these communities across India, Bangladesh, Nepal,
                Indonesia, and Philippines, and build narratives and promote
                models that resonate far beyond. Key components of our work
                include:
              </p>
            </div>
          </div>
          <div className="row row2_criSection3">
            <div className="col-4 col2_1_criSection3">
              <h6>
                <img src={CRISection3Image1} alt="CRISection2Image1" />
              </h6>
              <h2>Narrative building</h2>
              <p>Promote a people-first narrative by:</p>
              <ul>
                <li>
                  Elevating stories and clear data about who needs to be
                  supported in contrast to using a single siloed-lens (e.g.,
                  climate adaptation, labor rights)
                </li>
                <li>
                  Prioritizing bringing their voices into strategy development,
                  and getting the global community to hear from them on
                  solutions
                </li>
              </ul>
            </div>
            <div className="col-4 col2_2_criSection3">
              <h6>
                <img src={CRISection3Image2} alt="CRISection2Image1" />
              </h6>
              <h2>Project innovation & scaling</h2>
              <p>Promote people-centric approaches by:</p>
              <ul>
                <li>
                  Developing on-ground projects with grassroots organizations
                  based on community demand
                </li>
                <li>Building the evidence base of people-centric solutions</li>
                <li>
                  Growing the base of grassroots actors working on these issues
                </li>
              </ul>
            </div>
            <div className="col-4 col2_3_criSection3">
              <h6>
                <img src={CRISection3Image3} alt="CRISection2Image1" />
              </h6>
              <h2>Advocacy for systems change</h2>
              <p>
                Drive investment by philanthropies, bi/multi-laterals, industry,
                and governments by:
              </p>
              <ul>
                <li>Clarifying what works on the ground</li>
                <li>
                  Advocating for delivery and financing models that can be
                  implemented sustainably / systemically
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CRISection3;
