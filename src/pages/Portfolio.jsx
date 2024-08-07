import Project from "../components/Project";
import perSocial from "../images/petsocialmedia.png";
import techBlog from "../images/techblog.png";
import mongoDB from "../images/mongo.png";
import weather from "../images/expensetracker.png";
import movies from "../images/movies.png";
import martinezCakes from "../images/martinezcakes.png";

export default function Portfolio() {
  const website = "Visit Website!";
  const video = "Watch Demo Video!";
  const gradientReverse = "project-info-bg-reverse flex-wrap";
  const gradient = "project-info-bg flex-wrap";

  return (
    <div id="portfolio" className="d-flex flex-wrap">
      <h3 className="my-3 text-center">
        Welcome to my project showcase! Below, you'll find a selection of my
        most notable projects. For a more comprehensive view of my work, feel
        free to explore my GitHub repository. Let's embark on a journey through
        creativity and innovation!
      </h3>
      <h4 className="my-2 text-center">Projects</h4>
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
        gradient={gradientReverse}
        form={website}
        aos2="fade-left"
        img={perSocial}
        stack3="devicon-tailwindcss-original-wordmark colored project-icon"
        stack2="devicon-mysql-plain-wordmark colored project-icon"
        stack1="devicon-javascript-plain colored project-icon"
        stack4="devicon-handlebars-plain-wordmark  project-icon"
        title=" P🐾st: Pet Social Media "
        github="https://github.com/JuanMartinez503/Full-stack-pet-socia-media"
        description="Step into a world where adorable pets rule the social media kingdom! As the lead developer, I proudly present a full stack application that lets users create accounts for their pets, sparking charming interactions with other delightful companions. 🐾💛"
        appUrl="https://full-stack-pet-social-media-698fb2b195ab.herokuapp.com/"
      />
      <Project
        aos1="fade-left"
        aos2="fade-right"
        gradient={gradient}
        form={website}
        img={techBlog}
        stack3="devicon-nodejs-plain-wordmark colored project-icon"
        stack2="devicon-express-original-wordmark colored project-icon"
        stack1="devicon-javascript-plain colored project-icon"
        stack4="devicon-sequelize-plain-wordmark colored project-icon"
        title="Tech Blog "
        github="https://github.com/JuanMartinez503/Full-Stack-MVC-Tech-Blog"
        description="I designed and implemented a CMS-style full stack blog site, allowing users to publish, update, and delete their posts while fostering a vibrant community for sharing thoughts and ideas. The website was built from scratch to ensure a seamless and user-friendly experience."
        appUrl="https://full-stack-mvc-tech-blog-28de33d18a0e.herokuapp.com/"
      />
      <Project
        aos1="fade-left"
        aos2="fade-right"
        form={website}
        gradient={gradientReverse}
        img={movies}
        stack3="devicon-html5-plain-wordmark colored project-icon"
        stack2="devicon-css3-plain colored project-icon"
        stack1="devicon-jquery-plain-wordmark colored project-icon"
        stack4="devicon-bootstrap-plain-wordmark colored project-icon"
        title="Movie Search Engine "
        github="https://github.com/JuanMartinez503/Movie-Search-Engine"
        description="As the lead developer of a collaborative effort, we successfully created a user-friendly website that allows users to search for movie information, including Title, Year Released, Genre, and Plot. Additionally, the site seamlessly auto-generates data on the streaming services currently featuring the movie, while saving past searches using local storage. Our team skillfully integrated APIs to fetch movie details, providing an interactive and engaging experience for users."
        appUrl="https://juanmartinez503.github.io/Movie-Search-Engine/"
      />
        <Project
          aos1="fade-right"
          form={website}
          gradient={gradientReverse}
          aos2="fade-left"
          img={weather}
          stack3="devicon-bootstrap-plain colored project-icon"
          stack2="devicon-heroku-plain-wordmark colored project-icon"
          stack1="devicon-react-plain colored project-icon"
          stack4="devicon-nodejs-plain-wordmark colored  project-icon"
          title="Expense Tracker"
          github="https://github.com/JuanMartinez503/mern-fullstack-expense-tracker"
          description="Expense Tracker is a robust full-stack MERN application that I developed post my coding bootcamp to enhance my skills and empower users in managing their finances. With features like expense tracking, budget setting, and real-time spending visualization, it offers a user-friendly and secure platform to achieve financial success while I'm committed to continuous learning and skill improvement."
          appUrl="https://expense-tracker-mern-2023-3423c6e63a4e.herokuapp.com/"
        />
      <Project
        aos1="fade-left"
        aos2="fade-right"
        form={video}
        gradient={gradientReverse}
        img={mongoDB}
        stack4="devicon-nodejs-plain-wordmark colored project-icon"
        stack1="devicon-express-original-wordmark colored project-icon"
        stack3="devicon-javascript-plain colored project-icon"
        stack2="devicon-mongodb-plain-wordmark colored project-icon"
        title="NoSQL: Social Network API"
        github="https://github.com/JuanMartinez503/NoSQL-Social-Network-API"
        description="I built a dynamic Social Network API from scratch, leveraging the power of MongoDB, Mongoose, and Express.js. Through this API, users can effortlessly interact with one another, share thoughts, react to posts, and effortlessly manage friend lists, offering a seamless and engaging experience for any social network web application."
        appUrl="https://drive.google.com/file/d/1gWEUDKankUsW4-AzEuzJasr9bBRKccqZ/view"
      />{" "}
    </div>
  );
}
