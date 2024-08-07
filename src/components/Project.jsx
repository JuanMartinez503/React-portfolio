import { Link } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
export default function Project({
  aos2,
  aos1,
  img,
  description,
  title,
  github,
  stack1,
  stack2,
  stack3,
  stack4,
  appUrl,
  form,
  gradient,
}) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div id="project-component" className="mb-5 m-1 ">
        <img src={img} loading="lazy" alt={description} data-aos={aos1}  />
        <div id="project-info" data-aos={aos2} className={gradient}>
<div className="align-items-center d-flex justify-content-center gap-2">
<h4 className="text-center">
            {title}{" "}
          
          </h4>
          <Link target="_blank" to={github}>
              <i className="devicon-github-original colored"></i>
            </Link>
</div>
          <p >{description}</p>
          <div className="text-center">
            <i className={stack1}></i>

            <i className={stack2}></i>

            <i className={stack3}></i>
            <i className={stack4}></i>
          </div>
          <div className="text-center">
            <Link to={appUrl} target="_blank" className="shadow">
              <button>{form}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
