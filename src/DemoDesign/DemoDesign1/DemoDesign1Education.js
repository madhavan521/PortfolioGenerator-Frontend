import React from 'react';
import { Fade } from 'react-awesome-reveal';


const DemoEducation = () => {
    
  return (
    <div className="container-fluid">  
    <div className="row mt-3 mb-2">  
        <h3 className="">  
            <img width="50" height="50" src="https://img.icons8.com/ios/50/31fe16/education.png" alt="education" />  
            Education  
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/31fe16/horizontal-line.png" alt="horizontal-line" />  
        </h3>  
</div> 

<div className="row">  
   <div className="col-12 col-md-6 col-lg-6 mt-3 ">  
      <Fade direction='left'>          
         <div className=' d-flex justify-content-center align-item-center'>     
            <div className="card cards">  
               <div className="card-header text-center">  
                  <h6 className='text-light'>SSLC - 2020</h6>  
               </div>  
               <h5 className='text-center mt-2'>Demo School Name</h5>  
               <strong className='text-center'>Percentage : 85%</strong>  
            </div>  
         </div>  
      </Fade>   
   </div>   

   <div className="col-12 col-md-6 col-lg-6 mt-3 ">  
      <Fade direction="left">   
         <div className=' d-flex justify-content-center align-item-center'>        
            <div className="card cards">  
               <div className="card-header text-center">  
                  <h6 className='text-light'>HSC - 2022</h6>  
               </div>  
               <h5 className='text-center mt-2'>Demo HSC School</h5>  
               <strong className='text-center'>Percentage : 90%</strong>  
            </div>  
         </div>   
      </Fade>  
   </div>  
</div>  

<Fade direction="down">  
   <div className="row d-flex justify-content-center mb-3">  
      <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center">  
         <div className="card cards">  
            <div className="card-header text-center">  
               <h6 className='text-light'>UG - Computer Science</h6>  
            </div>  
            <h5 className='text-center mt-2'>Demo College Name</h5>  
            <strong className='text-center'>Percentage : 3.8 CGPA</strong>  
         </div>  
      </div>  
   </div>   
</Fade> 
</div>
  );
}

export default DemoEducation;
