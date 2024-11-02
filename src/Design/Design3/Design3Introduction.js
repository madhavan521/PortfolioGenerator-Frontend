import React, { useContext } from 'react';
import profile from '../Assest/ProfileImg.jpg'
import { IntroductionContext } from '../../Context/IntroductionContext';

const Design3Introduction = () => {
    const {introdata}=useContext(IntroductionContext)
  return (
    <div>  
    <div className="container-fluid ">  
        <div className="row pro mt-2">  
            <div className="col d-flex justify-content-center">  
                <div className="mt-3">  
                    <div className="mx-4">  
                        {/* Demo Image */}  
                        <img src={introdata.profileImg} alt="Profile" className="image-fluid imgani" style={{ filter: 'grayscale(100%)', borderRadius: "15%" }} width="210px" height="180px" />  
                        <h3 className="mt-2 ms-5 text-dark">{introdata.fullname}</h3>  
                    </div>  
                    <div className="web mt-2">  
                        <h5 className="justify-content-center d-flex mt-2 personal text-dark">{introdata.role}</h5>  
                    </div>  
                    <div className="row">  
                        <div className="col d-flex justify-content-center align-item-center">  
                            {/* Demo Social Media Links */}  
                            <a href={introdata.github}> <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/github--v1.png" alt="instagram-new--v1"/></a>
                   <a href={introdata.twitter}> <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/twitterx--v1.png" alt="twitterx--v1"/>                 </a>
                   <a href={introdata.linkedin}> <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/linkedin.png" alt="linkedin"/></a>
                        </div>  
                    </div>  
                    <div className="personal mt-4 aniup text-dark ">  
                        <div className="d-inline-block ">  
                            <div className="row mt-2">  
                                <div className="col-auto ms-2">  
                                    <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/apple-phone.png" alt="Phone" />  
                                </div>  
                                <div className="col">  
                                    <span>  
                                        <p>  
                                            <label htmlFor="">Phone: </label>  
                                            <h5 className='text-dark'>{introdata.phoneNo}</h5>  
                                        </p>  
                                    </span>  
                                </div>  
                            </div>  
                        </div>  
                        <div className="d-inline">  
                            <div className="row">  
                                <div className="col-auto ms-2">  
                                    <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/mail.png" alt="Email" />  
                                </div>  
                                <div className="col">  
                                    <span>  
                                        <p>  
                                            <label htmlFor="">E-mail: </label>  
                                            <h6 className='text-dark'>{introdata.email}</h6>  
                                        </p>  
                                    </span>  
                                </div>  
                            </div>  
                        </div>  
                        <div className="d-inline">  
                            <div className="row">  
                                <div className="col-auto ms-2">  
                                    <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/location.png" alt="Location" />  
                                </div>  
                                <div className="col">  
                                    <span>  
                                        <p>  
                                            <label htmlFor="">Location: </label>  
                                            <h5  className='text-dark'>{introdata.location}</h5>  
                                        </p>  
                                    </span>  
                                </div>  
                            </div>  
                        </div>  
                        <div className="d-inline">  
                            <div className="row">  
                                <div className="col-auto ms-2">  
                                    <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/date-span.png" alt="Date of Birth" />  
                                </div>  
                                <div className="col">  
                                    <span>  
                                        <p>  
                                            <label htmlFor="">Date of Birth: </label>  
                                            <h5  className='text-dark'>{introdata.dob}</h5>  
                                        </p>  
                                    </span>  
                                </div>  
                            </div>  
                        </div>     <div className="mt-2 d-flex justify-content-center mb-4">  
                       <a href={introdata.resume}> <button className="btn btn-info">  
                            <h5>Download CV <img width="24" height="24" src="https://img.icons8.com/material-two-tone/24/download--v1.png" alt="Download" /></h5>  
                        </button>  </a>
                    </div> 
                    </div>  
                  
                </div>  
            </div>  
        </div>  
    </div>  
</div>
  );
}

export default Design3Introduction;
