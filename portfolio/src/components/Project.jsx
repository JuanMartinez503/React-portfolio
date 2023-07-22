import {Link} from 'react-router-dom'
export default function Project ({img, description,title, github, stack1, stack2,stack3, stack4, appUrl}){
    return(
     <div>
           <div id="project-component" className="my-5 m-1 ">
            <img src={img} alt={description} />
            <div id="project-info" className="flex-wrap">
              <h4 className="text-center">{title} <Link target='_blank' to={github}>
            <i className="devicon-github-original colored"></i>
          </Link></h4>
              <p>{description}</p>
              <div className='text-center d-flex'>

            <i className={stack1}></i>
          
            <i className={stack2}></i>
          
            <i className={stack3}></i>
            <i className={stack4}></i>
          
              </div>
              <Link to={appUrl} target='_blank'><button>Visit Application</button></Link>
            </div>
        </div>
     </div>
    )
}