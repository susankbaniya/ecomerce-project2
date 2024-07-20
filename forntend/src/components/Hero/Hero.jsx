import React from "react";
import "./Hero.css";

import handsign from "../images/hand_icon.png";
import rightarrow from "../images/arrow.png";
import women from "../images/hero_image.png";
const hero = () => {
  return (
    <div className="otherpart">
      <div className="hero-container">
        <div className="hero">
          <div className="hero-arrivals">
            <h1>NEW ARRIVALS ONLY</h1>
            <div className="hand-icon">
              <p> new </p>
              <img src={handsign} className="handsigns" />
            </div>
            <div className="paragraphs">
              <p>collection</p>
              <p>for everyone</p>
            </div>
            <div className="new-collection">
              <button className="buttonsof">
                Latest Collection
                <img src={rightarrow} className="imageofarrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="imagegirls">
          <img src={women} className="imagegirl" />
        </div>
      </div>
      <div className="hero-otherpart">
        <div className="popular">
          <h1>POPULAR IN WOMEN</h1>
        </div>
      </div>
    </div>
  );
};

export default hero;
