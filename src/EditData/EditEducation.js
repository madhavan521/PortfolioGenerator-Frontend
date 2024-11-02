import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const EditEducation = () => {
    const [sslcYear, setSslcYear] = useState('');  
    const [sslcSchool, setSslcSchool] = useState('');  
    const [sslcPercentage, setSslcPercentage] = useState('');  
    const [hscYear, setHscYear] = useState('');  
    const [hscSchool, setHscSchool] = useState('');  
    const [hscPercentage, setHscPercentage] = useState('');  
    const [ugStream, setUgStream] = useState('');  
    const [clgName, setClgName] = useState('');  
    const [ugCgpa, setUgCgpa] = useState();  
const navigate = useNavigate()

const {id}=useParams()
useEffect(()=>{
    fetch(`https://portfolio-generator-backend.onrender.com/api/user/education/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type": "application/json"

        }, 
        credentials:"include"
      })
      .then(res=>res.json())
      .then(data=>{
       setSslcPercentage(data.sslcPercentage);
       setSslcSchool(data.sslcSchool);
       setSslcYear(data.sslcYear);
        setHscSchool(data.hscSchool);
        setHscPercentage(data.hscPercentage);
        setHscYear(data.hscYear);
        setUgCgpa(data.ugCgpa);
        setUgStream(data.ugStream);
        setClgName(data.clgName)})

},[id])


    const handleEducation=()=>{
        const educationdata ={
            sslcPercentage,sslcSchool,sslcYear,
            hscSchool,hscPercentage,hscYear,
            ugCgpa,ugStream,clgName
        }

        fetch("https://portfolio-generator-backend.onrender.com/api/user/education",{
            method:"PUT",
            headers:{
              "Content-Type": "application/json"
    
            }, 
            credentials:"include",
            body:JSON.stringify(educationdata)
          })
          .then(res=>res.json())
          .then(result=>{
            console.log(result)
            toast.success('Education Edited Successfully')
          })
          setTimeout(() => {
            navigate('/editpanel')
            window.location.reload()
            
          }, 1000);
    }
  return (
<div className="container mt-5">  
    <div className="row justify-content-center">  
        <div className="col-md-6">  
            <h2 className="text-center mb-4">Education Details</h2>  
           <h4 className='mt-3'>SSLC </h4>  
           <div className="card" > 
            
                <div className="card-body">  
                    <div className="form-group mt-2">  
                        <label htmlFor="sslcYear">SSLC Year</label>   
                        <input   
                            type="text"   
                            className="form-control"   
                            value={sslcYear}   
                            onChange={(e) => setSslcYear(e.target.value)}   
                            placeholder="Enter your SSLC year"   
                        />  
                    </div>  
                    
                    <div className="form-group mt-2">  
                        <label htmlFor="sslcSchool">SSLC School</label>  
                        <input   
                            type="text"   
                            className="form-control"  
                            value={sslcSchool}   
                            onChange={(e) => setSslcSchool(e.target.value)}   
                            placeholder="Enter your SSLC school"   
                        />  
                    </div>   

                    <div className="form-group mt-2">  
                        <label htmlFor="sslcPercentage">SSLC Percentage</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={sslcPercentage}   
                            onChange={(e) => setSslcPercentage(e.target.value)}   
                            placeholder="Enter your SSLC percentage"   
                        />  
                    </div>  
                    </div>  
                    </div>
                    <h4 className='mt-3'>HSC </h4> 
                    <div className="card ">
                    <div className="card-body">
                    <div className="form-group mt-2">  
                        <label htmlFor="hscYear">HSC Year</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={hscYear}   
                            onChange={(e) => setHscYear(e.target.value)}   
                            placeholder="Enter your HSC year"   
                        />  
                    </div>  

                    <div className="form-group mt-2">  
                        <label htmlFor="hscSchool">HSC School</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={hscSchool}   
                            onChange={(e) => setHscSchool(e.target.value)}   
                            placeholder="Enter your HSC school"   
                        />  
                    </div>  

                    <div className="form-group mt-2">  
                        <label htmlFor="hscPercentage">HSC Percentage</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={hscPercentage}   
                            onChange={(e) => setHscPercentage(e.target.value)}   
                            placeholder="Enter your HSC percentage"   
                        />  
                    </div>   
 </div></div>
 <h4 className='mt-3'>UG</h4> 

  <div className="card ">
    <div className="card-body">

  
                    <div className="form-group mt-2">  
                        <label htmlFor="ugStream">UG Stream</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={ugStream}   
                            onChange={(e) => setUgStream(e.target.value)}   
                            placeholder="Enter your UG stream"   
                        />  
                    </div>   

                    <div className="form-group mt-2">  
                        <label htmlFor="clgName">College Name</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={clgName}   
                            onChange={(e) => setClgName(e.target.value)}   
                            placeholder="Enter your college name"   
                        />  
                    </div>   

                    <div className="form-group mt-2">  
                        <label htmlFor="ugCgpa">UG CGPA</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={ugCgpa}   
                            onChange={(e) => setUgCgpa(e.target.value)}   
                            placeholder="Enter your UG CGPA"   
                        />  
                    </div>   

                    <div className='d-flex justify-content-center align-item-center mt-3'>   
             </div>
  </div>           
  <div className="mt-2 d-flex justify-content-center align-item-center">  <button   
                            type="button"   
                            className="btn btn-primary btn-block "   
                            onClick={handleEducation}  
                        >  
                            Save Education  
                        </button> </div>  
                   
            </div>  
        </div>  
    </div>  
</div>
  );
}

export default EditEducation;
