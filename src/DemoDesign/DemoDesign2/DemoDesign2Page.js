import React from 'react';
import DemoDesign2Introduction from './DemoDesign2Introduction';
import DemoDesign2About from './DemoDesign2About';
import DemoDesign2Education from './DemoDesign2Education';
import DemoDesign2Skill from './DemoDesign2Skill';
import DemoDesign2Project from './DemoDesign2Project';
import DemoDesign2Contact from './DemoDesign2Contact';

const DemoDesign2Page = () => {
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
            <nav className="col-12 d-flex justify-content-md-center justify-content-centers mt-4">
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

       <div id="home" className='mt-3'><DemoDesign2Introduction /></div>
        <div id="about"><DemoDesign2About /></div>
        <div id="Education"><DemoDesign2Education /></div>
        <div id="skill"><DemoDesign2Skill/></div>
        <div id="project"><DemoDesign2Project /></div>
        <div id="contact"><DemoDesign2Contact/></div>
      </div>
  );
}

export default DemoDesign2Page;
