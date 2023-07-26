import Aos from "aos";
import { useEffect } from "react";
export default function Resume() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
        <h2 className="m-1 p-3 text-center ">Click the link below to access my professional resume and learn more about my qualifications and experience.</h2>
      <div className="my-5 text-center" id="resume">
        <a href="/JuanM-resume.pdf" download >Download my Resume</a>
      </div>
      <div id="resume-skills">
        <div className="m-1 fronted ">
          <h3 className="d-flex">Front-End:</h3>
          <div className="home-skills-icon-cont d-flex flex-wrap text-center justify-content-between">
            <i className="devicon-html5-plain colored skill-icon" data-aos="fade-right" >
              <p>HTML</p>
            </i>{" "}
            <i className="devicon-css3-plain colored skill-icon" data-aos="fade-left" >
              <p>CSS</p>
            </i>
            <i className="devicon-javascript-plain colored skill-icon" data-aos="fade-right" >
              <p>Javascript</p>
            </i>
            <i className="devicon-react-original colored skill-icon" data-aos="fade-left" >
              <p>React</p>
            </i>
            <i className="devicon-jquery-plain colored skill-icon" data-aos="fade-right" >
              <p>JQuery</p>
            </i>
              <i className="devicon-bootstrap-plain colored skill-icon" data-aos="fade-left" >
              <p>Bootstrap</p>
            </i>
            <i className="devicon-handlebars-plain colored skill-icon" data-aos="fade-right" >
              <p>Handlebars</p>
            </i>
            <i className="devicon-sass-plain colored skill-icon" data-aos="fade-left" >
              <p>Sass</p>
            </i>
            <i className="devicon-tailwindcss-plain colored skill-icon" data-aos="fade-right" >
              <p>Tailwind CSS</p>
            </i>
           
          </div>
          <div className="m-1 my-5 backend" >
          <h3>Back-End:</h3>
          <div className="home-skills-icon-cont d-flex text-center flex-wrap justify-content-between">
          <i className="devicon-nodejs-plain colored skill-icon" data-aos="fade-left" >
            <p>Node.js</p>
          </i>

            <i className="devicon-express-original colored skill-icon" data-aos="fade-right" >
              <p>Express</p>
            </i>
           
            <i className="devicon-python-plain colored skill-icon" data-aos="fade-left" >
              <p>Python</p>
            </i>
            <i className="devicon-mongodb-plain colored skill-icon" data-aos="fade-right" >
              <p>MongoDB</p>
            </i>
            <i className="devicon-mysql-plain colored skill-icon" data-aos="fade-left" >
              <p>MySQL</p>
            </i>
            <i className="devicon-graphql-plain-wordmark colored skill-icon" data-aos="fade-left" >
              <p>Graph QL</p>
            </i>
          </div>
        </div>
        <div className="m-1 my-5 backend" data-aos="flip-left">
          <h3>DevOps:</h3>
          <div className="home-skills-icon-cont d-flex text-center flex-wrap justify-content-between">
          <i className="devicon-git-plain colored skill-icon" data-aos="fade-left" >
            <p>Git</p>
          </i>

            <i className="devicon-github-original colored skill-icon" data-aos="fade-right" >
              <p>Github</p>
            </i>
           
            <i className="devicon-vscode-plain colored skill-icon" data-aos="fade-left" >
              <p>VS CODE</p>
            </i>
            <i className="devicon-npm-original-wordmark colored skill-icon" data-aos="fade-right" >
              <p>NPM</p>
            </i>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
