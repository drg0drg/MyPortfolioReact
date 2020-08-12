import React from "react";
import "../assets/style/style.css";
import fitnessBuddyPic from "../assets/img/projects/Portfolio_FitnessBuddy.jpg";

const myProjects = [
  {
    title: "FITNESS BUDDY",
    repoLink: "https://github.com/drg0drg/Fitness-buddy",
    deployedLink: "https://jdj-fitness-buddy.herokuapp.com/",
    tech: "NodeJS - JS - Sequelize - Express - Passport - Pug - .less",
    description:
      " Fitness Buddy is a fitness app that provides users with a guidance on how to perform exercises",
    image: { fitnessBuddyPic }
  }
];

const Projects = () => {
  return (
    <div>
      <div className="intersection-observer">
        <h3 className="page-title">PORTFOLIO</h3>
      </div>

      <div className="col-sm-12 col-md-12 page-main-div">

        {myProjects.map((project) => {
          <div className="col-sm-12 col-md-12 page-card">
            <h4 className="project-title project-title-one">{project.title}</h4>
            <a href={project.repoLink} target="_blank">
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
              >
                <img
                  className="project-img-sm project-img-dsk"
                  src={project.image}
                  alt="THE Music App"
                />
                <p className="img-description">CLICK TO DEPLOYED APP</p>
              </a>
            </div>
          </div>
        })}
      </div>
    </div>
  );
};

export default Projects;
