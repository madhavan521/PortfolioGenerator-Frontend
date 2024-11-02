import React, { useContext } from 'react';
import { SkillContext } from '../Context/SkillContext';
import Slider from 'react-slick';  
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { UserContext } from '../Context/UserContext';

const DemoSkill = () => {
    const settings ={
            infinite: true,  
            speed: 500,  
            slidesToShow: 5,   
            slidesToScroll: 1,      
    }
    const {data}=useContext(UserContext)
    const handleDelete=(id)=>{
      fetch(`https://portfolio-generator-backend.onrender.com/api/user/skill/${id}`,{
        method:"DELETE",
      headers:{
        "Content-Type" : 'application/json'
      },
      credentials:"include"
      })
      .then(res=>{
        console.log("deleted succesfully")
        toast.success("Deleted Successfully")
        window.location.reload()
      })

    }


  return (
<div className='container-fluid my-3'>  
<div className="row mt-3">
  <div className="col-6 d-flex justify-content-start align-item-start">
     <h3 className="mb-5">  
        <img   
            width="50"   
            height="50"   
            src="https://img.icons8.com/ios/50/22C3E6/development-skill.png"   
            alt="development-skill"   
        />   
        Skills   
        <img   
            width="50"   
            height="50"   
            src="https://img.icons8.com/ios-filled/50/22C3E6/horizontal-line.png"   
            alt="horizontal-line"   
        />  
    </h3>  
  </div>
  <div className="col-6  d-flex justify-content-end align-item-end">
 <Link to='/addskill'>  <button className='btn btn-warning' style={{height:"40px"}} >Add Skill</button>
  </Link> </div>
</div>
   

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
      <div className=''>
      <Link to={`/editskill/${item._id}`}><button className='btn btn-primary mt-1'>Edit Skill</button></Link> 
      <button className='btn btn-danger ms-1 mt-1' onClick={()=>handleDelete(item._id)}>Delete</button> 
</div>
    </div> 
  ))  
}
    </div>
</div>
  );
}

export default DemoSkill;
