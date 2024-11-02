import React from 'react';
import DemoDesign1Introduction from './DemoDesign1Introduction';
import DemoDesign1Skill from './DemoDesign1Skill';
import DemoDesign1Project from './DemoDesign1Project';
import DemoDesign1Contact from './DemoDesign1Contact';
import DemoDesign1About from './DemoDesign1About'
import '../../Style/DemoStyle.css'
import DemoDesign1Education from './DemoDesign1Education';
import DemoDesign1Footer from './DemoDesign1Footer';


const DemoPage=()=>{
  const scrollToSection=(id)=>{
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }   
  }


  return (
    <div className='demobackground'>
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
      <header className='fixed-header personalblack1'>
        <div className="container-fluid ">
          <div className="row  ">
          {/* <div className="col d-md-flex d-lg-flex justify-content-md-start d-sm-none h5 mt-1 ms-5">MADHAVAN C</div> */}
            <nav className="col-12 d-flex justify-content-md-center justify-content-centers ">
              <ul className="nav pe-1 my-2">
                <li className="nav-item">









                
                  <a className="nav-a text-decoration-none" onClick={() => scrollToSection('home')}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a text-decoration-none" onClick={() => scrollToSection('about')}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a text-decoration-none" onClick={() => scrollToSection('skill')}>Skill</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a text-decoration-none" onClick={() => scrollToSection('project')}>Project</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a text-decoration-none" onClick={() => scrollToSection('contact')}>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className=''>
        <div id="home" className='mt-3'><DemoDesign1Introduction /></div>
        <div id="about"><DemoDesign1About /></div>
        <div id="Education"><DemoDesign1Education /></div>
        <div id="skill"><DemoDesign1Skill/></div>
        <div id="project"><DemoDesign1Project /></div>
        <div id="contact"><DemoDesign1Contact/></div>
      </div>
      <DemoDesign1Footer />
    </div>
  );
  }

export default DemoPage;
