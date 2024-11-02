import React, { useContext } from 'react';
import { IntroductionContext } from '../../Context/IntroductionContext';


const Design2Introduction = () => {
  const {introdata} =useContext(IntroductionContext) 
   return (
    <div>
    <div className="container-fluid mt-3">  
    <div className="row align-items-center">  
        <div className="col-lg-6 col-md-12 text-center text-md-left">  
            <h4 className="mt-2 ">Hello Everyone!</h4>  
            <h1 className="mt-2 display-4 text-dark">I am {introdata.fullname}</h1>  
            <h5 className="mt-2 text-muted">{introdata.role}</h5>  
            <div className="row">
      <div className="col">
                   <a href={introdata.github}> <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/github--v1.png" alt="instagram-new--v1"/></a>
                   <a href={introdata.twitter}> <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/twitterx--v1.png" alt="twitterx--v1"/>                 </a>
                   <a href={introdata.linkedin}> <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/linkedin.png" alt="linkedin"/></a>

      </div>
    </div> 
            <div className='mt-4'>  
               <a href={introdata.resume} className='text-light text-decoration-none'>  <button className="btn btn-primary btn-lg mt-3">Download CV</button></a>  
            </div>  
        </div>  
        <div className="col-lg-6 col-md-12 text-center">  
            <img src={introdata.profileImg} alt="Profile" className="" width="80%" height="450px" />  
        </div>  
    </div>  
  </div></div>
  );
}

export default Design2Introduction;
