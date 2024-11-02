import React from 'react';
import profile from '../Assest/ProfileImg.jpg'

const DemoDesign4Introduction = () => {
  return (
    <div>  
    <div className="container-fluid">  
        <div className="row pro mt-2">  
            <div className="col d-flex justify-content-center">  
                <div className="mt-3">  
                    <div className="mx-4">  
                        {/* Demo Image */}  
                        <img src={profile} alt="Profile" className="image-fluid imgani" style={{ filter: 'grayscale(100%)', borderRadius: "15%" }} width="210px" height="180px" />  
                        <h3 className="mt-2 ms-5 text-light">John Doe</h3>  
                    </div>  
                    <div className="web mt-2">  
                        <h5 className="justify-content-center d-flex mt-2  text-light">Front-End Developer</h5>  
                    </div>  
                    <div className="row">  
                        <div className="col d-flex justify-content-center align-item-center">  
                            {/* Demo Social Media Links */}  
                            <a href='https://instagram.com' target="_blank" rel="noopener noreferrer"><img width="42" height="42" src="https://img.icons8.com/ios/50/31fe16/instagram-new--v1.png" alt="Instagram" /></a>  
                            <a href='https://twitter.com' target="_blank" rel="noopener noreferrer"><img width="42" height="42" src="https://img.icons8.com/ios/50/31fe16/twitterx--v1.png" alt="Twitter" className='ms-3' /></a>  
                            <a href='https://linkedin.com' target="_blank" rel="noopener noreferrer"><img width="42" height="42" src="https://img.icons8.com/ios/50/31fe16/linkedin.png" alt="LinkedIn" className='ms-3' /></a>  
                        </div>  
                    </div>  
                    <div className=" mt-4 aniup text-light ">  
                        <div className="d-inline-block ">  
                            <div className="row mt-2">  
                                <div className="col-auto ms-2">  
                                    <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/31fe16/apple-phone.png" alt="Phone" />  
                                </div>  
                                <div className="col">  
                                    <span>  
                                        <p>  
                                            <label htmlFor="">Phone: </label>  
                                            <h5 className='text-light'>+1 (234) 567-8901</h5>  
                                        </p>  
                                    </span>  
                                </div>  
                            </div>  
                        </div>  
                        <div className="d-inline">  
                            <div className="row">  
                                <div className="col-auto ms-2">  
                                    <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/31fe16/mail.png" alt="Email" />  
                                </div>  
                                <div className="col">  
                                    <span>  
                                        <p>  
                                            <label htmlFor="">E-mail: </label>  
                                            <h6 className='text-light'>johnddoe@example.com</h6>  
                                        </p>  
                                    </span>  
                                </div>  
                            </div>  
                        </div>  
                        <div className="d-inline">  
                            <div className="row">  
                                <div className="col-auto ms-2">  
                                    <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/31fe16/location.png" alt="Location" />  
                                </div>  
                                <div className="col">  
                                    <span>  
                                        <p>  
                                            <label htmlFor="">Location: </label>  
                                            <h5  className='text-light'>San Francisco, CA</h5>  
                                        </p>  
                                    </span>  
                                </div>  
                            </div>  
                        </div>  
                        <div className="d-inline">  
                            <div className="row">  
                                <div className="col-auto ms-2">  
                                    <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/31fe16/date-span.png" alt="Date of Birth" />  
                                </div>  
                                <div className="col">  
                                    <span>  
                                        <p>  
                                            <label htmlFor="">Date of Birth: </label>  
                                            <h5  className='text-light'>01-15-1990</h5>  
                                        </p>  
                                    </span>  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                    <div className="mt-2 d-flex justify-content-center mb-4">  
                        <button className="btn " style={{background:"#31fe16"}}>  
                            <h5>Download CV <img width="24" height="24" src="https://img.icons8.com/material-two-tone/24/download--v1.png" alt="Download" /></h5>  
                        </button>  
                    </div>  
                </div>  
            </div>  
        </div>  
    </div>  
</div>
  );
}

export default DemoDesign4Introduction;
