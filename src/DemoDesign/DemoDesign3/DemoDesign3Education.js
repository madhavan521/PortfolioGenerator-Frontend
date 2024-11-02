import React from 'react';

const DemoDesign3Education = () => {
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
                  <h6 className='text-dark'>SSLC - 2020</h6>  
               </div>  
               <h5 className='text-center mt-2 text-dark'>Demo School Name</h5>  
               <strong className='text-center text-dark'>Percentage : 85%</strong>  
            </div>  
         </div>  
   </div>   

   <div className="col-12 col-md-6 col-lg-6 mt-3 ">  
         <div className=' d-flex justify-content-center align-item-center'>        
            <div className="card cards">  
               <div className="card-header text-center">  
                  <h6 className='text-dark'>HSC - 2022</h6>  
               </div>  
               <h5 className='text-center mt-2 text-dark'>Demo HSC School</h5>  
               <strong className='text-center text-dark'>Percentage : 90%</strong>  
            </div>  
         </div>   
   </div>  
</div>  

   <div className="row d-flex justify-content-center mb-3">  
      <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center">  
         <div className="card cards">  
            <div className="card-header text-center">  
               <h6 className='text-dark'>UG - Computer Science</h6>  
            </div>  
            <h5 className='text-center mt-2 text-dark'>Demo College Name</h5>  
            <strong className='text-center text-dark'>Percentage : 3.8 CGPA</strong>  
         </div>  
      </div>  
   </div>   
</div>
  );
}

export default DemoDesign3Education;
