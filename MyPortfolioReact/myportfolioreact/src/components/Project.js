import React from "react";
import "../assets/style/style.css";
import fitnessBuddyPic from "../assets/img/projects/Portfolio_FitnessBuddy.jpg";

const myProjects = [
  {
    title: "FITNESS BUDDY",
    repoLink: "https://github.com/drg0drg/Fitness-buddy",
    deployedLink: "https://jdj-fitness-buddy.herokuapp.com/login",
    tech: "NodeJS - JS - Sequelize - Express - Passport - Pug - .less",
    description:
      " Fitness Buddy is a fitness app that provides users with a guidance on how to perform exercises",
    image: fitnessBuddyPic
  },
  {
    title: "FITNESS BUDDY",
    repoLink: "https://github.com/drg0drg/Fitness-buddy",
    deployedLink: "https://jdj-fitness-buddy.herokuapp.com/login",
    tech: "NodeJS - JS - Sequelize - Express - Passport - Pug - .less",
    description:
      " Fitness Buddy is a fitness app that provides users with a guidance on how to perform exercises",
    image: fitnessBuddyPic
  }

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
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
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
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                <img
                  className="project-img"
                  src={project.image}
                  alt={project.title}
                />
              </a>
              <div className="deployed-tag">
                <p className="img-description">CLICK TO DEPLOYED APP</p>
              </div>
            </div>
            {/* <div>
              <button><a
                  href={project.deployedLink}
                  target="_blank" className="deployed-button">DEPLOYED APP</a>
              </button>
            </div> */}
          </div>
        ))}
      {/* </div> */}
      </React.Fragment>
  );
};

export default Projects;
