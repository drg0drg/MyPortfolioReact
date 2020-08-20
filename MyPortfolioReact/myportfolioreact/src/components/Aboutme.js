
import React from "react";
import MyPicture from "../assets/img/bio/Dragos_Dragomir_BhamBootCamp.jpg";
import "../assets/style/style.css";



const AboutMe = () => {
	return (
		<div>
        <div className="intersection-observer"><h3 className="page-title">ABOUT</h3></div>
        
        <div className="page-main-div">
          <div className="contacts">
            <a
              href="https://drive.google.com/file/d/1QUMxeve3bySekrHC0x3wGZUIyLG8apuN/view?usp=sharing" 
              target="_blank"><i className="fas fa-file-pdf fa-2x"></i>
            </a>
            <a
              href="https://github.com/drg0drg?tab=repositories"
              target="_blank"><i className="fab fa-github fa-3x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/costin-dragos-dragomir-90b4121aa/"
              target="_blank"><i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
  
          <img className="img-sm img-dsk avatar" src={MyPicture} alt="Dragos'Pic"/>
        
          <div className="page-card">
            <p>
              I am a Full Stack Web Developer with ten years  Automotive Computer Aided Design Engineering experience trained at University of Birmingham Full Stack Bootcamp. 
            </p>
            <p>
              As part of the Bootcamp, I have gained knowledge in JavaScript, Node, Express, React,  MySQL, MongoDB and worked with Bootstrap, Materialize, SASS, jQuery, express handlebars and pug.js becoming familiar with Agile Development, Model View Controller, ORM, RESTful API and CRUD concepts.
            </p> 
            <p>
              I have built numerous applications both individually and in group projects and demonstrated good entry level skills in several technologies and gained experience with GitHub version control, branching and Kanban.
            </p>
            <p>
              Industrious and persevering, I am looking forward to continuing to build my skills in both front and backend languages, hopefully helping in making the world a better place through technology and smart thinking.
            </p>
          </div>
        </div>
    </div>
  )
}



export default AboutMe;
