import React from 'react';
import '../Style/DemoStyle.css'
import EditDesignIntroduction from '../EditDesign/EditDesignIntroduction';
import EditDesignAbout from '../EditDesign/EditDesignAbout'
import EditDesignContact from '../EditDesign/EditDesignContact'
import EditDesignEducation from '../EditDesign/EditDesignEducation'
import EditDesignFooter from '../EditDesign/EditDesignFooter'
import EditDesignSkill from '../EditDesign/EditDesignSkill'
import EditDesignProject from '../EditDesign/EditDesignProject'






const DemoPage=()=>{
  const scrollToSection=(id)=>{
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }   
  }


  return (
    <div className='demobackground'>
      <header>
        <div className="container-fluid ">
          <div className="row  ">
          {/* <div className="col d-md-flex d-lg-flex justify-content-md-start d-sm-none h5 mt-1 ms-5">MADHAVAN C</div> */}
            <nav className="col-12 d-flex justify-content-md-center justify-content-start mt-4">
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
        <div id="home" className='mt-3'><EditDesignIntroduction/></div>
        <div id="about"><EditDesignAbout /></div>
        <div id="Education"><EditDesignEducation /></div>
        <div id="skill"><EditDesignSkill/></div>
        <div id="project"><EditDesignProject /></div>
        <div id="contact"><EditDesignContact/></div>
      </div>
      <EditDesignFooter />
    </div>
  );
  }

export default DemoPage;
