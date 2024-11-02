import React from 'react';
import { Fade } from 'react-awesome-reveal';
import profileImg from '../Assest/ProfileImg.jpg'
 

const DemoIntroduction = () => {

  return (
    <div className="container my-5">
      <div className="row rogs align-items-center">
        <div className="col-sm-12 col-md-6 col-lg-6 text-center text-md-start"> 
          <div className="d-inline-block intos">
            <p><h2 className="display-5"><Fade direction="top-left">Hi, I am </Fade>Jhon </h2></p>
            <Fade direction="top-right"><h5 className="">Software Developer</h5></Fade>
            <p><button className="btn mt-2 " style={{background:"#31fe16"}}> <a href=''>Download CV</a></button></p>
            <div className="row">
      <div className="col">
                   <a href=''> <img width="42" height="42" src="https://img.icons8.com/ios/50/31fe16/instagram-new--v1.png" alt="instagram-new--v1"/></a>
                   <a href=''> <img width="42" height="42" src="https://img.icons8.com/ios/50/31fe16/twitterx--v1.png" alt="twitterx--v1"/>                 </a>
                   <a href=''> <img width="42" height="42" src="https://img.icons8.com/ios/50/31fe16/linkedin.png" alt="linkedin"/></a>

      </div>
    </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 text-center text-md-end mt-4  sm-mb-5 sm-pb-5"> 
          <Fade direction="in">
        <img src={profileImg} alt="" width="60%" height="340px" className="image-fluid imgani" />
          </Fade>
        </div>
        
      </div>
    </div>
  );
}

export default DemoIntroduction;
