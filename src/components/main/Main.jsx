import React from 'react';
import Hero from './hero/hero.jsx'
import About from './about/About.jsx'
import Featured from './featured/Featured.jsx'
import Shop from './shopnow/Shop.jsx'
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
        {/* Iterates through any array passed in from props */}
        {this.props.content.map((section) => (
          <div className="main-content-section">{section}</div>
        ))}
      </div>
    )
  }
}

export default Main;
