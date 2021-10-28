import './AboutPage.css'

// Components
import SubHeader from '../../components/SubHeader/SubHeader'
import About from '../HomePage/about/About'

const AboutPage = () => {

  return (
    <div className="about-page-container">
      <div className="about-page-header-text">
        <SubHeader text="About Us"/>
        <p>The makers of J-COMM, Joshua Castillo and Juan Marin, are two hard working developers. Fascinated by the world of computer programming, these two are willing to go the extra measure to make your team stronger.</p>
      </div>
      <div className="about-container">
        <div className="col">
          <img src={"https://images.unsplash.com/photo-1577641785866-d40384a52ed5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="temporary alt text"/>
          <h3>
            Culture
          </h3>
          <p>
            The makers of J-COMM, Joshua Castillo and Juan Marin, are two hard working developers. Fascinated by the world of computer programming, these two are willing to go the extra measure to make your team stronger.
          </p>
        </div>
        <div className="col">
          <img src={"https://images.unsplash.com/photo-1585914622712-37ac29257b9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="temporary alt text"/>
          <h3>
            Tech Stack
          </h3>
          <p>
            J-COMM was made using the MERN stack. The front-end is built on React and Redux for state management. We also access "fakestoreapi.com" for the product and product information.
          </p>
        </div>
        <div className="col">
          <img src={"https://images.unsplash.com/photo-1614241819294-c0fe1b806943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="temporary alt text"/>
          <h3>
            Culture
          </h3>
          <p>
          The makers of J-COMM, Joshua Castillo and Juan Marin, are two hard working developers. Fascinated by the world of computer programming, these two are willing to go the extra measure to make your team stronger.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
