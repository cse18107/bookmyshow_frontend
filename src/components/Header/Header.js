import React,{useState} from "react";
import "./Header.css";
import search from "../../images/search.png";
import logo from "../../images/bookmyshow.jpg";


const Header = () => {

    const [show, setShow] = useState(false);

  return (

    <div className="header-body">
      <div className="header-container center">
        <div className="header-content">
          <div className="header-content_left">
            <div className="header-content_left--logo">
              <img src={logo} alt='bookmyshow'/>
            </div>
            <div className="header-content_left--searchbar">
              <div className="search_icon">
                <img src={search} alt="search" />
              </div>
              <div className="search_field">
                  <input placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
              </div>
            </div>
          </div>
          <div className="header-content_right center">
            <div className="header-content_right--auth">
                <button>Sign In</button>
            </div>
            <div className="header-content_right--burgermenu" onClick={()=>setShow(!show)}>
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
      <div className="overlay" style={{display:`${show?'block':'none'}`}} onClick={()=>setShow(false)}></div>
      <div className="sidebar" style={{right:`${show?'0px':'-350px'}`}}>

      </div>
    </div>
  );
};

export default Header;
