import React from "react";
import CRISection2Image from "../images/CRISectionImage2.webp";
import CRISection2Image1 from "../images/CRIsection2image1.webp";
import CRISection2Image2 from "../images/CRISection2image2.webp";

import CRISection2Image3 from "../images/CRISection2image3.webp";
import "../Styles/CRISection2.css";
const CRISection2 = () => {
  return (
    <>
      <div className="criSection2">
        <div className="container container_criSection2 pt-5">
          <div className="row row1_criSection2">
            <div className="col-9 col1_criSection2 pt-4 ">
              <h1>The Problem</h1>
              <p>
                Climate change may push more than 720 million people back into
                poverty by 2050. It may also force 140 million people to become
                climate refugees. For informal workers and vulnerable
                communities in South and Southeast Asia, increased climate
                events have cascading impacts: further income insecurity (e.g.,
                ~43 million jobs lost in South Asia), forced migration (e.g., 20
                additional million climate migrants by 2050 in Bangladesh
                alone), food and water insecurity, increase in morbidity and
                excess deaths, and increased inequality. Some of these impacts
                will materialize even in low-warming scenarios, especially with
                the lack of social protections.
              </p>
              <p>
                These communities hardly contribute to climate change, but bear
                the brunt of its impact. This, even as they and their
                perspectives are absent from global forums and development of
                transition policies.
              </p>
              <p>
                To change this, we believe there is a need to address three
                inter-related problems:
              </p>
            </div>
            <div className="col-3 col2_criSection2">
              <h6>
                <img src={CRISection2Image} alt="CRISection2Image1" />
              </h6>
            </div>
          </div>
          <div className="row row2_criSection2">
            <div className="col-4 col2_1_criSection2">
              <h6>
                <img src={CRISection2Image1} alt="CRISection2Image1" />
              </h6>
              <h2>Investment gap</h2>
              <p>
                Less than 20% of climate adaptation needs are funded. And less
                than 5% of climate funding goes to adaptation.
              </p>
            </div>
            <div className="col-4 col2_2_criSection2">
              <h6>
                <img src={CRISection2Image2} alt="CRISection2Image1" />
              </h6>
              <h2>Design and innovation gap</h2>
              <p>
                Even where there is investment, interventions mostly focus on
                responses to climate extremes. There is limited focus on slow
                onset events (e.g., heat, droughts) and the medium- to long-term
                impacts that affect 100s of millions.
              </p>
            </div>
            <div className="col-4 col2_3_criSection2">
              <h6>
                <img src={CRISection2Image3} alt="CRISection2Image1" />
              </h6>
              <h2>
                Invisibility of workers and lack of a people-first approach
              </h2>
              <p>
                Climate policy is designed far from those who are experiencing
                the worst outcomes of climate change. Vulnerable communities in
                South and Southeast Asia are often invisible in the informal
                workforce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CRISection2;
