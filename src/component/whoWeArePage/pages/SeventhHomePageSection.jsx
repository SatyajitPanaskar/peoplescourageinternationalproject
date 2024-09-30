import React from "react";
import "../styles/seventhHomePageSection.css";
import SeventhSectionImage1 from "../images/SeventhSectionImage1.webp";
import SeventhSectionImage2 from "../images/SeventhSectionImage2.webp";
import SeventhSectionImage3 from "../images/SeventhSectionImage3.webp";
import SeventhSectionImage4 from "../images/SeventhSectionImage4.jpg";
import SeventhSectionImage5 from "../images/SeventhSectionImage5.webp";
import SeventhSectionImage6 from "../images/SeventhSectionImage6.webp";
import SeventhSectionImage7 from "../images/SeventhSectionImage7.webp";
import SeventhSectionImage8 from "../images/SeventhSectionImage8.webp";
import SeventhSectionImage9 from "../images/SeventhSectionImage9.webp";

const SeventhHomePageSection = () => {
  return (
    <>
      <div className="seventhSection">
        <div className="container container_SeventhSection">
          <div className="seventhHeadText">
            <h1>Our Leadership</h1>
          </div>
          <div className="row row1_SeventhSection">
            <div className="col-2 col1_SeventhSection">
              <h6>
                <img src={SeventhSectionImage1} alt="Image1" />
              </h6>
              <h4>Ameena Kidwai</h4>
            </div>
            <div className="col-2 col2_SeventhSection">
              <h6>
                <img src={SeventhSectionImage2} alt="Image1" />
              </h6>
              <h4>Ashif Shaikh</h4>
            </div>
            <div className="col-2 col3_SeventhSection">
              <h6>
                <img src={SeventhSectionImage3} alt="Image1" />
              </h6>
              <h4>Binu Arickal</h4>
            </div>
            <div className="col-2 col4_SeventhSection">
              <h6>
                <img src={SeventhSectionImage4} alt="Image1" />
              </h6>
              <h4>Madhumitha Hebbar</h4>
            </div>
            <div className="col-2 col5_SeventhSection">
              <h6>
                <img src={SeventhSectionImage5} alt="Image1" />
              </h6>
              <h4>Nitish Narain</h4>
            </div>
          </div>
          <div className="row row2_SeventhSection">
            <div className="col-2 col6_SeventhSection">
              <h6>
                <img src={SeventhSectionImage6} alt="Image1" />
              </h6>
              <h4>Puja Issar</h4>
            </div>
            <div className="col-2 col7_SeventhSection">
              <h6>
                <img src={SeventhSectionImage7} alt="Image1" />
              </h6>
              <h4>Rajesh Balani</h4>
            </div>
            <div className="col-2 col8_SeventhSection">
              <h6>
                <img src={SeventhSectionImage8} alt="Image1" />
              </h6>
              <h4>Siri Avalur</h4>
            </div>
            <div className="col-2 col9_SeventhSection">
              <h6>
                <img src={SeventhSectionImage9} alt="Image1" />
              </h6>
              <h4>Varun Behani</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeventhHomePageSection;
