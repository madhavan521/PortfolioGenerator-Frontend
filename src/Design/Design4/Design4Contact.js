import React from 'react';

const Design4Contact = () => {
  return (
    <div>
    <div>
   <div className="container-fluid">
     <div className="row pro mt-2">
       <h3 className="my-4 text-light">
         <img
           width="50"
           height="50"
           src="https://img.icons8.com/ios/50/31fe16/contact-card.png"
           alt="contact-card"
         /> 
         Contact 
          <img
           width="50"
           height="50"
           src="https://img.icons8.com/ios-filled/50/31fe16/horizontal-line.png"
           alt="horizontal-line"
         />
       </h3>
       <div className="row">
         <div className="col d-flex justify-content-center my-3">
           <h4 className='text-light'>"I am Always Open To Discuss"</h4>
         </div>
       </div>
       <div className="col mx-4">
         <form >
           <div>
       
<label htmlFor="user_name " className='text-light'>Name :</label>
             <input
               type="text"
               name="user_name"
               id="user_name"
               className="form-control inputs"
               placeholder="Enter your Name"
             />
           </div>
           <div>
      
              <label htmlFor="user_email " className='text-light'>Email:</label>
             <input
               type="email"
               name="user_email"
               id="user_email"
               className="form-control inputs"
               placeholder="Enter your Email"
             /> 
           </div>
           <div>
           
       <label htmlFor="message text-light" className='text-light'>Message:</label>
             <textarea
               name="message"
               id="message"
               className="form-control inputs"
               rows="5"
             
               placeholder="Enter your message"
             ></textarea>    
           </div>
           <div className="row my-4">
             <div className="col d-flex justify-content-center">
               <button type="submit" className="btn " style={{background:"#31fe16"}}>
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

export default Design4Contact;
