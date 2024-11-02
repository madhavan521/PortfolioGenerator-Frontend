import React from 'react';
import profileImg from '../Assest/ProfileImg.jpg'


const DemoDesign2Introduction = () => {
  return (
    <div>
    <div className="container-fluid mt-3">  
    <div className="row align-items-center">  
        <div className="col-lg-6 col-md-12 text-center text-md-left">  
            <h4 className="mt-2 ">Hello Everyone!</h4>  
            <h1 className="mt-2 display-4 text-dark">I am Shiva</h1>  
            <h5 className="mt-2 text-muted">Front-end Developer & Figma Designer</h5>  
            <div className="row">
      <div className="col">
                   <a href=''> <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/instagram-new--v1.png" alt="instagram-new--v1"/></a>
                   <a href=''> <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/twitterx--v1.png" alt="twitterx--v1"/>                 </a>
                   <a href=''> <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/linkedin.png" alt="linkedin"/></a>

      </div>
    </div> 
            <div className='mt-3'>  
                <button className="btn btn-primary btn-lg mt-3">Download CV</button>  
            </div>  
        </div>  
        <div className="col-lg-6 col-md-12 text-center mt-2">  
            <img src={profileImg} alt="Profile" className="" width="80%" height="450px" />  
        </div>  
    </div>  
  </div></div>
  );
}

export default DemoDesign2Introduction;
