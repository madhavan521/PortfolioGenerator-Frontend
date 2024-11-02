import React, { createContext ,useEffect ,useState} from 'react';
const AboutContext = createContext()

const AboutContextProvider = ({children}) => {
    const [aboutdata ,setAboutdata] = useState()
    console.log(aboutdata)
    useEffect(()=>{
      fetch("https://portfolio-generator-backend.onrender.com/api/user/aboutme",
       {
           method:"GET",
           headers:{
               "Content-Type": 'application/json'
           },
           credentials:"include"
       })
       .then(res=>res.json())
       .then(result=>{
           setAboutdata(result);
           console.log(result)
       }) 
   },[])
  return (
    <div>
    <AboutContext.Provider value={{aboutdata}}>
        {children}
    </AboutContext.Provider>
    
      
    </div>
  );
}

export { AboutContextProvider , AboutContext};
