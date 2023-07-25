import Aos from "aos";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="about" className=" d-flex flex-wrap">
      <img
        src="./src/images/aboutme.png"
        alt="A picture of myself smiling to the camera"
        data-aos="flip-right"
        className="my-3"
      />
      <div data-aos="flip-left">
        <h2 className="text-center">Hello there!</h2>
        <div className="text-center">
          <p>
            I am an aspiring junior full stack developer with a deep passion for
            coding and a solid foundation in various frontend and backend
            technologies. Recently, I successfully completed my Full Stack
            Developer Certification at Butler University's Coding Bootcamp,
            where I honed my skills in HTML5, CSS, JavaScript, JQuery, and React
            for frontend development, as well as MySQL, MongoDB, Express, and
            Node for backend proficiency.
          </p>
          <p>
            Throughout my journey as a developer, I have gained valuable
            experience in building seamless web experiences and crafting clean
            code. My dedication to collaboration and writing high-quality code
            ensures the successful delivery of user-friendly applications that
            provide meaningful solutions.
          </p>
          <p>
            Beyond coding, I believe in maintaining a balanced lifestyle. I am a
            firm believer in staying physically active through regular exercise
            and sports. In my leisure time, you'll often find me engaging in
            video games for fun and relaxation. My interdisciplinary mindset and
            strong problem-solving abilities have been instrumental in my
            success.
          </p>
          <p>
            As a highly motivated and dedicated professional, I am committed to
            making a positive impact with my skills. If you're searching for a
            junior full stack developer who brings passion, creativity, and a
            strong technical know-how to the table, I invite you to connect with
            me on LinkedIn or explore my GitHub portfolio. Let's explore
            exciting opportunities together, and I am eager to demonstrate how I
            can add value to your team.
          </p>
          
        </div>
      </div>
    </div>
  );
}
