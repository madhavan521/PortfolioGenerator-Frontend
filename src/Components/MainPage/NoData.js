
import React from 'react';
import nodata from './InstructionAssest/NoData.jpg'

const NoData = () => {

const handleReload=()=>{
  window.location.reload()
}

  return (
    <div >
    <div className="row">
    <p>After Entering The Data Please Reload</p>
      <button className='btn btn-danger'onClick={handleReload} >Reload</button>
    </div>
      <img src={nodata} alt="" style={{width:"100%"}} />
    </div>
  );
}

export default NoData;
