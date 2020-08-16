import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarLanding from './components/NavbarLanding'
import AboutMe from './components/Aboutme'
import Project from './components/Project'
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
// import logo from './logo.svg';
import './assets/style/style.css';

function App() {
  return (
    <Router>
      <div>
        <NavbarLanding />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/portfolio" component={Project} />
      </div>
    </Router>
  );
}

export default App;
