import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';

const CreateAbout = () => {
  const [about,setAbout]=useState()
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate()
  const handleAbout=()=>{ 
     if (!about)
    {  
        toast.error("Please fill in all fields.");  
        return; 
    }
    const aboutdata={
    
     Aboutme : about
    }
    fetch("https://portfolio-generator-backend.onrender.com/api/user/aboutme",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"

      }, 
      credentials:"include",
      body:JSON.stringify(aboutdata)
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      toast.success("About Data Created Successfully")
      setLoading(true)
    })

    setTimeout(() => {
           navigate('/education')
    }, 1500);

  }
  return (
    <div className="container mt-5">  
    <div className="row justify-content-center">  
        <div className="col-md-6">  
            <h2 className="text-center">About</h2>  
            <div className="card">  
                <div className="card-body">  
                    <form>  
                        <div className="form-group">  
                            <label for="username">About</label>  
                            <textarea  type="text" className="form-control " style={{height:"150px"}}   value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Enter your username" />  
                        </div>  
                        <div  className='d-flex justify-content-center align-item-center mt-3'> 
                        <button type="button" className="btn btn-info " onClick={handleAbout}>Create About</button>  
                  </div> 
                   </form>  
                </div>  
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
  );
}

export default CreateAbout;
