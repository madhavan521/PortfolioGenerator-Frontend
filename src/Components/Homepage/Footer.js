import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="text-center py-4 bg-dark text-white">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Portfolio Generator. All Rights Reserved.</p>
        <p>
         <a href="#!" className="text-white me-1">Privacy Policy</a>   |  
         <Link to='/terms'> <a href="#!" className="text-white ms-1"> Terms of Service</a></Link> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
