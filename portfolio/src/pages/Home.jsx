import Project from "../components/Project";
import perSocial from '../images/petsocialmedia.png'
import techBlog from '../images/techblog.png'
import Aos from "aos";
import 'aos/dist/aos.css'
import{useEffect} from 'react'

export default function Home() {
    useEffect(()=>{
        Aos.init({duration:1500, delay:200})
    },[])
    const website = "Visit Website!"
  return (
    
    <div >
      <div className="intro d-flex flex-wrap top" data-aos="zoom-in">
        <img
          id="headshot"
          src="./src/images/headshot.jpg"
          alt="A picture of myself smiling with my arms crossed"
        />
        <div id="home-intro" className="text-center p-1 flex-wrap">
          <h2>
            {" "}
            Hi there, I'm <span id="j">J</span><span id="uan">uan</span>, a Full Stack Developer!
          </h2>
          <p>
          With a strong passion for creating captivating web experiences, I specialize in crafting clean code and designing intuitive user interfaces. My expertise lies in bringing innovation to life through dynamic web applications.

          </p>
          <p>
          Throughout my journey as a developer, I have actively explored the ever-evolving world of web development, continuously acquiring new skills and staying up-to-date with cutting-edge technologies.

          </p>
          <p>
          I invite you to explore my projects that showcase my abilities, and I am excited to connect with you to discuss any potential collaboration or project opportunities.

          </p>
        </div>
      </div>
      
<div className="py-4 m-1 text-center" data-aos="fade-right">
  <h3 className="skills-project-title">Explore My Skills and Projects!</h3>
  <p className="skills-project-title-p">For a comprehensive showcase of my capabilities and accomplishments, head over to my portfolio and resume section.</p>
</div>
      <div className="home-skills">
        <div className="m-1 fronted " data-aos="flip-right">
          <h3 className="d-flex">Front-End:</h3>
          <div className="home-skills-icon-cont d-flex flex-wrap text-center justify-content-between">
            <i className="devicon-react-original colored skill-icon">
              <p>React</p>
            </i>

            <i className="devicon-javascript-plain colored skill-icon">
              <p>Javascript</p>
            </i>
            <i className="devicon-jquery-plain colored skill-icon">
              <p>JQuery</p>
            </i>
            <i className="devicon-css3-plain colored skill-icon">
              <p>CSS</p>
            </i>
          </div>
        </div>
        <div className="m-1 my-5 backend" data-aos="flip-left">
          <h3>Back-End:</h3>
          <div className="home-skills-icon-cont d-flex text-center flex-wrap justify-content-between">
          <i className="devicon-nodejs-plain colored skill-icon ">
            <p>Node.js</p>
          </i>

            <i className="devicon-express-original colored skill-icon">
              <p>Express</p>
            </i>
            <i className="devicon-mongodb-plain colored skill-icon">
              <p>MongoDB</p>
            </i>
            <i className="devicon-python-plain colored skill-icon">
              <p>Python</p>
            </i>
          </div>
        </div>
      </div>
      <div className="m-1 home-projects">
        <h3>Projects:</h3>
        <Project aos1="fade-right" form={website} aos2="fade-left" img={perSocial} stack3="devicon-css3-plain colored project-icon" stack2="devicon-mysql-plain-wordmark colored project-icon" stack1="devicon-javascript-plain colored project-icon" stack4="devicon-handlebars-plain-wordmark  project-icon" title=" P🐾st: Pet Social Media " github="https://github.com/JuanMartinez503/Full-stack-pet-socia-media" description="Step into a world where adorable pets rule the social media kingdom! As the lead developer, I proudly present a full-stack application that lets users create accounts for their pets, sparking charming interactions with other delightful companions. 🐾💛" appUrl="https://full-stack-pet-social-media-698fb2b195ab.herokuapp.com/" />
        
        <Project aos1="fade-left" aos2="fade-right" form={website} img={techBlog} stack3="devicon-nodejs-plain-wordmark colored project-icon" stack2="devicon-express-original-wordmark colored project-icon" stack1="devicon-javascript-plain colored project-icon" stack4="devicon-sequelize-plain-wordmark colored project-icon" title="Tech Blog " github="https://github.com/JuanMartinez503/Full-Stack-MVC-Tech-Blog" description="I designed and implemented a CMS-style blog site, allowing users to publish, update, and delete their posts while fostering a vibrant community for sharing thoughts and ideas. The website was built from scratch to ensure a seamless and user-friendly experience." appUrl="https://full-stack-mvc-tech-blog-28de33d18a0e.herokuapp.com/" />
      </div>
    </div>
  );
}
