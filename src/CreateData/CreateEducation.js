import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';

const CreateEducation = () => {
    const [sslcYear, setSslcYear] = useState('');  
    const [sslcSchool, setSslcSchool] = useState('');  
    const [sslcPercentage, setSslcPercentage] = useState('');  
    const [hscYear, setHscYear] = useState('');  
    const [hscSchool, setHscSchool] = useState('');  
    const [hscPercentage, setHscPercentage] = useState('');  
    const [ugStream, setUgStream] = useState('');  
    const [clgName, setClgName] = useState('');  
    const [ugCgpa, setUgCgpa] = useState('');  
    const [loading,setLoading]=useState(false)
const navigate = useNavigate()

    const handleEducation=()=>{
        if (!sslcYear || !sslcSchool || !sslcPercentage ||  
            !hscYear || !hscSchool || !hscPercentage ||  
            !ugStream || !clgName || !ugCgpa)
        {  
            toast.error("Please fill in all fields.");  
            return; 
        }
        const educationdata ={
            sslcPercentage,sslcSchool,sslcYear,
            hscSchool,hscPercentage,hscYear,
            ugCgpa,ugStream,clgName
        }

        fetch("https://portfolio-generator-backend.onrender.com/api/user/education",{
            method:"POST",
            headers:{
              "Content-Type": "application/json"
    
            }, 
            credentials:"include",
            body:JSON.stringify(educationdata)
          })
          .then(res=>res.json())
          .then(result=>{
            console.log(result)
            toast.success("Education Data Created Sucessfully")
            setLoading(true)
          })
          setTimeout(() => {
            navigate('/skill')
            
          }, 1000);
    }
  return (
<div className="container mt-5">  
    <div className="row justify-content-center">  
        <div className="col-md-8 col-lg-6">  
            <h2 className="text-center mb-4">Education Details</h2>  
            
            <h4 className='mt-4'>SSLC</h4>  
            <div className="card mb-4">   
                <div className="card-body">  
                    <div className="form-group">  
                        <label htmlFor="sslcYear">SSLC Year</label>   
                        <input   
                            type="text"   
                            className="form-control"   
                            value={sslcYear}   
                            onChange={(e) => setSslcYear(e.target.value)}   
                            required   
                            placeholder="Example : 2019"   
                        />  
                    </div>  
                    
                    <div className="form-group">  
                        <label htmlFor="sslcSchool">SSLC School</label>  
                        <input   
                            type="text"   
                            className="form-control"  
                            value={sslcSchool}   
                            onChange={(e) => setSslcSchool(e.target.value)}   
                            required   
                            placeholder="Enter your SSLC school"   
                        />  
                    </div>   

                    <div className="form-group">  
                        <label htmlFor="sslcPercentage">SSLC Percentage</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={sslcPercentage}   
                            onChange={(e) => setSslcPercentage(e.target.value)}   
                            required   
                            placeholder="Enter your SSLC percentage"   
                        />  
                    </div>  
                </div>  
            </div>  

            <h4 className='mt-4'>HSC</h4>   
            <div className="card mb-4">  
                <div className="card-body">  
                    <div className="form-group">  
                        <label htmlFor="hscYear">HSC Year</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={hscYear}   
                            onChange={(e) => setHscYear(e.target.value)}   
                            required   
                            placeholder="Example : 2021"   
                        />  
                    </div>  

                    <div className="form-group">  
                        <label htmlFor="hscSchool">HSC School</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={hscSchool}   
                            onChange={(e) => setHscSchool(e.target.value)}   
                            required   
                            placeholder="Enter your HSC school"   
                        />  
                    </div>  

                    <div className="form-group">  
                        <label htmlFor="hscPercentage">HSC Percentage</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={hscPercentage}   
                            onChange={(e) => setHscPercentage(e.target.value)}   
                            required   
                            placeholder="Enter your HSC percentage"   
                        />  
                    </div>   
                </div>  
            </div>  

            <h4 className='mt-4'>UG</h4>   
            <div className="card mb-4">  
                <div className="card-body">  
                    <div className="form-group">  
                        <label htmlFor="ugStream">UG Stream</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={ugStream}   
                            onChange={(e) => setUgStream(e.target.value)}   
                            required   
                            placeholder="Enter your UG stream"   
                        /> 
                        <p>*** Example: B.E Computer Science 2021-2015 *** 
                        <br />      --Add Like Above Format</p>
                    </div>   

                    <div className="form-group">  
                        <label htmlFor="clgName">College Name</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={clgName}   
                            onChange={(e) => setClgName(e.target.value)}   
                            required   
                            placeholder="Enter your college name"   
                        />  
                    </div>   

                    <div className="form-group">  
                        <label htmlFor="ugCgpa">UG CGPA</label>  
                        <input   
                            type="text"   
                            className="form-control"   
                            value={ugCgpa}   
                            onChange={(e) => setUgCgpa(e.target.value)}   
                            required   
                            placeholder="Enter your UG CGPA"   
                        />  
                    </div>   
                </div>  
            </div>  

            <div className="mt-3 d-flex justify-content-center">  
                <button   
                    type="button"   
                    className="btn btn-primary "   
                    onClick={handleEducation}  
                >  
                    Submit Education Details  
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
</div>
  );
}

export default CreateEducation;
