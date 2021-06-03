import React from 'react';
import Hero from './hero/Hero.js';
import Featured from './featured/Featured.js';
import About from './about/About.js';
import Button from '../../components/Button/Button.js';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Featured />
      {/* <Button text="SHOP NOW"/> */}
    </div>
  )
}

export default HomePage;
