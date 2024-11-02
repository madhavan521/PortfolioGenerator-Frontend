import React, { useState } from 'react';  
import Design3Introduction from './Design3Introduction';  
import Design3About from './Design3About';  
import Design3Contact from './Design3Contact';  
import Design3Skill from './Design3Skill';  

const Design3page = () => {  
  const [design3, setDesign3] = useState('home');  

  const handleDesign3Skill = () => {  
    setDesign3('skill');  
  };  

  const handleDesign3Home = () => {  
    setDesign3('home');  
  };  

  const handleDesign3Contact = () => {  
    setDesign3('contact');  
  };  

  return (  
    <div className='mt-2'>  
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

      <header className="fixed-header my-3">  
        <div className="container personal my-3">  
          <div className="row bounceIn pro">  
            <nav className="col d-flex justify-content-center align-item-center">  
              <ul className="nav pe-1">  
                <li className="nav-item my-2">  
                  <a className="me-2 text-decoration-none" onClick={handleDesign3Home}> Home </a>  
                </li>  
                <li className="nav-item my-2">  
                  <a className="text-decoration-none" onClick={handleDesign3Skill}> Skill </a>  
                </li>  
                <li className="nav-item my-2">  
                  <a className="text-decoration-none" onClick={handleDesign3Skill}> Project </a>  
                </li>   
                <li className="nav-item my-2">  
                  <a className="text-decoration-none" onClick={handleDesign3Contact}> Contact </a>  
                </li>  
              </ul>  
            </nav>  
          </div>  
        </div>  
      </header>  

      <div className="container-fluid">  
        <div className="row">  
          <div className="col-12 col-lg-3 personal">  
            <Design3Introduction />  
          </div>   
          <div className="col-12 col-lg-9 scroll personal">  
            {design3 === 'home' && <Design3About />}  
            {design3 === 'skill' && <Design3Skill />}  
            {design3 === 'contact' && <Design3Contact />}  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Design3page;