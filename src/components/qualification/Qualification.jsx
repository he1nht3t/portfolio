import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button_flex"
                : "qualification_button button_flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button_flex"
                : "qualification_button button_flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Rockstar Developer Course
                </h3>
                <span className="qualification_subtitle">
                  Fairway Technology
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt">Present</i>
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Korean Language</h3>
                <span className="qualification_subtitle">
                  U Zaw Myint(Korean Language Center)
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt">Present</i>
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">
                  Fairway Technology
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt">5.2022 - 8.2022</i>
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Electronic and Communication Engineering
                </h3>
                <span className="qualification_subtitle">
                  Technological University ( Hmawbi )
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt">2015 - 2020</i>
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Basic Education</h3>
                <span className="qualification_subtitle">
                  B.E.H.S (1), Thingangyun
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt">2011 - 2015</i>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title"></h3>
                <span className="qualification_subtitle"></span>
                <div className="qualification_calender">
                  <i className="uil uil-"></i>
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title"></h3>
                <span className="qualification_subtitle"></span>
                <div className="qualification_calender">
                  <i className="uil uil-"></i>
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title"></h3>
                <span className="qualification_subtitle"></span>
                <div className="qualification_calender">
                  <i className="uil uil-"></i>
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title"></h3>
                <span className="qualification_subtitle"></span>
                <div className="qualification_calender">
                  <i className="uil uil-"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
