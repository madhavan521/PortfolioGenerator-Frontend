
import React from 'react';
import nodata from './InstructionAssest/NoData.jpg'

const NoData = () => {

const handleReload=()=>{
  window.location.reload()
}

  return (
    <div >
    <div className="row">
    <div className="d-flex justify-content-center align-item-center my-3">
    <p>After Entering The Data Please Reload</p>
      <button className='btn btn-danger mt-2' onClick={handleReload} >Reload</button>
    </div></div>
      <img src={nodata} alt="" style={{width:"100%"}} />
    </div>
  );
}

export default NoData;
