import React from "react";
import "../assets/style/style.css";
import fitnessBuddyPic from "../assets/img/projects/Portfolio_FitnessBuddy.jpg";
import burgerAppPic from "../assets/img/projects/BurgerApp.JPG";
import employeeSumPic from "../assets/img/projects/emplyee_summary.JPG";
import musicAppPic from "../assets/img/projects/Music_app.jpg";
import weatherAppPic from "../assets/img/projects/Weather_App.JPG";

const myProjects = [
  {
    title: "FITNESS BUDDY",
    repoLink: "https://github.com/drg0drg/Fitness-buddy",
    deployedLink: "https://jdj-fitness-buddy.herokuapp.com/login",
    tech: "NodeJS - JS - Sequelize - Express - Passport - Pug - .less",
    description:
      " Fitness Buddy is a fitness app that provides users with a guidance on how to perform exercises",
    image: fitnessBuddyPic,
  },
  {
    title: "BURGER APP",
    repoLink: "https://github.com/drg0drg/BurgerApp",
    deployedLink: "https://eat-the-burger-drg.herokuapp.com/index",
    tech: "NodeJS - JS - Express - Handlebars - ORM - MySQL - Heroku",
    description:
      "Burger App is an application that allows one to order a specific burger and then devour it",
    image: burgerAppPic,
  },
  {
    title: "EMPLOYEE SUMMARY",
    repoLink: "https://github.com/drg0drg/EmployeeSummary",
    deployedLink: "https://github.com/drg0drg/EmployeeSummary",
    tech: "NodeJS - JS",
    description: "A CLI webapp to build a team's organization chart",
    image: employeeSumPic,
  },
  {
    title: "THE MUSIC APP",
    repoLink: "https://github.com/drg0drg/The-Music-App",
    deployedLink: "https://meeday.github.io/The-Music-App/",
    tech: "jQuery - LastFM & audd.io API - Materialize",
    description:
      "A webapp to find every information you need on your favourite music",
    image: musicAppPic,
  },
  {
    title: "WEATHER APP",
    repoLink: "https://github.com/drg0drg/WeatherApp",
    deployedLink: "https://drg0drg.github.io/WeatherApp/",
    tech: "HTML - CSS - JavaScript - OpenWeather API",
    description: "A webapp to quickly check the weather anywhere on the planet",
    image: weatherAppPic,
  },
];

const Projects = () => {
  return (
    <React.Fragment>
      <div className="intersection-observer">
        <h3 className="page-title">PORTFOLIO</h3>
      </div>

      {myProjects.map((project) => (
          <div className="page-card">
            <h4 className="project-title project-title-one">{project.title}</h4>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-3x"></i>
            </a>
            <div className="project-text">
              <div className="tech-sm tech-dsk">
                <p>{project.tech}</p>
              </div>
              <div className="description-sm description-dsk">
                <p>{project.description}</p>
              </div>
            </div>

            <div className="img-wrapper">
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project-img"
                  src={project.image}
                  alt={project.title}
                />
              </a>
              <div className="deployed-tag">
                <p className="img-description">CLICK IMAGE TO DEPLOYED APP</p>
              </div>
            </div>
          </div>
      ))}
    </React.Fragment>
  );
};

export default Projects;
