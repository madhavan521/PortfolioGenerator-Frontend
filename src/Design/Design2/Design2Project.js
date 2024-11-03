import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

const Design2Project = () => {
   const {data}=useContext(UserContext)
  return (
    <div className="container-fluid">  
    <h3 className=" my-4">  
      <img   
        width="50"   
        height="50"   
        src="https://img.icons8.com/ios/50/22C3E6/project.png"   
        alt="project"   
      />   
      Projects   
      <img   
        width="50"   
        height="50"   
        src="https://img.icons8.com/ios-filled/50/22C3E6/horizontal-line.png"   
        alt="horizontal-line"  
      />  
    </h3>  

    <div className="row">  
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
              <h5 className="card-title text-dark">{project.projectName}</h5>  
              <p className="card-text flex-grow-1 text-dark">{project.projectDetail}</p>  
                <div className="row">  
                  <div className="col-6 d-flex justify-content-start">         
                   <a href={project.gitlink}> <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/github--v1.png" alt="github--v1" />  
                 </a> </div>  
                  <div className="col-6 d-flex justify-content-end">        
                     <a href={project.weblink}><button className="btn btn-info me-2">  
                     Website  
                    </button> </a> 
                  </div>        
                </div>  
            </div>  
          </div>  
        </div>  
      ))}  
    </div>  
  </div>   
  );
}

export default Design2Project;