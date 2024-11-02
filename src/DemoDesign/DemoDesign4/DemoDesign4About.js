import React from 'react';
import { Link } from 'react-router-dom';
import DemoDesign4Education from './DemoDesign4Education';

const DemoDesign4About = () => {
  return (
    <div>
        <div className="container-fluid mt-4">
          <div className="row   pro ">
            <div className="col mb-3 ">
            <h3 className="mt-3 text-light" ><img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/31fe16/info-squared.png" alt="info-squared"/> About <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/31fe16/horizontal-line.png" alt="horizontal-line"/> </h3>
                <p className="fadeIn lead text-light">
                I'm Madhavan C, a web developer skilled in front-end and back-end technologies.
                 With a degree in Computer and Communication Engineering, I'm passionate about crafting 
                 user-friendly websites. I thrive in collaborative environments, stay updated with industry trends, and continuously improve my skills. I believe in the positive impact of technology and aim to
                 exceed expectations with every project. Let's collaborate and bring your ideas to life!</p>            </div>
            <div className="row d-flex justify-content-center mb-2">
           
            </div>


              <hr />
             <DemoDesign4Education />
  </div>      </div>
    </div>
  );
}

export default DemoDesign4About;
