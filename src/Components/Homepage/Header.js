import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="text-center py-5 ">
      <div className="container">
        <h1 className="display-4">Effortlessly Create Stunning Portfolios in Minutes!</h1>
        <p className="lead">Choose from 5 unique designs and customize your portfolio with ease.</p>
       <Link to='/mainpage'><button className="btn btn-primary btn-lg animate__animated animate__flipInY" >
          Get Started Now
        </button></Link> 
      </div>
    </header>
  );
};

export default Header;
