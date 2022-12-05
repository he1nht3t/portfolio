import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scrollup");
    scrollY >= 50
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  );
};

export default ScrollUp;
