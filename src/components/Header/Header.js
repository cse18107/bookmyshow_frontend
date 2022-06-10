import React, { useState } from "react";
import "./Header.css";
import search from "../../images/search.png";
import logo from "../../images/bookmyshow.jpg";
import cross from "../../images/close.png"

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="header-body">
      <div className="header-container center">
        <div className="header-content">
          <div className="header-content_left">
            <div className="header-content_left--logo">
              <img src={logo} alt="bookmyshow" />
            </div>
            <div className="header-content_left--searchbar">
              <div className="search_icon">
                <img src={search} alt="search" />
              </div>
              <div className="search_field">
                <input placeholder="Search for Movies, Events, Plays, Sports and Activities" />
              </div>
            </div>
          </div>
          <div className="header-content_right center">
            <div className="header-content_right--auth">
              <button onClick={() => setShowOverlay(true)}>Sign In</button>
            </div>
            <div
              className="header-content_right--burgermenu"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-panel center">
        <div className="header-panel_left"></div>
        <div className="header-panel_right"></div>
      </div>
      <div
        className="overlay"
        style={{ display: `${showSidebar ? "block" : "none"}` }}
        onClick={() => setShowSidebar(false)}
      ></div>
      <div
        className="sidebar"
        style={{ right: `${showSidebar ? "0px" : "-350px"}` }}
      >
        {/* code */}
      </div>
      <div
        className="backdrop"
        style={{ display: `${showOverlay ? "block" : "none"}` }}
      ></div>
      <div className={`model ${showOverlay ? "model-open" : "model-close"}`}>
          <div className="model-top">
            <div></div>
            <div className="model-heading"><p>Get Started</p></div>
            <div className="model-cross"><img src={cross} alt='close' onClick={()=>setShowOverlay(false)} /></div>
          </div>
          <div className="model-lower"></div>
      </div>
    </div>
  );
};


export default Header;
