import React, { Profiler, useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Navbar = () => {
    const {data}=useContext(UserContext)
    const navigate =useNavigate()
    console.log(data.fullname)
    const handleLogout =()=>{
        fetch("https://portfolio-generator-backend.onrender.com/api/auth/logout",{
            method:"POST",
         headers:{
            "Content-Type": "application/json"
         },
         credentials:"include"
        })
        .then(res=>{
            console.log("Logout Successfully")
            toast.success("Logout Successfully")
        })
 setTimeout(() => {
    window.location.reload()
    navigate('/')
 }, 500);
    }
  return (
<div className="container-fluid  ">
    <div className="row">
        <div className="col-9">
            <Link  to='/' className='text-decoration-none'><h2 className='text-warning h1 my-4'>𝕻𝖔𝖗𝖙𝖋𝖔𝖑𝖎𝖔 𝕲𝖊𝖓𝖊𝖗𝖆𝖙𝖔𝖗</h2></Link>
        </div>
        <div className="col-3">
        <div className='d-flex justify-content-end align-item-end my-4'>
        {
           data.fullname === undefined ? 
            
           
          <Link to='/login'> <button className='btn btn-info ' style={{borderRadius:"10px"}}>Login</button></Link>:
            <button className='btn btn-info  ' style={{borderRadius:"10px"}} onClick={handleLogout}>Logout</button>
            
        }
            </div>
        </div>
    </div>
   </div>
  );
}

export default Navbar;
