import React, { createContext ,useEffect ,useState} from 'react';
const SkillContext = createContext()

const SkillContextProvider = ({children}) => {
    const [skilldata ,setSkilldata] = useState([])
    useEffect(()=>{
      fetch("https://portfolio-generator-backend.onrender.com/api/user/Skill",
       {
           method:"GET",
           headers:{
               "Content-Type": 'application/json'
           },
           credentials:"include"
       })
       .then(res=>res.json())
       .then(result=>{
           setSkilldata(result);
           console.log(result)
       }) 
   },[])
  return (
    <div>
    <SkillContext.Provider value={{skilldata}}>
        {children}
    </SkillContext.Provider>
    
      
    </div>
  );
}

export { SkillContextProvider , SkillContext};
