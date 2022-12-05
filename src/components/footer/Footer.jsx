import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Heinhtet</h1>
        <div className="footer_social">
          <a
            href="https://www.instagram.com/he1nht3t"
            target="_blank"
            className="footer_social-icon"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/he1nht3t"
            target="_blank"
            className="footer_social-icon"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.twitter.com/heinht3t7g"
            target="_blank"
            className="footer_social-icon"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.github.com/he1nht3t"
            target="_blank"
            className="footer_social-icon"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <div className="footer_copy">&#169; Copyright. All right reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
