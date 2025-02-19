import React from 'react';
import './Homepage.css'
import Hero from '../Hero/Hero';
import WeLikeThis from '../WeLikeThis/WeLikeThis';

const Homepage: React.FC = () => {
  return <div className='homepage-container'>
    <Hero />
    <WeLikeThis />
    </div>;
};

export default Homepage;

