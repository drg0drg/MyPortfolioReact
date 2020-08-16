import React from "react";
import NavbarLanding from "../components/NavbarLanding";
import Projects from "../components/Project";
import "../assets/style/style.css";

const PortfolioPage = () => {
	return (
		<>
			<NavbarLanding />
      <Projects />
		</>
	);
};

export default PortfolioPage;
