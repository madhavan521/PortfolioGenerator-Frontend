import React from 'react';
import { Fade } from 'react-awesome-reveal';


const DemoAbout = () => {

  return (
    <div className='container-fluid my-5'>  
    <div className="row">  
        <div className="col mb-3">  
            <h3 className="mt-3">  
                <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/31fe16/info-squared.png" alt="info-squared" />   
                About   
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/31fe16/horizontal-line.png" alt="horizontal-line" />  
            </h3>  
            <Fade direction="up">   
                <p className="fadeIn">  
                    
                        <h4 className='ms-3 mt-5 lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure in amet perferendis eligendi corporis est recusandae eaque voluptatibus? Quaerat distinctio ducimus incidunt enim, quis fugit sed omnis magnam dignissimos.</h4>  
 
                </p>   
            </Fade>  
        </div>  
    </div>  
</div>
  );
}

export default DemoAbout;
