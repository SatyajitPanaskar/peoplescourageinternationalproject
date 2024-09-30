import React from "react";
import { Carousel, Button, Row, Col } from "react-bootstrap";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import imageSlider1 from "./image/image1.webp";
import imageSlider2 from "./image/image2.webp";
import imageSlider3 from "./image/image3.webp";
import imageSlider4 from "./image/image4.webp";
import imageSlider5 from "./image/image5.webp";
import imageSlider6 from "./image/image2.webp";
import "./section6.css";
const images = [
  {
    src: imageSlider1,
    title: "Ensuring Safe Migration in Asia  Series - Part 1",
  },
  {
    src: imageSlider2,
    title: "Ensuring Safe Migration in Asia  Series - Part  2",
  },
  {
    src: imageSlider3,
    title: "Ensuring Safe Migration in Asia  Series - Part 3",
  },
  {
    src: imageSlider4,
    title: "Ensuring Safe Migration in Asia  Series - Part  4",
  },
  {
    src: imageSlider5,
    title: "Regional Consultation On Internal Migration In Asia",
    description: "Description of Image 5",
  },
  {
    src: imageSlider6,
    title: "Ensuring Safe Migration in Asia  Series - Part  6",
  },
];

const Section6 = () => {
  return (
    <div style={{ maxWidth: "85%", margin: "50px auto", position: "relative" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "700",
          color: "#2d2a6c",
          paddingBottom: "20px",
        }}>
        <a href="/" className=" text-decoration-none ">
          {" "}
          Reports:Trends & Insights
        </a>
      </h1>
      <Carousel
        nextIcon={
          <IoIosArrowDroprightCircle
            size={40}
            style={{ marginRight: "10px", zIndex: "0" }}
          />
        }
        prevIcon={
          <IoIosArrowDropleftCircle size={40} style={{ marginLeft: "10px" }} />
        }>
        <Carousel.Item className="section6">
          <Row>
            {images.slice(0, 3).map((image, index) => (
              <Col key={index} md={4}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.title}
                  style={{
                    height: "435px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="section6_h5">{image.title}</h5>
                <h6 className="section_6_button">
                  <a href="/">Read More</a>
                </h6>
              </Col>
            ))}
          </Row>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <Row>
            {images.slice(3, 6).map((image, index) => (
              <Col key={index} md={4}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.title}
                  style={{ height: "435px", objectFit: "cover" }}
                />
                <h5 style={{ marginTop: "10px", textAlign: "center" }}>
                  {image.title}
                </h5>
                <h6 className="section_6_button">
                  <a href="/">Read More</a>
                </h6>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Section6;
