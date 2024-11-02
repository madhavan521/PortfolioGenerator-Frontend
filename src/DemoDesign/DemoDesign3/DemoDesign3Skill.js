import React from 'react';
import DemoDesign3Project from './DemoDesign3Project';

const DemoDesign3Skill = () => {
  const logo=[
      {
        id:"1",
        logo:"https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"
      },
      {
        id:"2",
        logo:"https://cdn.iconscout.com/icon/free/png-256/free-css-131-722685.png"
      },
      {
        id:"3",
        logo:"https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png"
      },
      {
        id:"4",
        logo:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png"
      },
      {
        id:"5",
        logo:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
      },
      {
        id:"6",
        logo:"https://miro.medium.com/v2/resize:fit:374/1*Yhe1R94CIotr2se7Wf6TQQ.png"
      },
      {
        id:"7",
        logo:"https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"
      },
      {
        id:"8",
        logo:"https://cdn.iconscout.com/icon/free/png-256/free-css-131-722685.png"
      },
      {
      id:"9",
        logo:"https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png"
      },
      {
        id:"10",
        logo:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png"
      },           
    ]
return (
  <div>
     <div>
     <div>
       <div>
        <div>
    <div className="container-fluid about">
  <div className="row pro mt-2  mb-4">
  <h3 className="mt-3"> <img width="50" height="50" src="https://img.icons8.com/ios/50/22C3E6/development-skill.png" alt="development-skill"/> Skills <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/22C3E6/horizontal-line.png" alt="horizontal-line"/></h3>
 {logo &&
      logo.map((log) => (
        <div key={log.id} className="col-lg-2 col-6 col-md-4 logo">
        
 <div className="logo py-4 cards">
 <div className='d-flex justify-content-center align-item-center'>
           <img src={log.logo} alt="" width="100px" className="rounded " height="100px" />
      </div>  </div>
        </div>
      ))} 
 </div></div>



</div>
    </div>
    </div>
     
<hr />

<DemoDesign3Project />


</div>
  </div>
);
}

export default DemoDesign3Skill;
