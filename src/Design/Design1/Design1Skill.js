import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { UserContext } from '../../Context/UserContext';

const DemoSkill = () => {
    const settings ={
            infinite: true,  
            speed: 500,  
            slidesToShow: 5,   
            slidesToScroll: 1,      
    }
    const {data}=useContext(UserContext)
    console.log(data.Project)
  


  return (
<div className='container-fluid my-3'>  
    <h3 className="my-5">  
        <img   
            width="50"   
            height="50"   
            src="https://img.icons8.com/ios/50/31fe16/development-skill.png"   
            alt="development-skill"   
        />   
        Skills   
        <img   
            width="50"   
            height="50"   
            src="https://img.icons8.com/ios-filled/50/31fe16/horizontal-line.png"   
            alt="horizontal-line"   
        />  
    </h3>  
     <div className="row my-2">
   
    {  
data && data.Skill.map(item => (  
 <div className='col-lg-2 col-md-4 col-6' key={item._id}>  
 <Fade direction='left'> <div className="cards card shadow-sm"> 
        <div className='d-flex  justify-content-center align-item-center'>
        <img className="cards-image card-image skillimg m-1 " src={item.image}  width='100px' height="100px" alt={item.name} />  
       </div>  <div className="card-body  text-center ">  
          <p className="text-light">{item.name}</p>  
        </div>  
      </div>   </Fade>
    </div> 
  ))  
}
    </div>
</div>
  );
}

export default DemoSkill;
