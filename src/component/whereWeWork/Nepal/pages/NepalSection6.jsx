import React from "react";
import "../styles/NepalSection6.css";
import NepalSection6Image1 from "../images/NepalSection6Image1.webp";
import NepalSection6Image2 from "../images/NepalSection6Image2.webp";
import NepalSection6Image3 from "../images/NepalSection6Image3.jpeg";
import NepalSection6Image4 from "../images/NepalSection6Image4.webp";
const NepalSection6 = () => {
  return (
    <>
      <div className="NepalSection6">
        <div className="container container_NepalSection6">
          <div className="row1_NepalSection6">
            <h1>About Internal Migration in Bangladesh</h1>
          </div>
          <div className="row2_NepalSection6">
            <div className="col1_NepalSection6">
              <h6>
                <img src={NepalSection6Image1} alt="NepalSection6Image1" />
              </h6>
            </div>
            <div className="col2_NepalSection6">
              <h3>
                Increase in rural to urban migration in the country has led to a
                loss of labour in rural areas:
              </h3>
              <p>
                The most prominent labour movement in the country has been from
                the mountains to the Terai region in Nepal. Some districts have
                experienced an outmigration of up to half of their
                population.[9] Studies have shown that this has led to a
                shortage of agricultural labour in rural areas. In some regions
                of Nepal, rural communities use agricultural traditions like the
                'parma'[10], a reciprocal labour exchange system between
                households to supplement labour loss.[11]
              </p>
            </div>
          </div>
          <div className="row3_NepalSection6">
            <div className="col3_NepalSection6">
              <h3>
                Earthquakes and natural disasters – aggravated by climate change
                – have driven internal migration in the country:
              </h3>
              <p>
                More than 80 percent of the total population of Nepal is at high
                risk from natural hazards like floods, landslides, earthquakes
                and Glacial Lake Outburst Floods (GLOF).[12] Landslides
                exacerbate water scarcity and climate events can devastate
                entire villages, leading to increased internal migration. The
                Global Report on Internal Displacement (GRID,2023) estimated
                93,000 internal displacement disasters in the country which led
                to 58,000 internally displaced people in 2022. Across South
                Asia, Nepal has the fifth highest internally displaced
                people.[13]
              </p>
            </div>
            <div className="col4_NepalSection6">
              <h6>
                <img src={NepalSection6Image2} alt="NepalSection6Image2" />
              </h6>
            </div>
          </div>
          <div className="row4_NepalSection6">
            <div className="col5_NepalSection6">
              <h6>
                <img src={NepalSection6Image3} alt="NepalSection6Image3" />
              </h6>
            </div>
            <div className="col6_NepalSection6">
              <h3>
                Challenges related to the implementation of labour laws increase
                the vulnerability of migrant workers:
              </h3>
              <p>
                In Nepal, amendments to the Labour Act in 2017 and Labour Rules
                in 2018, extended the applicability of the act to firms of any
                size. However, cases of collective bargaining, safety and
                health, or labour relation committees do not fall under the new
                amendment.[14] This could result in those working in small sized
                enterprises being susceptible to exploitation. Furthermore,
                compliance with these laws has implementation challenges. For
                instance, enforcement of minimum wage laws is limited, resulting
                in cases of workers being paid below the minimum wage.[15]
              </p>
            </div>
          </div>
          <div className="row5_NepalSection6">
            <div className="col7_NepalSection6">
              <h3>
                The Social Security Fund in Nepal was recently expanded to cover
                informal sector workers and self-employed individuals:
              </h3>
              <p>
                There are 87 social security schemes in Nepal.[16] One of the
                key schemes for workers is the Social Security Fund, launched in
                2018, initially covering only formal sector workers. Recently
                the scheme was expanded to include informal workers and
                self-employed individuals. The fund includes four schemes:
                medical and safe maternity protection, accidents and
                disabilities, dependent family protection scheme, and old age
                protection scheme.[17]
              </p>
            </div>
            <div className="col8_NepalSection6">
              <h6>
                <img src={NepalSection6Image4} alt="NepalSection6Image4" />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NepalSection6;
