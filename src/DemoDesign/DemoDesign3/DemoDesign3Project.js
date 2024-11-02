import React from 'react';
import projectImg from '../Assest/Project.jpg'

const DemoDesign3Project = () => {
    const projectsData = [  
        {  
          name: "Elite Feet",  
          description: "Developed a user-friendly web application using HTML, CSS, Bootstrap, and JavaScript, showcasing a variety of shoes tailored to the user's size.",  
          url: "https://elite-feet.netlify.app/"  
        },  
        {  
          name: "E-commerce-Figma",  
          description: "I designed an e-commerce platform using Figma, focusing on providing users with a seamless online shopping experience.",  
          url: "https://www.figma.com/proto/Ds7LNBRlOGNcT1LWIJBmgp/First-Project?node-id=1-2"  
        },  
        {  
          name: "Grocery-Figma",  
          description: "I designed an online grocery store using Figma, providing users with a convenient platform to browse and purchase.",  
          url: "https://www.figma.com/proto/bXGPm81DQ7WzjTo08w9kd2/Second-Project?node-id=1-2"  
        },  
        {  
          name: "Plant Shop-Figma",  
          description: "I designed an online plant shop using Figma, showcasing a diverse selection of high-quality plants.",  
          url: "https://www.figma.com/proto/gkjltKUlhNvtBsLgoTdawu/Project-3?node-id=5-222"  
        },  
        {  
          name: "Gym Website",  
          description: "I developed a dynamic gym website using React, designed to provide users with an engaging platform for fitness information I developed a dynamic gym website using React, designed to provide users with an engaging platform for fitness information .",  
          url: "https://spectacular-cocada-e5ad15.netlify.app/"  
        }  
      ]; 
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
      {projectsData.map((project, index) => (  
        <div className="col-12   col-md-6 col-lg-6 mb-4 d-flex">  
          <div className="card cards project-card w-100 h-100">  
            <img  
              src={projectImg}  
              alt="Project Thumbnail"  
              className="card-img-top"  
              style={{ height: '200px', objectFit: 'cover' }}  
            />  
            <div className="card-body d-flex flex-column">  
              <h5 className="card-title text-dark">{project.name}</h5>  
              <p className="card-text flex-grow-1 text-dark">{project.description}</p>  
                <div className="row">  
                  <div className="col-6 d-flex justify-content-start">         
                    <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/github--v1.png" alt="github--v1" />  
                  </div>  
                  <div className="col-6 d-flex justify-content-end">        
                    <button className="btn btn-info me-2">  
                      <a href="">Website</a>  
                    </button>  
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

export default DemoDesign3Project;
