import './About.css';
// import Button from "../../../components/Button/Button.js";

const About = () => {
  return (
    <div className="grid-wrapper">
      <div className="subheader-container">
        <h2>
          The best part of your day just got better.
        </h2>
      </div>
      <div className="about-container">
        <div className="col">
          <img src={"https://images.unsplash.com/photo-1577641785866-d40384a52ed5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="temporary alt text"/>
          <h3>
            Subheader
          </h3>
          <p>
            Making coffee at home or office shouldn’t feel like a compromise. We’ve engineered a pour over style system with the precision of high-end espresso machines. You’ll taste the difference.
          </p>
        </div>
        <div className="col">
          <img src={"https://images.unsplash.com/photo-1585914622712-37ac29257b9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="temporary alt text"/>
          <h3>
            Subheader
          </h3>
          <p>
            Making coffee at home or office shouldn’t feel like a compromise. We’ve engineered a pour over style system with the precision of high-end espresso machines. You’ll taste the difference.
          </p>
        </div>
        <div className="col">
          <img src={"https://images.unsplash.com/photo-1614241819294-c0fe1b806943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="temporary alt text"/>
          <h3>
            Subheader
          </h3>
          <p>
            Making coffee at home or office shouldn’t feel like a compromise. We’ve engineered a pour over style system with the precision of high-end espresso machines. You’ll taste the difference.
          </p>
        </div>
      </div>
      {/* <Button /> */}
    </div>
  );
}

export default About;
