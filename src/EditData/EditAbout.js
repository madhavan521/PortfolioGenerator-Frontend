import React, { useState ,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast'

const EditAbout = () => {
  const [about,setAbout]=useState()
  const navigate = useNavigate()
  const {id} = useParams()
 useEffect(()=>{
    fetch(`https://portfolio-generator-backend.onrender.com/api/user/aboutme/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type": "application/json"
  
        }, 
        credentials:"include",
      })
      .then(res=>res.json())
      .then(data=>{
      setAbout(data.Aboutme)
      })
 },[id])
  const handleAbout=()=>{
    const aboutdata={
     Aboutme:about
    }
    fetch(`https://portfolio-generator-backend.onrender.com/api/user/aboutme/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type": "application/json"

      }, 
      credentials:"include",
      body:JSON.stringify(aboutdata)
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result);
      toast.success("About Edited Successfully")
      
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
            <h2 className="text-center">About</h2>  
            <div className="card">  
                <div className="card-body">  
                    <form>  
                        <div className="form-group">  
                            <label for="username">Save About</label>  
                            <textarea  type="text" className="form-control " style={{height:"150px"}}   value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Enter your username" />  
                        </div>  
                        <div  className='d-flex justify-content-center align-item-center mt-3'> 
                        <button type="button" className="btn btn-info " onClick={handleAbout}>Save About</button>  
                  </div> 
                   </form>  
                </div>  
            </div>  
        </div>  
    </div>  
</div>
  );
}

export default EditAbout;
