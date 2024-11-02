import React, { useContext } from 'react';
import Design4Project from './Design4Project';
import { UserContext } from '../../Context/UserContext';

const Design4Skill = () => {
  const {data}=useContext(UserContext)
   
  return (
    <div>
       <div>
        <div>
    <div className="container-fluid about">
  <div className="row pro mt-2  mb-4">
  <h3 className="mt-3 text-light"> <img width="50" height="50" src="https://img.icons8.com/ios/50/31fe16/development-skill.png" alt="development-skill"/> Skills <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/31fe16/horizontal-line.png" alt="horizontal-line"/></h3>
 {data &&
      data.Skill.map((log) => (
        <div key={log._id} className="col-lg-2 col-md-4 col-6 logo">
        
 <div className="logo py-4 cards">
 <div className='d-flex justify-content-center align-item-center'>
           <img src={log.image} alt={log.name} width="100px" className="rounded " height="100px" />
      </div>  </div>
        </div>
      ))} 
 </div></div>



</div>
<Design4Project />
    </div>
    </div>
  );
}

export default Design4Skill;
