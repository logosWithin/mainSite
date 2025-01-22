import React from 'react';
import Header from '../Header/Header';
import './App.css'
import Hero from '../Hero/Hero';
import WeLikeThis from '../WeLikeThis/WeLikeThis';
import Footer from '../Footer/Footer';

const App: React.FC = () => {
  return <div className='app-container'>
    <Header />
    <Hero />
    <WeLikeThis />
    <Footer />
    </div>;
};

export default App;

