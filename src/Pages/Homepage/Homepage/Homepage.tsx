import React from 'react';
import './Homepage.css'
import Hero from '../../../components/Hero/Hero';
import WeLikeThis from '../../../components/WeLikeThis/WeLikeThis';


const Homepage: React.FC = () => {
  return <div className='homepage-container'>
    <Hero />
    <WeLikeThis />
    </div>;
};

export default Homepage;

