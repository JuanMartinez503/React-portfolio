import Project from "../components/Project";
import perSocial from "../images/expensetracker.png";
import martinezCakes from "../images/martinezcakes.png";
import tourismGPT from '../images/tourismGPT.png'
import dietTalk from "../images/diettalk.png";
import Aos from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
import headshot from "../images/headshot.png";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000, });
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
  <h4>
    Hi there, I'm <span id="j">J</span>
    <span id="uan">uan</span>, a Software Engineer!
  </h4>
  <p>Fueled by a passion for creating engaging web experiences, I excel in clean, efficient code and user-friendly interfaces. With over 2,000 hours of experience, I stay ahead with the latest technologies, striving for innovation and excellence.</p>

<p>Currently pursuing a Master of Science in Computer Science at Ball State University, I complement my practical experience with advanced theoretical insights.</p>

<p>As a founding software engineer at Venue Platform, I lead cross-platform MVP development using the MERN stack and TypeScript. I build responsive and secure interfaces with React Native, ensure high code quality through comprehensive testing, and optimize application performance. My role involves collaborating with teams to achieve seamless functionality and drive innovative solutions.</p>

<p>Let's connect to discuss how we can turn innovative visions into reality using state-of-the-art web technology.</p>

</div>

      </div>

      <div className="py-4 m-1 text-center" data-aos="fade-right">
        <h3 className="skills-project-title">
          Explore My Skills and Projects!
        </h3>
        <p className="skills-project-title-p">
          For a comprehensive showcase of my capabilities and accomplishments,
          head over to my project and resume section.
        </p>
      </div>
      <div className="home-skills">
        <div className="m-1 fronted " data-aos="flip-right">
          <h3 className="d-flex">Front-End</h3>
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
            <div className="dev-icon-div" data-aos="fade-right">
              {" "}
              <i className="devicon-typescript-plain colored skill-icon">
                <p>TypeScript</p>
              </i>
            </div>
            <div className="dev-icon-div" data-aos="fade-left">
              {" "}
              <i className="devicon-react-original colored skill-icon">
                <p>React</p>
              </i>
            </div>
            <div className="dev-icon-div" data-aos="fade-left">
              {" "}
              
            <i className="devicon-nextjs-original colored skill-icon">
          
                <p>Next.js</p>
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
            <div className="dev-icon-div" data-aos="fade-left">
              {" "}
              <i className="devicon-react-original colored skill-icon">
                <p>React Native</p>
              </i>
            </div>
          </div>
        </div>
        <div className="m-1 my-5 backend" data-aos="flip-left">
          <h3>Back-End</h3>
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
      </div>
      <div className="m-1 home-projects">
        <h3>Projects</h3>
        <Project
          aos1="fade-left"
          aos2="fade-right"
          form={website}
          img={dietTalk}
          gradient={gradient}
          stack1="devicon-react-original-wordmark colored project-icon"
          stack2="devicon-nodejs-plain-wordmark colored project-icon"
          stack4="devicon-css3-plain-wordmark colored project-icon"
          stack3="devicon-mongodb-plain-wordmark colored project-icon"
          title="Diet Talk"
          github="https://github.com/JuanMartinez503/"
          description="Diet Talk, a full-stack app, redefines the weight loss journey by integrating AI-driven personal coaching with a supportive community. Key features include 24/7 tailored advice through an AI chat, direct messaging for private support, groups for shared interests, and customizable profiles for personal expression. This platform not only offers personalized wellness guidance but also fosters a vibrant community, making each step towards health and wellness both supported and celebrated."
          appUrl="https://diettalk.fit/"
        />
        <Project
          aos1="fade-left"
          aos2="fade-right"
          form={website}
          img={tourismGPT}
          gradient={gradient}
          stack1="devicon-nextjs-original colored project-icon"
          stack2="devicon-javascript-plain colored project-icon"
          stack4="devicon-tailwindcss-plain colored project-icon"
          stack3="devicon-typescript-plain colored project-icon"
          title="Tourism GPT"
          github="https://github.com/JuanMartinez503/full-stack-tourismgpt-next-js"


          description="Embark on a language revolution with Tourism GPT, a cutting-edge Full Stack Next.js application that transcends traditional boundaries. Powered by the newest versions of Next.js and Prisma, alongside the seamless integration of Clerk Auth, this groundbreaking project harnesses the prowess of OpenAI's leading-edge language model. It offers an unparalleled experience for wanderlust-driven travelers, creative content mavens, and enthusiasts seeking riveting conversations. The OpenAI API has been meticulously customized to deliver precisely the right information, adding a unique touch to your language exploration journey."


          appUrl="https://full-stack-tourismgpt-next-js.vercel.app/"
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
