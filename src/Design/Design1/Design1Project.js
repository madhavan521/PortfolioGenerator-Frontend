import React, { useContext } from 'react';  
import Slider from 'react-slick';  
import { ProjectContext } from '../../Context/ProjectContext';  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import '../../Style/DemoProjectStyle.css'
import { Link } from 'react-router-dom';
const DemoProject = () => {  
  const { projectdata } = useContext(ProjectContext);
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
        <h3 className="my-4">  
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
        
      {
       projectdata && projectdata.map(item=>
       <div className="cards card" key={item._id} >
       <header className="cards__thumb">
              <img className='cards-image card-image'  width="100%" height='100px' src={item.projectImg} alt={item.projectName}/>
            </header>
            
      
            <div className="cards__body">
                <h2 className="cards__title text-light">{item.projectName}</h2>
                <p className="cards__description text-light mb-5">{item.projectDetail}
            </p>  </div>    
                   <footer className="cards__footer">
            <div className="row">
            <div className="col-6 d-flex justify-content-start">         
             <a href={item.gitlink}> <img width="42" height="42" className='' src="https://img.icons8.com/ios/50/31fe16/github--v1.png" alt="github--v1"/>
            </a> </div>
            <div className="col-6 d-flex justify-content-end ">        
               <a href={item.weblink}>  <button className="btn me-2 " style={{background:'#31fe16'}}>Website</button></a>
           </div>        </div>
          
            </footer> 
            

        </div> 
        
 

        )
      }</Slider>
      </div>  
     
    </div>  
  );  
};  

export default DemoProject;
