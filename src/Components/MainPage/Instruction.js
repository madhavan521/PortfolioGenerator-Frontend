import React from 'react';
import LoginImg from './InstructionAssest/Login.png'
import StartImg from './InstructionAssest/Start.png'
import driveImg from './InstructionAssest/drive.jpg'
import fillImg from './InstructionAssest/Filldata.png'
import view from './InstructionAssest/view.png'
import FillDetail from './InstructionAssest/FillDetail.png'
import Edit from './InstructionAssest/Edit (2).png'
import background from './InstructionAssest/withoutbackgroung.jpg'
const Instruction = () => {
  const instructions = [  
    {  
      title: "Step 1: Sign Up, Login, and Click 'Start Now'",  
      description: "Begin by registering for an account if you haven't already. Once registered, log into your account to access the portfolio generator. After logging in, locate and click the 'Start Now' button on the homepage to initiate the portfolio creation process.",  
      image: LoginImg,  
    },  
    {  
      title: "Step 2: View Available Templates and Click 'Start Creating'",  
      description: "After clicking 'Start Now,' you will be directed to a page displaying various portfolio templates. Review the designs and choose the one that best fits your personal style and professional branding. Click 'Start Creating' to proceed to the data entry stage.",  
      image: StartImg,  
    },  
    {  
      title: "Step 3: Enter Your Information",  
      description: "Fill in the necessary data for your portfolio, which includes sections for Introduction, About, Skills, Education, and Projects. Input your information accurately to ensure a comprehensive presentation of your qualifications.",  
      image: FillDetail,  
    }, 
    {  
      title: "Step 4: Upload Images Using Google Drive Links",  
      description: "While entering your data, upload images by using their shareable links from Google Drive. Ensure each image is hosted on Google Drive, as this maintains quality and resolution in your portfolio.",  
      image: driveImg,  
    },  
    {  
      title: "Step 5: Ensure Images Have No Background",  
      description: "For a polished and professional appearance, ensure that the images you upload, particularly in the skills and projects sections, have no backgrounds. Utilize image editing tools to achieve this before uploading images to Google Drive.",  
      image:  background,  
    },  
    {  
      title: "Step 6: Review Your Data and Click 'Generate Portfolio'",  
      description: "Once all information is entered and images are uploaded, take a moment to review your entries for accuracy. When satisfied, click the 'Generate Portfolio' button to compile all your data into a personalized portfolio based on your selected template.",  
      image:  fillImg,
    },  
    {  
      title: "Step 7: View Your Portfolio Design",  
      description: "After generating your portfolio, click 'Workspace' to visualize the final design. This is where you can see how your content appears in the selected template.",  
      image: view ,  
    },  
    {  
      title: "Step 8: Edit Your Data Anytime",  
      description: "You can edit your portfolio data and add skills and projects at any time. Make updates as necessary to keep your portfolio current and reflective of your professional growth.",  
      image: Edit,  
    },  
  ];
  return (
<div>  
  <section className="py-5">  
    <div className="container">  
      <h2 className="text-center mb-5">Portfolio Creation Instructions</h2>  
      <div className="row">  
        {instructions.map((step, index) => (  
          <div className="col-md-6 col-lg-4 mb-4" key={index}>  
            <div className="card shadow-sm border-light">  
              <img  
                src={step.image}  
                className="card-img-top"  
                height="180px"  
                alt={step.title}  
              />  
              <div className="card-body">  
                <h5 className="card-title">{step.title}</h5>  
                <p className="card-text">{step.description}</p>  
              </div>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  </section>  
</div>
  );
}

export default Instruction;
