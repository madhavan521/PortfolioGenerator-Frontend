import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { UserContext } from '../../Context/UserContext';
import { IntroductionContext } from '../../Context/IntroductionContext';
import { Link } from 'react-router-dom';

const DemoIntroduction = () => {
const {introdata} =useContext(IntroductionContext)
console.log(introdata.fullname)

  return (
    <div className="container my-5">
      <div className="row rogs align-items-center">
        <div className="col-sm-12 col-md-6 col-lg-6 text-center text-md-start"> 
          <div className="d-inline-block intos">
            <p><h2 className="display-5"><Fade direction="top-left">Hi, I am </Fade> {introdata.fullname}</h2></p>
            <Fade direction="top-right"><h5 className="">{introdata.role}</h5></Fade>
            <p><button className="btn mt-2 " style={{background:'#31fe16'}}> <a href={introdata.resume}>Download CV</a></button></p>
            <div className="row">
      <div className="col">
                   <a href={introdata.github}> <img width="42" height="42" src="https://img.icons8.com/ios/50/31fe16/github--v1.png" alt="instagram-new--v1"/></a>
                   <a href={introdata.twitter}> <img width="42" height="42" src="https://img.icons8.com/ios/50/31fe16/twitterx--v1.png" alt="twitterx--v1"/>                 </a>
                   <a href={introdata.linkedin}> <img width="42" height="42" src="https://img.icons8.com/ios/50/31fe16/linkedin.png" alt="linkedin"/></a>

      </div>
    </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 text-center text-md-end mt-4  sm-mb-5 sm-pb-5"> 
          <Fade direction="in"><img src={introdata.profileImg} alt="" width="100%" height="60%" className="image-fluid imgani" /></Fade>
        </div>
        
      </div>
     
    </div>
  );
}

export default DemoIntroduction;
