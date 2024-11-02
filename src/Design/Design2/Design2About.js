import React, { useContext } from 'react';
import { AboutContext } from '../../Context/AboutContext';  


const Design2About = () => {
  const { aboutdata } = useContext(AboutContext);   
  return (
    <div>
       <div> 
        <div className="container-fluid">
            <div className="row mt-2 mb-4 pro rog ">
            <div className="col mb-3 ">
            <h3 className="mt-4" ><img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/info-squared.png" alt="info-squared"/> About <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/22C3E6/horizontal-line.png" alt="horizontal-line"/> </h3>
            {aboutdata ? (  
                                <h4 className='ms-3 mt-3 lead text-wrap' style={{fontSize:"20px",fontWeight:"18px"}}>{aboutdata.Aboutme}</h4>  
                            ) : (  
                                <h4 className='ms-3 mt-5 lead'>Loading...</h4>  
                            )}           </div>

    </div>
    </div>
    </div>
    </div>
  );
}

export default Design2About;
