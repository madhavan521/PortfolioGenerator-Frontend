import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { BallTriangle } from 'react-loader-spinner';

const Login = () => {
    const [username,setUsername] = useState();
    const [password ,setPassword] = useState();
    const [loading,setLoading]=useState(false)
    const navigate =useNavigate()
    const handleLogin=()=>{
        const Logindata ={
            username:username,
            password:password,
        }
       fetch('https://portfolio-generator-backend.onrender.com/api/auth/login',
        {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            credentials:'include', 
            body:JSON.stringify(Logindata)

        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            setLoading(true)

            toast.success("Login Successfully");  

        })
        setTimeout(() => {
            navigate('/')
            window.location.reload()
            
        }, 1000);

    }
    

  return (
    <div className="container mt-5">  
    <div className="row justify-content-center">  
        <div className="col-md-6">  
            <h2 className="text-center mb-4 text-info">Login</h2>  
            <div className="card shadow">  
                <div className="card-body">  
                    <form>  
                        <div className="form-group">  
                            <label htmlFor="username" className="font-weight-bold">Username</label>  
                            <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" required />  
                        </div>  
                        <div className="form-group">  
                            <label htmlFor="password" className="font-weight-bold">Password</label>  
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />  
                        </div>   
                        <div className='d-flex justify-content-center align-item-center mt-3'>   
                            <button type="button" className="btn btn-info btn-block" onClick={handleLogin}>Login</button>  
                        </div>   
                        <h6 className='text-center mt-3'>  
                            <Link to='/signup' className="text-info">Create an account</Link>  
                        </h6>   
                   </form>  
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
</div>
  );
}

export default Login;
