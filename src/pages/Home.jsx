import Project from "../components/Project";
import perSocial from "../images/expensetracker.png";
import tourismGPT from "../images/tourismGPT.png";
import dietTalk from "../images/diettalk.png";
import reactNative from "../images/react-native.png";
import Aos from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
import headshot from "../images/headshot.png";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const website = "Visit Website!";
  const gradientReverse = "project-info-bg-reverse flex-wrap";
  const gradient = "project-info-bg flex-wrap";
  return (
    <div className=" overflow-hidden">
      <div
        className="intro d-flex justify-content-between flex-wrap top mt-3"
        data-aos="zoom-in"
      >
        <img
          id="headshot"
          src={headshot}
          alt="A picture of myself smiling with my arms crossed"
        />
        <div id="home-intro" className=" p-1 flex-wrap">
          <h4 className="text-center ">
            I'm <span id="j">Juan</span>
            , a Senior Software Engineer with 2+ years of
            experience.
          </h4>
          <h5>
            Based in Indianapolis, Indiana, I currently serve as a Senior Software Engineer at Venue Platform. I specialize in building scalable solutions with React Native and TypeScript on the front end, and Node.js with TypeScript on the back end, transforming complex Figma designs into seamless, user-friendly applications.
          </h5>
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
              <i className="devicon-html5-plain colored skill-icon"></i>{" "}
              <p>HTML</p>
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
          description="Diet Talk is a full-stack application that redefines the weight loss journey by integrating AI-driven personal coaching with a supportive community. Key features include 24/7 tailored advice through an AI chat, private support via direct messaging, interest-based groups, and customizable profiles. This platform offers personalized wellness guidance while fostering a vibrant community, ensuring that each step towards health and wellness is supported and celebrated. Through this project, I enhanced my skills in AI integration, real-time messaging, and creating engaging user interfaces that promote community interaction."
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
          description="Tourism GPT is a full-stack application built with Next.js, designed to enhance tourism experiences using OpenAI's advanced language model. The app facilitates intelligent conversations, effortless content crafting, and personalized travel recommendations. Through this project, I honed my skills in integrating OpenAI's API for natural language processing and utilizing Prisma for efficient database management. Additionally, I learned to implement secure authentication with Clerk and create visually appealing interfaces using Tailwind CSS and Daisy UI."
          appUrl="https://full-stack-tourismgpt-next-js.vercel.app/"
        />

        <Project
          aos1="fade-right"
          form={"Watch Video!"}
          gradient={gradientReverse}
          aos2="fade-left"
          img={reactNative}
          stack3=""
          stack2="devicon-javascript-plain colored project-icon"
          stack1="devicon-react-plain colored project-icon"
          stack4="devicon-typescript-plain colored project-icon"
          title="Realtime Chat App"
          github="https://github.com/JuanMartinez503/Real-Time-Chat-App-ReactNative"
          description="This React Native project, developed using Expo and Convex backend, delivers flawless performance on both Android and iOS devices. Key features include Convex database functions, real-time chat, file uploads, and a file-based router. The project showcases my proficiency in TypeScript, Expo, and integrating real-time functionalities. Through this project, I deepened my understanding of backend integration and enhanced my skills in building scalable mobile applications."
          appUrl="https://drive.google.com/file/d/1nq9VM14chfOfnHvBpm2kd-mh3LU70bou/view?pli=1"
        />
      </div>
    </div>
  );
}
