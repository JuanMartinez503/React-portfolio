import Aos from "aos";
import { useEffect } from "react";
export default function Resume() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <h2 className="m-1 p-3 text-center ">
        Click the link below to access my professional resume and learn more
        about my qualifications and experience.
      </h2>
      <div className="my-5 text-center" id="resume">
        <a href="/JuanM-resume.pdf" download>
          Download my Resume
        </a>
      </div>
      <div id="resume-skills">
        <div className="m-1 fronted ">
          <h3 className="d-flex">Front-End:</h3>
          <div className="home-skills-icon-cont d-flex flex-wrap text-center justify-content-between">
            <div className="dev-icon-div" data-aos="fade-right">
              {" "}
              <i className="devicon-html5-plain colored skill-icon">
                <p>HTML</p>
              </i>{" "}
            </div>
            <div className="dev-icon-div" data-aos="fade-left">
              {" "}
              <i className="devicon-css3-plain colored skill-icon">
                <p>CSS</p>
              </i>
            </div>
            <div className="dev-icon-div" data-aos="fade-right">
              {" "}
              <i className="devicon-javascript-plain colored skill-icon">
                <p>Javascript</p>
              </i>
            </div>
            <div className="dev-icon-div" data-aos="fade-left">
              {" "}
              <i className="devicon-react-original colored skill-icon">
                <p>React</p>
              </i>
            </div>
            <div className="dev-icon-div" data-aos="fade-right">
              {" "}
              <i className="devicon-jquery-plain colored skill-icon">
                <p>JQuery</p>
              </i>
            </div>
            <div className="dev-icon-div" data-aos="fade-left">
              <i className="devicon-bootstrap-plain colored skill-icon">
                <p>Bootstrap</p>
              </i>
            </div>
            <div className="dev-icon-div" data-aos="fade-right">
              {" "}
              <i className="devicon-handlebars-plain colored skill-icon">
                <p>Handlebars</p>
              </i>
            </div>
            <div className="dev-icon-div" data-aos="fade-left">
              {" "}
              <i className="devicon-sass-plain colored skill-icon">
                <p>Sass</p>
              </i>
            </div>
            <div className="dev-icon-div" data-aos="fade-right">
              {" "}
              <i className="devicon-tailwindcss-plain colored skill-icon">
                <p>Tailwind CSS</p>
              </i>
            </div>
          </div>
          <div className="m-1 my-5 backend">
            <h3>Back-End:</h3>
            <div className="home-skills-icon-cont d-flex text-center flex-wrap justify-content-between">
              <div className="dev-icon-div" data-aos="fade-left">
                {" "}
                <i className="devicon-nodejs-plain colored skill-icon">
                  <p>Node.js</p>
                </i>
              </div>
              <div className="dev-icon-div" data-aos="fade-left">
                <i className="devicon-java-plain colored skill-icon">
                  <p>Java</p>
                </i>
              </div>
              <div className="dev-icon-div" data-aos="fade-right">
                {" "}
                <i className="devicon-express-original colored skill-icon">
                  <p>Express</p>
                </i>
              </div>
              <div className="dev-icon-div" data-aos="fade-right">
                {" "}
                <i className="devicon-python-plain colored skill-icon">
                  <p>Python</p>
                </i>
              </div>
              <div className="dev-icon-div" data-aos="fade-right">
                {" "}
                <i className="devicon-mongodb-plain colored skill-icon">
                  <p>MongoDB</p>
                </i>
              </div>
              <div className="dev-icon-div" data-aos="fade-left">
                {" "}
                <i className="devicon-mysql-plain colored skill-icon">
                  <p>MySQL</p>
                </i>
              </div>
              <div className="dev-icon-div" data-aos="fade-left">
                <i className="devicon-graphql-plain-wordmark colored skill-icon">
                  <p>Graph QL</p>
                </i>
              </div>
            </div>
          </div>
          <div className="m-1 my-5 backend" data-aos="flip-left">
            <h3>DevOps:</h3>

            <div className="home-skills-icon-cont d-flex text-center flex-wrap justify-content-between">
              <div className="dev-icon-div" data-aos="fade-left">
                {" "}
                <i className="devicon-git-plain colored skill-icon">
                  <p>Git</p>
                </i>
              </div>
              <div className="dev-icon-div" data-aos="fade-right">
                {" "}
                <i className="devicon-github-original colored skill-icon">
                  <p>Github</p>
                </i>
              </div>
              <div className="dev-icon-div" data-aos="fade-left">
                {" "}
                <i className="devicon-vscode-plain colored skill-icon">
                  <p>VS CODE</p>
                </i>
              </div>
              <div className="dev-icon-div" data-aos="fade-right">
                <i className="devicon-npm-original-wordmark colored skill-icon">
                  <p>NPM</p>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
