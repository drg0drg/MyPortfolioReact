import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarLanding from './components/NavbarLanding'
import AboutMe from './components/Aboutme'
import Project from './components/Project'
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
