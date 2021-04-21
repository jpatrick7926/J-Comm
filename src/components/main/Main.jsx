import React from 'react';
import Hero from './hero/hero.jsx'
import About from './about/About.jsx'
import Featured from './featured/Featured.jsx'
import './main-style.scss'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render() {
    return (
      <div className="main">
        <Hero />
        <About />
        <Featured />
      </div>
    )
  }
}

export default Main;
