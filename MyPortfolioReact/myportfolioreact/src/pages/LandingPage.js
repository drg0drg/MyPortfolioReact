import React from "react";
import NavbarLanding from "../components/NavbarLanding";
import AboutMe from "../components/Aboutme";
import "../assets/style/style.css";

const LandingPage = () => {
	return (
		<div>
			<NavbarLanding />
      <AboutMe />
		</div>
	);
};

export default LandingPage;
