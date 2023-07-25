import Project from "../components/Project";
import perSocial from "../images/petsocialmedia.png";
import techBlog from "../images/techblog.png";
import mongoDB from '../images/mongo.png'
import ecommerse from '../images/ecommerse.png'
import weather from '../images/weather.png'
import movies from '../images/movies.png'


export default function Portfolio() {
  const website = "Visit Website!";
  const video = "Watch Demo Video!"

  return (
    <div id="portfolio">
        <h3 className="mx-3 text-center">Welcome to my project showcase! Below, you'll find a selection of my most notable projects. For a more comprehensive view of my work, feel free to explore my GitHub repository. Let's embark on a journey through creativity and innovation!</h3>
         <h4 className="my-3">Full Stack:</h4>
      <Project
        aos1="fade-right"
        form={website}
        aos2="fade-left"
        img={perSocial}
        stack3="devicon-tailwindcss-original-wordmark colored project-icon"
        stack2="devicon-mysql-plain-wordmark colored project-icon"
        stack1="devicon-javascript-plain colored project-icon"
        stack4="devicon-handlebars-plain-wordmark  project-icon"
        title=" P🐾st: Pet Social Media "
        github="https://github.com/JuanMartinez503/Full-stack-pet-socia-media"
        description="Step into a world where adorable pets rule the social media kingdom! As the lead developer, I proudly present a full-stack application that lets users create accounts for their pets, sparking charming interactions with other delightful companions. 🐾💛"
        appUrl="https://full-stack-pet-social-media-698fb2b195ab.herokuapp.com/"
      />
      <Project
        aos1="fade-left"
        aos2="fade-right"
        form={website}
        img={techBlog}
        stack3="devicon-nodejs-plain-wordmark colored project-icon"
        stack2="devicon-express-original-wordmark colored project-icon"
        stack1="devicon-javascript-plain colored project-icon"
        stack4="devicon-sequelize-plain-wordmark colored project-icon"
        title="Tech Blog "
        github="https://github.com/JuanMartinez503/Full-Stack-MVC-Tech-Blog"
        description="I designed and implemented a CMS-style blog site, allowing users to publish, update, and delete their posts while fostering a vibrant community for sharing thoughts and ideas. The website was built from scratch to ensure a seamless and user-friendly experience."
        appUrl="https://full-stack-mvc-tech-blog-28de33d18a0e.herokuapp.com/"
      />
       <h4>Front-End:</h4>
      <Project
        aos1="fade-left"
        aos2="fade-right"
        form={website}
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
        aos2="fade-left"
        form={website}
        img={weather}
        stack3="devicon-css3-plain colored project-icon"
        stack2="devicon-html5-plain-wordmark colored project-icon"
        stack1="devicon-javascript-plain colored project-icon"
        stack4="devicon-bootstrap-plain-wordmark colored project-icon"
        title="Weather Dashboard"
        github="https://github.com/JuanMartinez503/WeatherApp-JuanM"
        description="I undertook the task of dynamically updating HTML and CSS using weather API data. Starting from scratch, I skillfully utilized HTML, CSS, and JavaScript to create an interactive web application. To enhance the user interface, I incorporated Bootstrap CSS for stylish buttons and form elements, resulting in a seamless and engaging user experience."
        appUrl="https://juanmartinez503.github.io/WeatherApp-JuanM/"
      />
     
      <h4>Back-End:</h4>
      <Project
        aos1="fade-left"
        aos2="fade-right"
        form={video}
        img={mongoDB}
        stack4="devicon-nodejs-plain-wordmark colored project-icon"
        stack1="devicon-express-original-wordmark colored project-icon"
        stack3="devicon-javascript-plain colored project-icon"
        stack2="devicon-mongodb-plain-wordmark colored project-icon"
        title="NoSQL: Social Network API"
        github="https://github.com/JuanMartinez503/NoSQL-Social-Network-API"
        description="I built a dynamic Social Network API from scratch, leveraging the power of MongoDB, Mongoose, and Express.js. Through this API, users can effortlessly interact with one another, share thoughts, react to posts, and effortlessly manage friend lists, offering a seamless and engaging experience for any social network web application. By combining my frontend expertise with my backend proficiency, I successfully brought this project to life, showcasing my ability to create robust and user-centric web solutions."
        appUrl="https://drive.google.com/file/d/1gWEUDKankUsW4-AzEuzJasr9bBRKccqZ/view"
      />{" "}
      <Project
        aos1="fade-right"
        aos2="fade-left"
        form={video}
        img={ecommerse}
        stack3="devicon-nodejs-plain-wordmark colored project-icon"
        stack2="devicon-express-original-wordmark colored project-icon"
        stack1="devicon-javascript-plain colored project-icon"
        stack4="devicon-sequelize-plain-wordmark colored project-icon"
        title="E-Commerce Back End (ORM) "
        github="https://github.com/JuanMartinez503/ORM-E-commerce-Back-End"
        description="I skillfully developed the back end of an e-commerce site, enhancing a working Express.js API by seamlessly integrating Sequelize to interact with a MYSQL database. This enables efficient data management and empowers the e-commerce platform with robust features and functionalities."
        appUrl="https://drive.google.com/file/d/18QxwMu3RjQQYXwKPAoNDWteYOkbvhsyB/view"
      />
     
    </div>
  );
}
