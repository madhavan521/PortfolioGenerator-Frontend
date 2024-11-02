import React from 'react';
import '../../Style/DemoStyle.css'
import Design1Introduction from '../../Design/Design1/Design1Introduction';
import Design1About from '../../Design/Design1/Design1About'
import Design1Contact from '../../Design/Design1/Design1Contact'
import Design1Education from '../../Design/Design1/Design1Education'
import Design1Footer from '../../Design/Design1/Design1Footer'
import Design1Skill from '../../Design/Design1/Design1Skill'
import Design1Project from '../../Design/Design1/Design1Project'






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
            <nav className="col-12 d-flex justify-content-md-center justify-content-start my-2">
              <ul className="nav pe-1 ">
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
        <div id="home" className='mt-3'><Design1Introduction/></div>
        <div id="about"><Design1About /></div>
        <div id="Education"><Design1Education /></div>
        <div id="skill"><Design1Skill/></div>
        <div id="project"><Design1Project /></div>
        <div id="contact"><Design1Contact/></div>
      </div>
      <Design1Footer />
    </div>
  );
  }

export default DemoPage;
