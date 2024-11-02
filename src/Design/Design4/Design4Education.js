import React, { useContext } from 'react';
import { EducationContext } from '../../Context/EducationContext';

const Design4Education = () => {

   const {educationdata}=useContext(EducationContext)
  return (
    <div className="container-fluid">  
    <div className="row mt-3 mb-2">  
        <h3 className="text-light">  
            <img width="50" height="50" src="https://img.icons8.com/ios/50/31fe16/education.png" alt="education" />  
            Education  
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/31fe16/horizontal-line.png" alt="horizontal-line" />  
        </h3>  
</div> 

<div className="row">  
   <div className="col-12 col-md-6 col-lg-6 mt-3 ">  
         <div className=' d-flex justify-content-center align-item-center'>     
            <div className="card cards">  
               <div className="card-header text-center">  
                  <h6 className='text-light'>SSLC - {educationdata.sslcYear}</h6>  
               </div>  
               <h5 className='text-center mt-2 text-light'>{educationdata.sslcSchool}</h5>  
               <strong className='text-center text-light'>{educationdata.sslcPercentage}</strong>  
            </div>  
         </div>  
   </div>   

   <div className="col-12 col-md-6 col-lg-6 mt-3 ">  
         <div className=' d-flex justify-content-center align-item-center'>        
            <div className="card cards">  
               <div className="card-header text-center">  
                  <h6 className='text-light'>HSC - {educationdata.hscYear}</h6>  
               </div>  
               <h5 className='text-center mt-2 text-light'>{educationdata.hscSchool}</h5>  
               <strong className='text-center text-light'>{educationdata.hscPercentage}</strong>  
            </div>  
         </div>   
   </div>  
</div>  

   <div className="row d-flex justify-content-center mb-3">  
      <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center">  
         <div className="card cards">  
            <div className="card-header text-center">  
               <h6 className='text-light'>{educationdata.ugStream}</h6>  
            </div>  
            <h5 className='text-center mt-2 text-light'>{educationdata.clgName}</h5>  
            <strong className='text-center text-light'>{educationdata.ugCgpa}</strong>  
         </div>  
      </div>  
   </div>   
</div>
  );
}

export default Design4Education;
