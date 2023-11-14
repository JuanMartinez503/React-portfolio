import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const currentURL = useLocation().pathname;
  return (
    <div>
      <header>
        <nav id="nav" className="navbar  navbar-expand-lg p-4 bg-body-tertiary">
          <div className="container-fluid ">
            <Link to="/" className="navbar-brand">Juan Martinez<br />
            <span id="full-stack" className="text-center">Full Stack Developer</span></Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarScroll">
              <ul className="navbar-nav ms-auto  navbar-nav-scroll justify-content-end">
                <li className="nav-item mx-3">
                  <Link
                    className={
                      currentURL === "/about" ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    to="/about"
                    id="home"
                  >
                    About Me
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className={
                      currentURL === "/portfolio" ? "nav-link active" : "nav-link"
                    } to="/portfolio">
                    Projects
                  </Link>
                </li>
              
                <li className="nav-item mx-3">
                  <Link  to="/resume"  className={
                      currentURL === "/resume" ? "nav-link active" : "nav-link"
                    }>Resume</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
