import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { EducationContext } from '../Context/EducationContext';
import { Link } from 'react-router-dom';


const DemoEducation = () => {
    
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
      <Fade direction='left'>          
      <div className=' d-flex justify-content-center align-item-center'>     <div className="card cards">
                    <div className="card-header  text-center">
                    <h6 className='text-light'>SSLC -{educationdata.sslcYear}</h6>
                    </div>
                      <h5 className='text-center mt-2'>{educationdata.sslcSchool}</h5>
                      <strong className='text-center'>Precentage : {educationdata.sslcPercentage}</strong>
                    </div></div>
            </Fade> 
        </div> 

     <div className="col-12 col-md-6 col-lg-6 mt-3 ">  
  <Fade direction="left">   
  <div className=' d-flex justify-content-center align-item-center'>        
     <div className="card cards">
                    <div className="card-header  text-center">
                    <h6 className='text-light'>SSLC -{educationdata.hscYear}</h6>
                    </div>
                      <h5 className='text-center mt-2'>{educationdata.hscSchool}</h5>
                      <strong className='text-center'>Precentage : {educationdata.hscPercentage}</strong>
                    </div>
       </div>   </Fade>
        </div>  
</div>
      
     
      

   
     <Fade direction="down">
       <div className="row d-flex justify-content-center mb-3">  
        <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center">  
           
        <div className="card cards">
                    <div className="card-header  text-center">
                    <h6 className='text-light'>SSLC -{educationdata.ugStream}</h6>
                    </div>
                      <h5 className='text-center mt-2'>{educationdata.clgName}</h5>
                      <strong className='text-center'>Precentage : {educationdata.ugCgpa}</strong>
                    </div>
           
        </div>  
    </div>   </Fade>  
    <hr />
      <div className="my-2 d-flex justify-content-center align-item-center">
       <Link to={`/editeducation/${educationdata._id}`}><button className='btn btn-primary'>Edit Education</button></Link> 
        </div>
        <hr />
</div>
  );
}

export default DemoEducation;
