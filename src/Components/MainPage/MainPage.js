import React, { useState } from 'react';  
import AllDesign from './AllDesign';  
import Workspace from './Workspace';  

const MainPage = () => {  
    const [page, setPage] = useState('design');  
    const handleDesign = () => {  
        setPage('design');  
    }  
    const handleWorkspace = () => {  
        setPage("work");  
    }  

    const colordata = page === "design" ? "blue" : "grey"; 

    return (  
        <div>  
            <div className="container-fluid">  
                <div className="row mt-2">  
                    <div className="col-6">  
                        <p   
                            className='d-flex justify-content-center align-item-center h5 animate__animated animate__bounceInLeft'   
                            style={{ color: colordata }}   
                            onClick={handleDesign}  
                        >  
                            Designs  
                        </p>  
                    </div>  
                    <div className="col-6">  
                        <p   
                            className='d-flex justify-content-center align-item-center h5 animate__animated animate__bounceInRight'   
                            style={{ color: page === "work" ? "blue" : "grey" }} // Changing color based on page  
                            onClick={handleWorkspace}  
                        >  
                            WorkSpace  
                        </p>  
                    </div>  
                </div>  
            </div>  

            {  
                page === 'design' ? <AllDesign /> : <Workspace />  
            }  
        </div>  
    );  
}  

export default MainPage;