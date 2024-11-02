import React, { createContext, useEffect, useState } from 'react';
const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const [data ,setData] = useState('')
    console.log(data)
   
    
    useEffect(()=>{
       fetch("https://portfolio-generator-backend.onrender.com/api/auth/me",
        {
            method:"GET",
            headers:{
                "Content-Type": 'application/json'
            },
            credentials:"include"
        })
        .then(res=>res.json())
        .then(result=>{
            setData(result);
            console.log(result)
        }) 
    },[])
    
  return (
    <div>
      <UserContext.Provider value={{data,setData}}>
        {children}
      </UserContext.Provider>
    </div>
  );
}


export {UserContext ,UserContextProvider}
