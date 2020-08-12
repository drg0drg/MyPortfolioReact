import React from "react";
import "../assets/style/_navbarLanding.scss";
import navbarImage from "../assets/img/background/manfred_mohr.jpg";

const NavbarLanding = () => {
  return (
    <div className="landing-centering-div">
      <div className="navbar">
        <div className="header-image-div">
          <img className="header-image" src={navbarImage} alt="My Header" />
        </div>
        <div className="brand-box">
          <h6 className="large-D">D</h6>
          <div className="name-box">
            <p className="first-name">RAGOS</p>
            <p className="sur-name">RAGOMIR</p>
          </div>
        </div>

        <div className="menu">
          <h6 className="about">About</h6>
          <h6 className="portfolio">Portfolio</h6>
        </div>
      </div>
    </div>
  );
};

export default NavbarLanding;
