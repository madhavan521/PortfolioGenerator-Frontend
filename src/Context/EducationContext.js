import React, { createContext ,useEffect ,useState} from 'react';
const EducationContext = createContext()

const EducationContextProvider = ({children}) => {
    const [educationdata ,setEducationdata] = useState([])
    useEffect(()=>{
      fetch("https://portfolio-generator-backend.onrender.com/api/user/Education",
       {
           method:"GET",
           headers:{
               "Content-Type": 'application/json'
           },
           credentials:"include"
       })
       .then(res=>res.json())
       .then(result=>{
           setEducationdata(result);
           console.log(result)
       }) 
   },[])
  return (
    <div>
    <EducationContext.Provider value={{educationdata}}>
        {children}
    </EducationContext.Provider>
    
      
    </div>
  );
}

export { EducationContextProvider , EducationContext};
