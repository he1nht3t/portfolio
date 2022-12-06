import { useState } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, setToggle] = useState(false);
  const [ActiveLink, setActiveLink] = useState("#home");

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    scrollY >= 80
      ? header.classList.add("scroll-header")
      : header.classList.remove("scroll-header");
  });

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          /Heinhtet
        </a>

        <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item" onClick={() => setActiveLink("#home")}>
              <a
                href="#home"
                className={
                  ActiveLink === "#home" ? "nav_link active_link" : "nav_link"
                }
              >
                <i className="uil uil-estate nav_icon"></i> #Home
              </a>
            </li>

            <li className="nav_item" onClick={() => setActiveLink("#skills")}>
              <a
                href="#skills"
                className={
                  ActiveLink === "#skills" ? "nav_link active_link" : "nav_link"
                }
              >
                <i className="uil uil-file-alt nav_icon"></i> #Skills
              </a>
            </li>

            <li
              className="nav_item"
              onClick={() => setActiveLink("#qualification")}
            >
              <a
                href="#qualification"
                className={
                  ActiveLink === "#qualification"
                    ? "nav_link active_link"
                    : "nav_link"
                }
              >
                <i className="uil uil-graduation-cap nav_icon"></i>{" "}
                #Qualification
              </a>
            </li>

            <li className="nav_item" onClick={() => setActiveLink("#contact")}>
              <a
                href="#contact"
                className={
                  ActiveLink === "#contact"
                    ? "nav_link active_link"
                    : "nav_link"
                }
              >
                <i className="uil uil-message nav_icon"></i> #Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => setToggle(false)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => setToggle(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
