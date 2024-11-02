import React, { useContext } from 'react';  
import { Fade } from 'react-awesome-reveal';  
import { AboutContext } from '../Context/AboutContext';  
import { Link } from 'react-router-dom';  

const DemoAbout = () => {  
    const { aboutdata } = useContext(AboutContext);  

    console.log(aboutdata);  

    return (  
        <div className='container-fluid my-5'>  
            <div className="row">  
                <div className="col mb-3">  
                    <h3 className="mt-3">  
                        <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/info-squared.png" alt="info-squared" />   
                        About   
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/22C3E6/horizontal-line.png" alt="horizontal-line" />  
                    </h3>  
                    <Fade direction="up">   
                        <p className="fadeIn">  
                            {aboutdata ? (  
                                <h4 className='ms-3 mt-5 lead text-wrap'>{aboutdata.Aboutme}</h4>  
                            ) : (  
                                <h4 className='ms-3 mt-5 lead'>Loading...</h4>  
                            )}  
                        </p>   
                    </Fade>  
                </div>  
            </div>  
            <hr />  
            <div className="my-2 d-flex justify-content-center align-item-center">  
                {aboutdata && (  
                    <Link to={`/editabout/${aboutdata._id}`}>  
                        <button className='btn btn-primary'>Edit About</button>  
                    </Link>  
                )}  
            </div>  
            <hr />  
        </div>  
    );  
}  

export default DemoAbout;