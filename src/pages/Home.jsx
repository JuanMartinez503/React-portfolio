import Project from "../components/Project";
import perSocial from "../images/expensetracker.png";
import martinezCakes from "../images/martinezcakes.png";
import Aos from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
import headshot from "../images/headshot.png";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500, delay: 200 });
  }, []);
  const website = "Visit Website!";
  const gradientReverse = "project-info-bg-reverse flex-wrap";
  const gradient = "project-info-bg flex-wrap";
  return (
    <div className=" overflow-hidden">
      <div className="intro d-flex flex-wrap top mt-3" data-aos="zoom-in">
        <img
          id="headshot"
          src={headshot}
          alt="A picture of myself smiling with my arms crossed"
        />
        <div id="home-intro" className="text-center p-1 flex-wrap">
          <h2>
            {" "}
            Hi there, I'm <span id="j">J</span>
            <span id="uan">uan</span>, a Full Stack Developer!
          </h2>
          <p>
            With a strong passion for creating captivating web experiences, I
            specialize in crafting clean code and designing intuitive user
            interfaces. My expertise lies in bringing innovation to life through
            dynamic web applications.
          </p>
          <p>
            Throughout my journey as a developer, I have actively explored the
            ever-evolving world of web development, continuously acquiring new
            skills and staying up-to-date with cutting-edge technologies.
          </p>
          <p>
            I invite you to explore my projects that showcase my abilities, and
            I am excited to connect with you to discuss any potential
            collaboration or project opportunities.
          </p>
        </div>
      </div>

      <div className="py-4 m-1 text-center" data-aos="fade-right">
        <h3 className="skills-project-title">
          Explore My Skills and Projects!
        </h3>
        <p className="skills-project-title-p">
          For a comprehensive showcase of my capabilities and accomplishments,
          head over to my portfolio and resume section.
        </p>
      </div>
      <div className="home-skills">
        <div className="m-1 fronted " data-aos="flip-right">
          <h3 className="d-flex">Front-End</h3>
          <div className="home-skills-icon-cont d-flex flex-wrap text-center justify-content-between">
            <div className="dev-icon-div">
              <i className="devicon-react-original colored skill-icon">
                <p>React</p>
              </i>
            </div>

            <div className="dev-icon-div">
              <i className="devicon-typescript-plain colored skill-icon">
                <p>TypeScript</p>
              </i>
            </div>
            <div className="dev-icon-div">
              <i className="devicon-jquery-plain colored skill-icon">
                <p>JQuery</p>
              </i>
            </div>
            <div className="dev-icon-div">
              <i className="devicon-css3-plain colored skill-icon">
                <p>CSS</p>
              </i>
            </div>
          </div>
        </div>
        <div className="m-1 my-5 backend" data-aos="flip-left">
          <h3>Back-End</h3>
          <div className="home-skills-icon-cont d-flex text-center flex-wrap justify-content-between">
            <div className="dev-icon-div">
              {" "}
              <i className="devicon-nodejs-plain colored skill-icon ">
                <p>Node.js</p>
              </i>
            </div>
            <div className="dev-icon-div">
              {" "}
              <i className="devicon-java-plain colored skill-icon">
                <p>Java</p>
              </i>
            </div>
            <div className="dev-icon-div">
              {" "}
              <i className="devicon-mongodb-plain colored skill-icon">
                <p>MongoDB</p>
              </i>
            </div>
            <div className="dev-icon-div">
              <i className="devicon-python-plain colored skill-icon">
                <p>Python</p>
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="m-1 home-projects">
        <h3>Projects</h3>
        <Project
          aos1="fade-left"
          aos2="fade-right"
          form={website}
          img={martinezCakes}
          gradient={gradient}
          stack1="devicon-react-original-wordmark colored project-icon"
          stack2="devicon-nodejs-plain-wordmark colored project-icon"
          stack4="devicon-css3-plain-wordmark colored project-icon"
          stack3="devicon-mongodb-plain-wordmark colored project-icon"
          title="Martinez Cakes"
          github="https://github.com/JuanMartinez503/full-stack-cake-website"
          description="An exquisite Full Stack application tailored to showcase the masterful craftsmanship of my sister's cake business. I created this platform from scratch, allowing users to explore a gallery of intricately designed cakes that add an extra layer of joy to special moments. The site is fully bilingual, ensuring accessibility for both English and Spanish-speaking audiences."
          appUrl="https://martinezcakes.com/"
        />
        <Project
          aos1="fade-right"
          form={website}
          gradient={gradientReverse}
          aos2="fade-left"
          img={perSocial}
          stack3="devicon-bootstrap-plain colored project-icon"
          stack2="devicon-heroku-plain-wordmark colored project-icon"
          stack1="devicon-react-plain colored project-icon"
          stack4="devicon-nodejs-plain-wordmark colored  project-icon"
          title="Expense Tracker"
          github="https://github.com/JuanMartinez503/mern-fullstack-expense-tracker"
          description="Expense Tracker is a robust full-stack MERN application that I developed post my coding bootcamp to enhance my skills and empower users in managing their finances. With features like expense tracking, budget setting, and real-time spending visualization, it offers a user-friendly and secure platform to achieve financial success while I'm committed to continuous learning and skill improvement."
          appUrl="https://expense-tracker-mern-2023-3423c6e63a4e.herokuapp.com/"
        />
      </div>
    </div>
  );
}
