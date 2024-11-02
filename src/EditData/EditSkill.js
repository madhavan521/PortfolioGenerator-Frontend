import React, { useEffect, useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast'
import { BallTriangle } from 'react-loader-spinner';
import SkillImage from '.././CreateData/SkillImage'

const EditSkill = () => {
    const [name,setName] = useState('');
    const [image ,setImage] = useState('');
const [loading,setLoading]=useState(false)
    const {id}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        fetch(`https://portfolio-generator-backend.onrender.com/api/user/skill/${id}`,
            {
                method:"PUT",
                headers:{
                    "Content-Type": "application/json"
                },
                credentials:'include', 
    
            })
            .then(res=>res.json())
            .then(data=>{
               setName(data.name)
               setImage(data.image)
            })
    },[id])
    const handleSkill=()=>{
        const Skilldata ={
            name:name,
            image:image,
        }
       fetch(`https://portfolio-generator-backend.onrender.com/api/user/skill/${id}`,
        {
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            credentials:'include', 
            body:JSON.stringify(Skilldata)

        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            toast.success(" Skills Edited Successfully ")
            setLoading(true)

        })
        setTimeout(() => {
            navigate('/editpanel')
            window.location.reload()
        }, 1500);

    }
    

  return (
    <div className="container mt-5">  
    <div className="row justify-content-center">  
        <div className="col-md-6">  
            <h2 className="text-center">Skill</h2>  
            <div className="card">  
                <div className="card-body">  
                    <form>  
                        <div className="form-group">  
                            <label for="name">Name</label>  
                            <input type="text" className="form-control" id="name" 
                            value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />  
                        </div>  
                        <div className="form-group">  
                            <label for="image">Image</label>  
                            <input type="text" className="form-control" id="image" 
                            value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter your skill image" />  
                        
                        







                        
                        </div> 
                        <div  className='d-flex justify-content-center align-item-center mt-3'> 
                        <button type="button" className="btn btn-info " onClick={handleSkill}>Save Skill</button>  
                  </div> 
                   </form>  
                </div>  
            </div>  
        </div>  
        {loading && ( // Full screen loader  
        <div className="fullscreen-loader">  
          <BallTriangle  
            height={100}  
            width={100}  
            radius={5}  
            color="#4fa94d"  
            ariaLabel="ball-triangle-loading"  
            wrapperStyle={{}}  
            wrapperClass=""  
            visible={true}  
          />  
        </div>  
        )}
    </div>  
    <div className='mt-3'>
<p className='Lead text-center' ><strong>NOTE : </strong> Copy the Text and Use as a Skill Image</p>

<h3>Skill Images</h3>
    <SkillImage /></div>
</div> 
  );
}

export default EditSkill;
