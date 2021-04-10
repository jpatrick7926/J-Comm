import React from 'react';
import ReactDom from 'react-dom';
import './index-style.scss';
import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import Footer from './components/footer/Footer.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
 }

ReactDom.render(<App />, document.getElementById('app'));
