import React from 'react';
import Header from './Header';
import Features from './Features';
import Testimonial from './Testimonial';
import Working from './Working';
import Footer from './Footer';
import Instruction from '../MainPage/Instruction'

const Home = () => {
  return (
    <div>
      <Header/>
      <Working/>
      <Features/>
      <Instruction />
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default Home;
