import React from 'react'
import './hero-style.scss';
import heroImage from "../../../images/hero-image.jpg";
import heroImageRes from "../../../images/mada.jpg";
import '../../../fonts.scss';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <h2 className="hero-content-h2">Find what you need with the touch of a button.</h2>
        <p>Finally, enjoy convenience&nbsp;without compromise.</p>
        <p className="btn"><a href="">Shop Now</a></p>
      </div>
      <div className="hero-image">
        <img className="hero-image-bg" src={heroImage} alt="person wearing a white dress shirt and watch" />
        <img className="hidden-hero-image" src={heroImageRes} />
      </div>
    </div>
  )
}

export default Hero;
