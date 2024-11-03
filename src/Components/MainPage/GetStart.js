import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import { UserContext} from "../../Context/UserContext"
import {toast} from 'react-hot-toast'

const GetStart = () => {
   const {data}=useContext(UserContext)
  const [loading,setLoading]=useState(false)
  const navigate =useNavigate()


  const handleCreation=()=>{
    setLoading(true)
  data ?
   ( setTimeout(() => {
      navigate('/introduction')
    }, 2000) ) :
      (setTimeout(() => {
        toast.success("Please Login First")
        navigate('/login')
      }, 1000))

    }
  



  return (
    <div className="container my-5 py-5 animate__animated  animate__zoomInDown" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <div className="row ">
      <h3 className="text-center text-primary mb-4" style={{ fontWeight: '600' }}>
        Create Your Stunning Portfolio with Just a Click!
      </h3>
      <p className="text-center text-muted mx-auto" style={{ maxWidth: '600px' }}>
        Start building your professional portfolio to showcase your skills, projects, and achievements in a beautifully designed format. Make an impression with a portfolio that stands out!
      </p>
    </div>
  
    <div className="row">
      <div className="d-flex justify-content-center align-items-center my-4">
       <button className="btn btn-warning px-5  shadow " onClick={handleCreation} style={{ borderRadius: '50px', fontSize: '1.25rem' }}>
          <i className="fas fa-play-circle me-2"></i> Start Creating
        </button>
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

export default GetStart;
