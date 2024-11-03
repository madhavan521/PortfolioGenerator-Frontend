import React, { createContext, useEffect, useState } from 'react';  

const IntroductionContext = createContext();  

const IntroductionContextProvider = ({ children }) => {  
    const [introdata, setIntrodata] = useState([]);  

    useEffect(() => {  
        fetch("https://portfolio-generator-backend.onrender.com/api/user/intro", {  
            method: "GET",  
            headers: {  
                "Content-Type": 'application/json'  
            },  
            credentials: "include"  
        })  
        .then(res => {  
            if (!res.ok) {  
                throw new Error(`HTTP error! status: ${res.status}`); // Check if response is okay  
            }  
            return res.json(); // Return the parsed JSON  
        })  
        .then(result => {  
            setIntrodata(result);  
            console.log(result); // Log the result  
        })  
        .catch(error => {  
            console.error('Error fetching intro data:', error); // Error handling for fetch and parse errors  
        });  
    }, []);  
    
    return (  
        <IntroductionContext.Provider value={{ introdata }}>  
            {children}  
        </IntroductionContext.Provider>  
    );  
}  

export { IntroductionContext, IntroductionContextProvider };
