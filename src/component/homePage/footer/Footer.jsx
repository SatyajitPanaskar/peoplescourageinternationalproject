import React from "react";
import "./Footer.css";
const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <h4>
          © {currentYear} People’s Courage International. All Rights Reserved
        </h4>
      </div>
    </>
  );
};

export default Footer;
