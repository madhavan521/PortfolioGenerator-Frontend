import React, { useContext } from 'react';
import cover from '.././DesignAssest/Project1.png'
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import MyPortfolio from './MyPortfolio';
import NoData from './NoData';
import { IntroductionContext } from '../../Context/IntroductionContext';

const Workspace = () => {

  const {introdata} =useContext(IntroductionContext)
  return (
    <div className="container mt-3">
      {
        introdata && introdata.fullname ? (
          <>
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-7 col-md-8 col-sm-10">
                <Fade direction='up'>
                  <div className="card shadow-lg my-4">
                    <div className="card-body">
                      <h4 className='text-center text-primary mb-2'>Preview and Edit Data</h4>
                      <p className="text-center text-muted">
                        View your data and make necessary modifications with ease.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-9 col-md-10 col-sm-12">
                <Fade direction='down'>
                  <div className="card shadow-lg">
                    <img src={cover} alt="Cover" height='180px' className="card-img-top rounded" />
                    <div className="card-body text-center">
                      <Link to='/editpanel'>
                        <button className='btn btn-primary'>
                          View and Edit
                        </button>
                      </Link>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <MyPortfolio />
          </>
        ) : (
          <NoData />
        )
      }
    </div>
 
  );
}

export default Workspace;
