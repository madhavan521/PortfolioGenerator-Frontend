import React, { useContext } from 'react';
import { EducationContext } from '../../Context/EducationContext';

const Design2Education = () => {

   const {educationdata}=useContext(EducationContext)
  return (
    <div className="container-fluid">  
    <div className="row mt-3 mb-2">  
        <h3 className="">  
            <img width="50" height="50" src="https://img.icons8.com/ios/50/22C3E6/education.png" alt="education" />  
            Education  
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/22C3E6/horizontal-line.png" alt="horizontal-line" />  
        </h3>  
</div> 

<div className="row">  
   <div className="col-12 col-md-6 col-lg-6 mt-3 ">  
         <div className=' d-flex justify-content-center align-item-center'>     
            <div className="card cards">  
               <div className="card-header text-center">  
                  <h6 className='text-dark'>SSLC - {educationdata.sslcYear}</h6>  
               </div>  
               <h5 className='text-center mt-2 text-dark'>{educationdata.sslcSchool}</h5>  
               <strong className='text-center text-dark'>{educationdata.sslcPercentage}</strong>  
            </div>  
         </div>  
   </div>   

   <div className="col-12 col-md-6 col-lg-6 mt-3 ">  
         <div className=' d-flex justify-content-center align-item-center'>        
            <div className="card cards">  
               <div className="card-header text-center">  
                  <h6 className='text-dark'>HSC - {educationdata.hscYear}</h6>  
               </div>  
               <h5 className='text-center mt-2 text-dark'>{educationdata.hscSchool}</h5>  
               <strong className='text-center text-dark'>{educationdata.hscPercentage}</strong>  
            </div>  
         </div>   
   </div>  
</div>  

   <div className="row d-flex justify-content-center mb-3">  
      <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center">  
         <div className="card cards">  
            <div className="card-header text-center">  
               <h6 className='text-dark'>{educationdata.ugStream}</h6>  
            </div>  
            <h5 className='text-center mt-2 text-dark'>{educationdata.clgName}</h5>  
            <strong className='text-center text-dark'>{educationdata.ugCgpa}</strong>  
         </div>  
      </div>  
   </div>   
</div>
  );
}

export default Design2Education;
