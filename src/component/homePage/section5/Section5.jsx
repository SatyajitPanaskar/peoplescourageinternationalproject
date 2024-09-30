import React from "react";
import "./section5.css";
const Section5 = () => {
  return (
    <>
      <div className="section5">
        <div className="container section5_container">
          <div className="  row section5_row">
            <div className="col-6 section5_col1">
              <h2>A Path to Social Safety for Migrant Workers</h2>
              <h5>
                Watch Ashif Shaikh, the convener of MRC, share the idea behind
                our work and how we aim to work with governments, industry, and
                civil society to support those who build our world.
              </h5>
            </div>
            <div className="col-6 section5_col2">
              <h4>
                <video width="520" height="340" controls>
                  <source
                    src="https://embed.ted.com/talks/ashif_shaikh_a_path_to_social_safety_for_migrant_workers?hasSummary=true&subtitle=en"
                    type="video/mp4"
                  />
                </video>{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
