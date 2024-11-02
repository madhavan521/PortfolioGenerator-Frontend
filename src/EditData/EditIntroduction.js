import React, { useEffect, useState } from 'react';  
import { useNavigate, useParams } from 'react-router-dom';  
import toast from 'react-hot-toast'

const EditIntroduction = () => {  
    const [fullname, setFullname] = useState('');  
    const [role, setRole] = useState('');  
    const [resume, setResume] = useState('');  
    const [github, setGithub] = useState('');  
    const [linkedin, setLinkedin] = useState('');  
    const [twitter, setTwitter] = useState('');  
    const [profileImg, setProfileImg] = useState('');  
    const [phoneNo,setPhoneNo]=useState()
    const [email,setEmail]=useState()
    const [location,setLocation]=useState()
    const [dob,setDob]=useState()
    const navigate = useNavigate();  
    const {id}=useParams()
    console.log(id)

    useEffect(() => {  
        fetch(`https://portfolio-generator-backend.onrender.com/api/user/intro/${id}`, {  
          method: "PUT",  
            headers: {  
                "Content-Type": "application/json"  
            },  
            credentials: "include"  
        })  
        .then(res => res.json())  
        .then(data => {  
            setFullname(data.fullname || '');  
            setRole(data.role || '');  
            setResume(data.resume || '');  
            setGithub(data.github || '');  
            setLinkedin(data.linkedin || '');  
            setTwitter(data.twitter || '');  
            setProfileImg(data.profileImg || ''); 
            setPhoneNo(data.phoneNo || '') ;
            setEmail(data.email || '');
            setLocation(data.location || '')
            setDob(data.dob || '')
        })  
        .catch(err => {  
            console.error('Fetch error:', err);  
        });  
    }, [id]);  

    const handleIntroduction = (e) => {  
        e.preventDefault();  

        const Introductiondata = {  
            fullname,  
            role,  
            resume,  
            github,  
            linkedin,  
            twitter,  
            profileImg ,
            phoneNo,
            email,
            dob,
            location
        };  

        fetch(`https://portfolio-generator-backend.onrender.com/api/user/intro/${id}`, {  
            method: "PUT",  
            headers: {  
                "Content-Type": "application/json"  
            },  
            credentials: "include",  
            body: JSON.stringify(Introductiondata)  
        })  
        .then(res => res.json())  
        .then(result => {  
            console.log(result); 
            toast.success("Introduction Successfully Edited")
 
        })  
        .catch(err => {  
            console.error('Post error:', err);  
        });  
        setTimeout(() => {
            navigate('/editpanel')
            window.location.reload()
            
        }, 1500);
    };  

    return (  
        <div className="container mt-5">  
        <div className="row justify-content-center">  
            <div className="col-md-8 col-lg-6">  
                <h2 className="text-center mb-4 text-info">Introduction</h2>  
                <div className="card shadow-lg">  
                    <div className="card-body">  
                        <form>  
                            <div className="form-group">  
                                <label htmlFor="fullname">Full Name</label>   
                                <input type="text" className="form-control" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Enter your full name" required />  
                            </div>  
    
                            <div className="form-group mt-2">  
                                <label htmlFor="role">Role</label>  
                                <input type="text" className="form-control" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Enter your role" required />  
                            </div>    
    
                            <div className="form-group">  
                            <label htmlFor="resume">Resume</label>  
                            <input className="form-control" value={resume} onChange={(e) => setResume(e.target.value)} placeholder="Enter your resume" rows="3" required />  
                        <p>( ***Add Resume Pdf Link here***)</p> </div>  

                        <div className="form-group">  
                            <label htmlFor="profileImage">Profile Image</label>   
                            <input type="text" className="form-control" value={profileImg} onChange={(e) => setProfileImg(e.target.value)} placeholder="Profile Image link" required />  
                        <p>***Please Enter The Google Drive Link Of Your Profile Image***
                        <br />    ( Uplaod the image in google drive and paste the link here )</p>
                        </div>  

                        <div className="form-group">  
                            <label htmlFor="github">GitHub</label>  
                            <input type="text" className="form-control" value={github} onChange={(e) => setGithub(e.target.value)} placeholder="Enter your GitHub link" required />  
                            <p>( ***Add Your Github  Link here***)</p>  
</div>    

                        <div className="form-group">  
                            <label htmlFor="linkedin">LinkedIn</label>  
                            <input type="text" className="form-control" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="Enter your LinkedIn link" required />  
                            <p>( ***Add  Your LinkedIn Profile Link here***)</p> </div>  

                        <div className="form-group">  
                            <label htmlFor="twitter">Twitter</label>  
                            <input type="text" className="form-control" value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="Enter your Twitter link" required />  
                            <p>( ***Add Yout Twitter Account Link here***)</p> </div>   
    
                            <div className="form-group">  
                                <label htmlFor="phoneNo">Phone No</label>  
                                <input type="tel" className="form-control" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} placeholder="Enter your phone number" required />  
                            </div>   
    
                            <div className="form-group">  
                                <label htmlFor="email">Email</label>  
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />  
                            </div>   
    
                            <div className="form-group">  
                                <label htmlFor="location">Location</label>  
                                <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter your location" required />  
                            </div>   
    
                            <div className="form-group">  
                                <label htmlFor="dob">Date of Birth</label>  
                                <input type="date" className="form-control" value={dob} onChange={(e) => setDob(e.target.value)} required />  
                            </div>   
    
                            <div className='d-flex justify-content-center align-items-center mt-4'>   
                                <button type="button" className="btn btn-primary  btn-block" onClick={handleIntroduction}>Save Introduction</button>  
                            </div>  
                        </form>  
                    </div>  
                </div>  
            </div>  
        </div>  
    </div> 
    );  
}  

export default EditIntroduction;