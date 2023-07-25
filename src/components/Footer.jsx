import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
      <div className=" mt-3 p-3 card">
        <div className="card-header">Full Stack Developer</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              "The only way to do great work is to love what you do." - Steve
              Jobs{" "}
            </p>
          </blockquote>
          <div className="socials">
            <Link to="https://www.linkedin.com/in/juan-martinez-769870247/" target='_blank'>
              <i className="devicon-linkedin-plain social-icon"></i>
            </Link>

            <Link to="https://github.com/JuanMartinez503" target="_blank">
              {"     "}
              <i className="devicon-github-original social-icon"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
