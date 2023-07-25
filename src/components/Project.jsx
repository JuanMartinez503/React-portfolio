import {Link} from 'react-router-dom'
import Aos from 'aos'
import {useEffect} from 'react'
export default function Project ({aos2, aos1, img, description,title, github, stack1, stack2,stack3, stack4, appUrl, form}){
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return(
     <div>
           <div id="project-component" className="my-5 m-1 ">
            <img src={img} alt={description} data-aos={aos1}/>
            <div id="project-info" data-aos={aos2} className="flex-wrap">
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
              <Link to={appUrl} target='_blank'><button>{form}</button></Link>
            </div>
        </div>
     </div>
    )
}