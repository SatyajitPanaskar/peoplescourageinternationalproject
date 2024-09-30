import React, { useState } from "react";
import logoImage from "./image.webp";
import { IoIosArrowDown } from "react-icons/io";
import "./navbar.css";

const Navbar = () => {
  // State to manage which dropdown is active
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Function to handle mouse enter (dropdown open)
  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  // Function to handle mouse leave (dropdown close)
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="header">
      <div className="container navbar">
        <div className="navbar_logo">
          <img src={logoImage} alt="logo" />
        </div>
        <div className="navbar_list">
          <h4>
            <a href="/" style={{ textDecoration: "none" }}>
              Home
            </a>
          </h4>

          {/* Dropdown: Who We Are */}
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter("whoWeAre")}
            onMouseLeave={handleMouseLeave}>
            <h4>
              Who We Are <IoIosArrowDown className="icon" />
            </h4>
            {activeDropdown === "whoWeAre" && (
              <div className="dropdown-content">
                <a href="/HomePage">How it Started</a>
                <a href="/">Vision, Mission and Aims</a>
                <a href="/">Our Leadership</a>
              </div>
            )}
          </div>

          {/* Dropdown: What We Do */}
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter("whatWeDo")}
            onMouseLeave={handleMouseLeave}>
            <h4>
              What We Do <IoIosArrowDown className="icon" />
            </h4>
            {activeDropdown === "whatWeDo" && (
              <div className="dropdown-content">
                <a href="/MainCRIComponent">
                  Climate Resilience Initiative (CRI)
                </a>
                <a href="/">Migrants Resilience Collaborative (MRC)</a>
                <a href="/MainGRIPage">Grassroots Resilience Institute (GRI)</a>
                <a href="/"> Reports: Trends and Insights</a>
              </div>
            )}
          </div>

          {/* Dropdown: Where We Work */}
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter("whereWeWork")}
            onMouseLeave={handleMouseLeave}>
            <h4>
              Where We Work <IoIosArrowDown className="icon" />
            </h4>
            {activeDropdown === "whereWeWork" && (
              <div className="dropdown-content">
                <a href="/Bangladesh">Bangladesh</a>
                <a href="/India">India</a>
                <a href="/Indonesia">Indonesia</a>
                <a href="/Nepal">Nepal</a>
                <a href="/Philippines">Philippines</a>
              </div>
            )}
          </div>

          <h4 id="button_1">
            <a href="/">Get Involved</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
