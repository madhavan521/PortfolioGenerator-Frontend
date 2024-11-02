import React, { createContext ,useEffect,useState } from 'react';
const IntroductionContext = createContext()

const IntroductionContextProvider = ({children}) => {
    const [introdata ,setIntrodata] = useState([])
    useEffect(()=>{
      fetch("https://portfolio-generator-backend.onrender.com/api/user/intro",
       {
           method:"GET",
           headers:{
               "Content-Type": 'application/json'
           },
           credentials:"include"
       })
       .then(res=>res.json())
       .then(result=>{
           setIntrodata(result);
           console.log(result)
       }) 
   },[])
  return (
    <div>
      <IntroductionContext.Provider value={{introdata}}>
        {children}
      </IntroductionContext.Provider>
    </div>
  );
}

export{ IntroductionContext ,IntroductionContextProvider};
