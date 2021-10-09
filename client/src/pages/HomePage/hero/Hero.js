import './hero.css';
import heroImage from "./images/hero-image.jpg";
import heroImageRes from "./images/mada.jpg";
import Button from "../../../components/Button/Button.js";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <h2 className="hero-content-h2">Find what you need with the touch of a button.</h2>
        <p>Finally, enjoy convenience&nbsp;without compromise.</p>
        <Button text="SHOP NOW" path='shop'/>
      </div>
      <div className="hero-image">
        <img className="hero-image-bg" src={heroImage} alt="person wearing a white dress shirt and watch" />
        <img className="hidden-hero-image" src={heroImageRes} alt="pretty lady" />
      </div>
    </div>
  )
}

export default Hero;
