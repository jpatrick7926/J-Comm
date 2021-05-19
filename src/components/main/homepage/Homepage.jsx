import React from 'react'
import Hero from './hero/hero.jsx'
import Featured from './featured/featured.jsx'
import About from './about/about.jsx'
import Button from '../../button/Button.jsx'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Featured />
      <Button text="SHOP NOW"/>
    </div>
  )
}

export default Homepage
