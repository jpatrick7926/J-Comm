import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index-style.scss';
import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import Footer from './components/footer/Footer.jsx'
// import Hero from './components/main/hero/hero.jsx'
// import About from './components/main/about/About.jsx'
// import Featured from './components/main/featured/Featured.jsx'
// import Shop from './components/main/shopnow/Shop.jsx'

// Arrays that hold the components in order of which they're supposed to be rendered

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }

    // this.switchToShop = this.switchToShop.bind(this)
    // this.switchToHome = this.switchToHome.bind(this)
  }

  // // Handler function to switch Main component to the shop now page
  // switchToShop () {
  //   this.setState({
  //     mainContent: shopPage
  //   })
  // }
  //
  // // Handler function to switch Main component to the homepage
  // switchToHome () {
  //   this.setState ({
  //     mainContent: homePage
  //   })
  // }


  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    )
  }
 }

ReactDom.render(<App />, document.getElementById('app'));
