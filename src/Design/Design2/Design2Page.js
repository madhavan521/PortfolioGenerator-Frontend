import React from 'react';
import Design2Introduction from './Design2Introduction';
import Design2About from './Design2About';
import Design2Education from './Design2Education';
import Design2Skill from './Design2Skill';
import Design2Project from './Design2Project';
import Design2Contact from './Design2Contact';
import Design2Footer from './Design2Footer';

const Design2Page = () => {
  const scrollToSection=(id)=>{
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }   
  }
  return (

    <div className='design2background'>
           <style>  
    {`  
          .scroll {  
            overflow-y: auto;  
            height: 120vh;   
          }  
  
          .fixed-header {  
            position: sticky;  
            top: 0;  
            z-index: 1000; /* Ensure it stays above other content */  
          }  
        `}  
    </style> 
     <header className='fixed-header personalblack2'>
        <div className="container-fluid ">
          <div className="row  ">
            <nav className="col-12 d-flex justify-content-md-center justify-content-centers my-2">
              <ul className="nav pe-1 ">
                <li className="nav-item">
                  <a className="nav-a text-decoration-none text-dark my-2  h6" onClick={() => scrollToSection('home')}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a text-decoration-none text-dark my-2  h6" onClick={() => scrollToSection('about')}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a text-decoration-none text-dark my-2  h6" onClick={() => scrollToSection('skill')}>Skill</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a text-decoration-none text-dark my-2  h6" onClick={() => scrollToSection('project')}>Project</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a text-decoration-none text-dark my-2  h6" onClick={() => scrollToSection('contact')}>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

       <div id="home" className='mt-3'><Design2Introduction /></div>
        <div id="about"><Design2About /></div>
        <div id="Education"><Design2Education /></div>
        <div id="skill"><Design2Skill/></div>
        <div id="project"><Design2Project /></div>
        <div id="contact"><Design2Contact/></div>
        <Design2Footer />
      </div>
  );
}

export default Design2Page;
