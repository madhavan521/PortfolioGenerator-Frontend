
import React from 'react';
import nodata from './InstructionAssest/NoData.jpg'


const NoData = () => {


const handleReload=()=>{
  window.location.reload()
}

  return (
    <div >
    <div className="row d-flex align-item-center text-center justify-content-center">
    <p className="text-center h5">After Entering The Data Please Reload</p>
      <button className='btn btn-danger d-flex align-item-center text-center justify-content-center'onClick={handleReload} style={{width:"150px"}} >Reload</button>
    </div>
      <img src={nodata} alt="" style={{width:"100%"}} />
    </div>
  );
}

export default NoData;
