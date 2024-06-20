import Aos from "aos";
import { useEffect } from "react";
import aboutMe from '../images/aboutme.png'
export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="about" className=" d-flex flex-wrap">
      <img
        src={aboutMe}
        alt="A picture of myself smiling to the camera"
        data-aos="flip-right"
        className="my-3"
      />
      <div data-aos="flip-left" className="about-sec-cont">
        <h2 className="text-center">Hello there!</h2>
        <div className="text-center">
        <p>
    I am a Software Engineer with a deep passion for coding and a strong foundation in both frontend and backend technologies. Recently, I completed my Full Stack Developer Certification at Butler University's Coding Bootcamp, mastering HTML5, CSS, JavaScript, JQuery, and React for frontend development, along with MySQL, MongoDB, Express, and Node for backend proficiency.
</p>
<p>
    Currently, I am a founding software engineer at Venue Platform, where I lead cross-platform MVP development using the MERN stack and TypeScript. I build responsive, secure interfaces with React Native, ensure high code quality through comprehensive testing, and optimize application performance. My role involves collaborating with teams to achieve seamless functionality and drive innovative solutions.
</p>
<p>
    Throughout my journey as a developer, I have gained valuable experience in building seamless web experiences and crafting clean code. My dedication to collaboration and writing high-quality code ensures the successful delivery of user-friendly applications that provide meaningful solutions.
</p>
<p>
    Beyond coding, I believe in maintaining a balanced lifestyle. I stay physically active through regular exercise and sports, and in my leisure time, I enjoy engaging in video games for fun and relaxation. My interdisciplinary mindset and strong problem-solving abilities have been instrumental in my success.
</p>
<p>
    As a highly motivated and dedicated professional, I am committed to making a positive impact with my skills. If you're searching for a software engineer who brings passion, creativity, and strong technical know-how to the table, I invite you to connect with me on LinkedIn or explore my GitHub portfolio. Let's explore exciting opportunities together, and I am eager to demonstrate how I can add value to your team.
</p>

        </div>
      </div>
    </div>
  );
}
