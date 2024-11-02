import React, { useState } from 'react';  
import Design4Introduction from './Design4Introduction';  
import Design4About from './Design4About';  
import Design4Contact from './Design4Contact';  
import Design4Skill from './Design4Skill';  

const Design4page = () => {  
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
    <div className='mt-2 design4'>  
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
    
    <header className=' fixed-header'>  
        <div className="container  my-3 personalblack ">  
            <div className="row bounceIn pro">  
                <nav className="col d-flex justify-content-center align-item-center">  
                    <ul className="nav pe-1">  
                        <li className="nav-item  my-2">  
                            <a className="me-2 text-decoration-none  text-light " onClick={handleDesign4Home}> Home </a>  
                        </li>  
                        <li className="nav-item my-2">  
                            <a className="text-decoration-none  text-light " onClick={handleDesign4Skill}> Skill </a>  
                        </li>  
                        <li className="nav-item my-2">  
                            <a className="text-decoration-none  text-light" onClick={handleDesign4Skill}> Project </a>  
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
                <Design4Introduction />  
            </div> 
            <div className="col-12 col-lg-9 scroll ">  
                {design4 === 'home' && <Design4About />}  
                {design4 === 'skill' && <Design4Skill />}  
                {design4 === 'contact' && <Design4Contact />}  
            </div>  
        </div>  
    </div>  
</div>
  );  
};  

export default Design4page;