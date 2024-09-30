import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/GRISection4.css";
import GRISection4image1 from "../image/GRISection4image1.webp";
import GRISection4image2 from "../image/GRISection4image2.webp";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <IoIosArrowDropleftCircle size={40} />
    </div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <IoIosArrowDroprightCircle size={40} />
    </div>
  );
};

function GRISection4() {
  const [isExpanded, setIsExpanded] = useState(Array(3).fill(false)); // To track each slide's expanded state

  const toggleReadMore = (index) => {
    // Toggle the specific slide's state
    setIsExpanded((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      image: GRISection4image1,
      title: "Case Story",
      description: "Feeling the heat: The volatility of brick-making",
      author: "Ateeq Khan | Brick Kiln Worker, India",
      fullStory:
        "The intense heat of brick kilns is familiar to Ateeq Khan, a resident of Narayach village in the northern Indian state of Uttar Pradesh. Ateeq has worked as a labourer in brick kilns since the age of fifteen. He is the primary breadwinner for his family, which includes his elderly parents, wife, and five children. His work at the kiln involves placing raw bricks into the furnace and removing them once ready. For this labour-intensive task, he earns 300 rupees (less than $4) a day. Extreme heat combined with continuous exposure to dust and pollution has made the task of handling bricks challenging, often hampering Ateeq’s ability to work. He frequently suffers from health issues due to the heat.",
    },
    {
      image: GRISection4image2,
      title: "Case Story",
      description: "Vanishing catch: The dilemma of a fishing community",
      author: "Santa Kumar | Fisherman, Nepal",
      fullStory: "Detailed story about Santa Kumar will go here...",
    },
  ];

  return (
    <div className="griSection5">
      <div className="slider-container container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-item">
              <img
                src={slide.image}
                alt={slide.title}
                className="slider-image"
              />
              <div className="slider-content text-center">
                <h2 className="slider-title">{slide.title}</h2>
                <p className="slider-description">{slide.description}</p>
                <p className="slider-author">{slide.author}</p>
                <button
                  onClick={() => toggleReadMore(index)}
                  className="read-more-btn">
                  {isExpanded[index] ? "Hide story" : "Read more"}
                </button>
                {isExpanded[index] && (
                  <div className="full-story">{slide.fullStory}</div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default GRISection4;
