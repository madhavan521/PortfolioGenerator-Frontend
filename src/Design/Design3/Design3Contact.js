import React from 'react';

const Design3Contact = () => {
  return (
    <div>
    <div>
   <div className="container-fluid">
     <div className="row pro mt-2">
       <h3 className="my-4">
         <img
           width="50"
           height="50"
           src="https://img.icons8.com/ios/50/22C3E6/contact-card.png"
           alt="contact-card"
         /> 
         Contact 
          <img
           width="50"
           height="50"
           src="https://img.icons8.com/ios-filled/50/22C3E6/horizontal-line.png"
           alt="horizontal-line"
         />
       </h3>
       <div className="row">
         <div className="col d-flex justify-content-center my-3">
           <h4>"I am Always Open To Discuss"</h4>
         </div>
       </div>
       <div className="col mx-4">
         <form >
           <div>
       
<label htmlFor="user_name">Name :</label>
             <input
               type="text"
               name="user_name"
               id="user_name"
               className="form-control "
               placeholder="Enter your Name"
             />
           </div>
           <div>
      
              <label htmlFor="user_email">Email:</label>
             <input
               type="email"
               name="user_email"
               id="user_email"
               className="form-control "
               placeholder="Enter your Email"
             /> 
           </div>
           <div>
           
       <label htmlFor="message">Message:</label>
             <textarea
               name="message"
               id="message"
               className="form-control "
               rows="5"
             
               placeholder="Enter your message"
             ></textarea>    
           </div>
           <div className="row my-4">
             <div className="col d-flex justify-content-center">
               <button type="submit" className="btn btn-info">
                 Send Message
               </button>
             </div>
           </div>
         </form>
       </div>
     </div>
   
   </div>
 </div>
 </div>
  );
}

export default Design3Contact;
