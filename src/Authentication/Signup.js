import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const Signup = () => {
    const [username,setUsername] = useState();
    const [fullname,setFullname] = useState();
    const [email,setEmail]=useState();
    const [password ,setPassword] = useState();
    const navigate =useNavigate()
   const handleSignup = () => {  
        const signupdata = {  
            username: username,  
            fullname: fullname,  
            email: email,  
            password: password,  
        };  

        fetch('https://portfolio-generator-backend.onrender.com/api/auth/signup', {  
            method: "POST",  
            headers: {  
                "Content-Type": "application/json"  
            },  
            credentials: 'include',  
            body: JSON.stringify(signupdata)  
        })  
        .then(res => {  
            if (!res.ok) {  
                throw new Error('Signup failed');  
            }  
            return res.json();  
        })  
        .then(result => {  
            console.log(result);  
            toast.success("Account Created Successfully");  
        })  
        .catch(error => {  
            console.error(error);  
            toast.error("Signup failed: " + error.message);  
        });  

        setTimeout(() => {  
            navigate('/login');  
        }, 1500);  
    }; 
    

  return (
    <div className="container mt-5">  
    <div className="row justify-content-center">  
        <div className="col-md-6">  
            <h2 className="text-center mb-4 text-info">Create an Account</h2>  
            <div className="card shadow-lg">  
                <div className="card-body p-4">  
                    <form>  
                        <div className="form-group">  
                            <label htmlFor="username" className="font-weight-bold">Username</label>  
                            <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" required />  
                        </div>  
                        <div className="form-group">  
                            <label htmlFor="email" className="font-weight-bold">Email</label>  
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />  
                        </div>  
                        <div className="form-group">  
                            <label htmlFor="fullname" className="font-weight-bold">Full Name</label>  
                            <input type="text" className="form-control" id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Enter your full name" required />  
                        </div>  
                        <div className="form-group">  
                            <label htmlFor="password" className="font-weight-bold">Password</label>  
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />  
                        </div>  
                        <div className='d-flex justify-content-center mt-4'>   
                            <button type="button" className="btn btn-success btn-block rounded-pill" onClick={handleSignup}>Sign Up</button>  
                        </div>  
                        <h6 className='text-center mt-3'>  
                            <Link to='/login' className="text-info">Already have an account?</Link>  
                        </h6>   
                    </form>  
                </div>  
            </div>  
        </div>  
    </div>  
</div>

  );
}

export default Signup;
