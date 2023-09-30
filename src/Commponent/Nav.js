import React from "react";
import Icon from "../Images/google-drive.png";
import "../css/Nav.css";
const Nav = ({ photoURL }) => {
  return (
    <>
      <div className="nav_bar">
        <div className="icon-name">
          <img className="drive-images" src={Icon} alt="google-drive.png" />
          <p className="google-drive-name">Drive</p>
        </div>

        <div className="search_baar">
          <div className="search-div">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            className="google-drive-nave-input"
            type="text"
            placeholder="Search in Drive"
          />
          <div className="filter-div">
            {" "}
            <i className="ri-equalizer-line"></i>
          </div>
        </div>

        <div className="nav-baar-opstions">
          <div className="opstion-div">
            <i className="ri-question-line"></i>
          </div>
          <div className="opstion-div">
            <i className="ri-settings-4-line"></i>
          </div>
          <div className="opstion-div">
            <i className="ri-apps-2-fill"></i>
          </div>
          <div className="opstion-div">
            <img className="user-images-nav" src={photoURL} alt="user.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
