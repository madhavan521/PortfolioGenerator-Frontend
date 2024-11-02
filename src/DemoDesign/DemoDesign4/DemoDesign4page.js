import React, { useState } from 'react';  
import DemoDesign4Introduction from './DemoDesign4Introduction';  
import DemoDesign4About from './DemoDesign4About';  
import DemoDesign4Contact from './DemoDesign4Contact';  
import DemoDesign4Skill from './DemoDesign4Skill';  

const DemoDesign4page = () => {  
  const [design4, setDesign4] = useState('home');  

  const handleDesign4Skill = () => {  
    setDesign4('skill');  
  };  

  const handleDesign4Home = () => {  
    setDesign4('home');  
  };  

  const handleDesign4Contact = () => {  
    setDesign4('contact');  
  };  

  return (  
    <div className=' design4'>  
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
    
    <header className='fixed-header my-2  '>  
        <div className="container mt-3 personalblack ">  
            <div className="row bounceIn pro">  
                <nav className="col d-flex justify-content-center align-item-center">  
                    <ul className="nav pe-1">  
                        <li className="nav-item  my-2">  
                            <a className="me-2 text-decoration-none  text-light " onClick={handleDesign4Home}> Home </a>  
                        </li>  
                        <li className="nav-item my-2">  
                            <a className="text-decoration-none text-light  " onClick={handleDesign4Skill}> Skill </a>  
                        </li>  
                        <li className="nav-item my-2">  
                            <a className="text-decoration-none text-light " onClick={handleDesign4Skill}> Project </a>  
                        </li>   
                        <li className="nav-item my-2">  
                            <a className="text-decoration-none text-light " onClick={handleDesign4Contact}> Contact </a>  
                        </li>  
                    </ul>  
                </nav>  
            </div>  
        </div>  
    </header>  

    <div className="container-fluid">  
        <div className="row">  
            <div className="col-12 col-lg-3 fixed ">  
                <DemoDesign4Introduction />  
            </div> 
            <div className="col-12 col-lg-9 scroll ">  
                {design4 === 'home' && <DemoDesign4About />}  
                {design4 === 'skill' && <DemoDesign4Skill />}  
                {design4 === 'contact' && <DemoDesign4Contact />}  
            </div>  
        </div>  
    </div>  
</div>
  );  
};  

export default DemoDesign4page;