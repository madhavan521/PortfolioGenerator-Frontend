import React, { useContext } from 'react'
import { IntroductionContext } from '../../Context/IntroductionContext'
import { Link } from 'react-router-dom'

const Design2Footer = () => {
    const {introdata}=useContext(IntroductionContext)
  return (
    <div className="conatiner mt-3">
  
      <div className="row ps-3 ">
      <div className="col mt-2">
      <div className="col-auto ms-2">
        <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/apple-phone.png" alt="apple-phone"/>               </div>
        <div className="col">
            <span>
                <p>
                    <label htmlFor="">phone </label>
                    <h5 className="text-dark" >{introdata.phoneNo}</h5>
                </p>
            </span>
        </div>
      </div>
        <div className="col mt-2"><div className="col-auto ms-2">
        <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/mail.png" alt="mail"/>  
              </div>
        <div className="col">
            <span>
                <p>
                    <label htmlFor="">E-mail: </label>
                    <h5 className="text-dark" >
                        {introdata.email}
                    </h5>
                </p>
            </span>
        </div></div>
        <div className="col mt-2">  <div className="col-auto ms-2">
        <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/location.png" alt="location"/>              </div>
        <div className="col">
            <span>
                <p>
                    <label htmlFor="">Location </label>
                    <h5 className="text-dark" >{introdata.location}</h5>
                </p>
            </span>
        </div></div>
        <div className="col mt-2">  <div className="col-auto ms-2">
        <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/date-span.png" alt="date-span"/>            </div>
        <div className="col">
            <span>
                <p>
                    <label htmlFor="">Date Of Birth</label>
                    <h5 className="text-dark" >{introdata.dob}</h5>
                </p>
            </span>
        </div>
    </div>
    </div>
    
</div> 
    
          
  )
}

export default Design2Footer