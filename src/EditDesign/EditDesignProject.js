import React, { useContext } from 'react';  
import Slider from 'react-slick';  
import {UserContext} from '../Context/UserContext'
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import '../Style/DemoProjectStyle.css'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const DemoProject = () => {  
  const { data } = useContext(UserContext);
  const handleDelete=(id)=>{
    fetch(`https://portfolio-generator-backend.onrender.com/api/user/project/${id}`,{
      method:"DELETE",
    headers:{
      "Content-Type" : 'application/json'
    },
    credentials:"include"
    })
    .then(res=>{
      console.log("deleted succesfully")
      toast.success("Deleted Successfully")
      window.location.reload()
    })

  }

  const settings = {  
    infinite: true,  
    speed: 500,  
    slidesToShow: 1,   
    slidesToScroll: 1,    
  };  

  return (  
    <div className="container-fluid">  
      <div className="row pro mb-4 mt-2">  
      <div className="row">
        <div className="col-6  d-flex justify-content-start align-item-start"><h3 className="mt-2">  
          <img  
            width="50"  
            height="50"  
            src="https://img.icons8.com/ios/50/22C3E6/project.png"  
            alt="project"  
          />{' '}  
          Projects  
          <img  
            width="50"  
            height="50"  
            src="https://img.icons8.com/ios-filled/50/22C3E6/horizontal-line.png"  
            alt="horizontal-line"  
          />  
        </h3>  </div>
        <div className="col-6  d-flex justify-content-end align-item-end">
  <Link to='/addproject'> <button className='btn btn-warning' style={{height:"40px"}} >Add Project</button></Link> 
  </div>      </div>
        
        <div className="row">  
          <div className="col d-flex justify-content-center">  
            <h5>Slide To See More</h5>  
          </div>  
        </div>          
    
        {data && data.Project.map((project) => (  
        <div className="col-12   col-md-6 col-lg-4 mb-4 d-flex" key={project._id}>  
          <div className="card cards project-card w-100 h-100">  
            <img  
              src={project.projectImg} 
              alt="Project Thumbnail"  
              className="card-img-top"  
              style={{ height: '200px', objectFit: 'cover' }}  
            />  
            <div className="card-body d-flex flex-column">  
              <h5 className="card-title text-light">{project.projectName}</h5>  
              <p className="card-text flex-grow-1 text-light">{project.projectDetail}</p>  
                <div className="row mb-2">  
                  <div className="col-6 d-flex justify-content-start">         
                   <a href={project.gitlink}> <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/github--v1.png" alt="github--v1" />  
                 </a> </div>  
                  <div className="col-6 d-flex justify-content-end">        
                    <button className="btn btn-info me-2">  
                      <a href={project.weblink}>Website</a>  
                    </button>  
                  </div>      
                </div>   <div className="row mt-2 ">
            <div className="col-6">  
      <Link to={`/editproject/${project._id}`}><button className='btn btn-primary'>Edit Project</button></Link> 

         </div> 
         <div className='col-6 d-flex justify-content-end'>
         <button className='btn btn-danger' onClick={()=>handleDelete(project._id)}>Delete</button>
        </div> 
         </div> 
            </div>  
          </div> 
        
        </div>  
      ))}  

      </div>  
     
    </div>  
  );  
};  

export default DemoProject;
