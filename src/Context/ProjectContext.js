import React, { createContext ,useEffect ,useState} from 'react';
const ProjectContext = createContext()

const ProjectContextProvider = ({children}) => {
    const [projectdata ,setProjectdata] = useState([])
    useEffect(()=>{
      fetch("https://portfolio-generator-backend.onrender.com/api/user/project",
       {
           method:"GET",
           headers:{
               "Content-Type": 'application/json'
           },
           credentials:"include"
       })
       .then(res=>res.json())
       .then(result=>{
           setProjectdata(result);
           console.log(result)
       }) 
   },[])
  return (
    <div>
    <ProjectContext.Provider value={{projectdata}}>
        {children}
    </ProjectContext.Provider>
    
      
    </div>
  );
}

export { ProjectContextProvider , ProjectContext};
