import React from 'react';

const DemoDesign4Education = () => {
  return (
    <div className="container-fluid">  
    <div className="row mt-3 mb-2 text-light">  
        <h3 className="">  
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
                  <h6 className='text-light'>SSLC - 2020</h6>  
               </div>  
               <h5 className='text-center mt-2 text-light'>Demo School Name</h5>  
               <strong className='text-center text-light'>Percentage : 85%</strong>  
            </div>  
         </div>  
   </div>   

   <div className="col-12 col-md-6 col-lg-6 mt-3 ">  
         <div className=' d-flex justify-content-center align-item-center'>        
            <div className="card cards">  
               <div className="card-header text-center">  
                  <h6 className='text-light'>HSC - 2022</h6>  
               </div>  
               <h5 className='text-center mt-2 text-light'>Demo HSC School</h5>  
               <strong className='text-center text-light'>Percentage : 90%</strong>  
            </div>  
         </div>   
   </div>  
</div>  

   <div className="row d-flex justify-content-center mb-3">  
      <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center">  
         <div className="card cards">  
            <div className="card-header text-center">  
               <h6 className='text-light'>UG - Computer Science</h6>  
            </div>  
            <h5 className='text-center mt-2 text-light'>Demo College Name</h5>  
            <strong className='text-center text-light'>Percentage : 3.8 CGPA</strong>  
         </div>  
      </div>  
   </div>   
</div>
  );
}

export default DemoDesign4Education;
