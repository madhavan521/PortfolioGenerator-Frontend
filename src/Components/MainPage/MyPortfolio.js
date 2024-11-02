import React from 'react';  
import { Fade } from 'react-awesome-reveal';  
import Project1 from '../DesignAssest/Project1.png';  
import Project2 from '../DesignAssest/Project2.png';  
import Project3 from '../DesignAssest/Project3.png';
import Project4 from '../DesignAssest/Project4.png'  
// import { faEye } from '@fortawesome/free-solid-svg-icons';  
import { Link } from 'react-router-dom';

const portfolioData = [  
  {  
    id: 1,  
    title: 'Design 1',  
    description: 'Single Page Portfolio With Black Background With Sliding Project Feature',  
    image: Project1, 
    link:"design1" 
  },  
  {  
    id: 2,  
    title: 'Design 2',  
    description: 'Single Page Portfolio With White Background',  
    image: Project2, 
    link:"design2"
  },  
  {  
    id: 3,  
    title: 'Design 3',  
    description: 'Multiple Page Portfolio With Static Introduction page',  
    image: Project3,  
    link:"design3"
  },  
  {  
    id: 4,  
    title: 'Design 4',  
    description: 'Multiple Page Portfolio With Black Background and Static Introduction page',  
    image: Project4,  
    link:"design4"
  },  
  // {  
  //   id: 5,  
  //   title: 'Design 5',  
  //   description: 'A dynamic design approach that engages visitors effectively.',  
  //   image: Project2, 
  //   link:"design5" 
  // },  
  // {  
  //   id: 6,  
  //   title: 'Design 6',  
  //   description: 'A vibrant and energetic design for modern portfolios.',  
  //   image: Project3,
  //   link:"design6"  
  // },  
];  
const handleDesigns=()=>{
  
}
const PortfolioDesigns = () => {  
  return (  
    <div className="container-fluid mt-3 ">  
    <hr />
          <div className="row mb-4">  
        <h3 className="text-dark text-center">Your Portfolio Designs</h3>  
        <p className="text-center text-muted">  
         
        </p>  
      </div>  

    
      <div className="row">  
        {portfolioData.map((item) => (  
          <div className="col-lg-6 col-md-6 col-12 mb-4" key={item.id}>  
            <Fade direction="up" triggerOnce>  
              <div className="card shadow-sm border-0 transition-shadow hover-shadow mb-4">  
                <img  
                  src={item.image}  
                  alt={item.title}  
                  className="card-image m-1"  
                  height='190px'
                />  
                
                <div className="card-body text-center">  
                  <h5 className="card-title text-dark">{item.title}</h5>  
                  <p className="card-text text-muted">{item.description}</p>  
                  <a href="#" className="btn btn-success btn-sm">  
                  <Link to={`/${item.link}`} className='text-light text-decoration-none' onClick={handleDesigns} > View Your Portfolio  </Link>
                  </a>  
                </div>  
              </div>  
            </Fade>  
          </div>  
        ))}  
      </div>  

      <style jsx>{`  
          .hover-shadow:hover {  
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);  
              transform: scale(1.03);  
              transition: all 0.3s ease;  
          }  
      `}</style>  
    </div>  
  );  
};  

export default PortfolioDesigns;