import React from 'react';  
import Slider from 'react-slick';  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import '../../Style/DemoProjectStyle.css';  
import projectImg from '../Assest/Project.jpg';  

const DemoDesign4Project = () => {  
  const projectdata = {  
    projects: [  
      {  
        "projectName": "Weather App",  
        "projectDetail": "A simple weather application that provides real-time weather data and forecasts for any location using OpenWeatherMap API."  
      },  
      {  
        "projectName": "Todo List",  
        "projectDetail": "A web-based todo list application that allows users to add, remove, and mark tasks as completed, with local storage support."  
      },  
      {  
        "projectName": "Portfolio Website",  
        "projectDetail": "A personal portfolio website to showcase my projects, skills, and experiences with a responsive design."  
      },  
      {  
        "projectName": "E-Commerce Store",  
        "projectDetail": "An online e-commerce platform that enables users to browse products, add them to a cart, and securely checkout with integrated payment processing."  
      },  
      {  
        "projectName": "Chat Application",  
        "projectDetail": "A real-time chat application that allows users to send messages to one another, with features such as chat rooms and user authentication."  
      }  
    ]  
  };  

  const settings = {  
    infinite: true,  
    speed: 500,  
    slidesToShow: 1,   
    slidesToScroll: 1,    
  };  

  return (  
    <div className="container-fluid">  
      <div className="row pro mb-4 mt-2">  
        <h3 className="my-4 text-light">  
          <img  
            width="50"  
            height="50"  
            src="https://img.icons8.com/ios/50/31fe16/project.png"  
            alt="project"  
          />{' '}  
          Projects  
          <img  
            width="50"  
            height="50"  
            src="https://img.icons8.com/ios-filled/50/31fe16/horizontal-line.png"  
            alt="horizontal-line"  
          />  
        </h3>  
        <div className="row">  
          <div className="col d-flex justify-content-center">  
            <h5>Slide To See More</h5>  
          </div>  
        </div>  

        <Slider {...settings}>  
          {projectdata.projects.map((item, index) => (  
            <div className="cards card" key={index}>  
              <header className="cards__thumb">  
                <img className='cards-image' src={projectImg} alt="project" />  
              </header>  

              <div className="cards__body">  
                <h2 className="cards__title text-light">{item.projectName}</h2>  
                <p className="cards__description text-light mb-5">{item.projectDetail}</p>  
              </div>  
              
              <footer className="cards__footer">  
                <div className="row">  
                  <div className="col-6 d-flex justify-content-start">         
                    <img width="42" height="42" src="https://img.icons8.com/ios/50/31fe16/github--v1.png" alt="github--v1" />  
                  </div>  
                  <div className="col-6 d-flex justify-content-end">        
                    <button className="btn  me-2" style={{background:"#31fe16"}}>  
                      <a >Website</a>  
                    </button>  
                  </div>        
                </div>  
              </footer>  
            </div>  
          ))}  
        </Slider>  
      </div>  
    </div>  
  );  
};  

export default DemoDesign4Project;