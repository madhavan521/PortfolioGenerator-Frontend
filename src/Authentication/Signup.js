import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const Signup = () => {  
    const [username, setUsername] = useState('');  
    const [fullname, setFullname] = useState('');  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  
    const [loading, setLoading] = useState(false);  
    const navigate = useNavigate();  

    const handleSignup = async () => {  
        setLoading(true);  
        const signupdata = { username, fullname, email, password };  

        try {  
            const response = await fetch('https://portfolio-generator-backend.onrender.com/api/auth/signup', {  
                method: "POST",  
                headers: {  
                    "Content-Type": "application/json"  
                },  
                credentials: 'include',  
                body: JSON.stringify(signupdata)  
            });  

            if (!response.ok) {  
                const errorData = await response.json();  
                throw new Error(errorData.message || 'Signup failed');  
            }  

            const result = await response.json();  
            toast.success("Account Created Successfully");  
            setTimeout(() => navigate('/login'), 1500);  
        } catch (error) {  
            toast.error("Signup failed: " + error.message);  
        } finally {  
            setLoading(false);  
        }  
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
