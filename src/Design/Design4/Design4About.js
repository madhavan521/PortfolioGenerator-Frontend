import React, { useContext } from 'react';
import { AboutContext } from '../../Context/AboutContext';  
import { Link } from 'react-router-dom';
import Design4Education from './Design4Education'


const Design4About = () => {
  const { aboutdata } = useContext(AboutContext);   
  return (    
    <div>
    <div className="container-fluid mt-4">
      <div className="row   pro ">
        <div className="col mb-3 ">
        <h3 className="mt-3 text-light" ><img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/31fe16/info-squared.png" alt="info-squared"/> About <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/31fe16/horizontal-line.png" alt="horizontal-line"/> </h3>
        {aboutdata ? (  
        <h4 className='ms-3 mt-3 lead text-light text-wrap' style={{fontSize:"20px",fontWeight:"18px"}}>{aboutdata.Aboutme}</h4>  
    ) : (  
        <h4 className='ms-3 mt-5 lead'>Loading...</h4>  
    )}           </div>
        <div className="row d-flex justify-content-center mb-2">
     
        </div>


          <hr />
          <Design4Education />
</div>      </div>
</div>                         
  );
}

export default Design4About;
