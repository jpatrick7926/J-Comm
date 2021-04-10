import React from 'react';
import Hero from './hero/hero.jsx'
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
      </div>
    )
  }
}

export default Main;
