import React from 'react';
import ReactDom from 'react-dom';
import './styles/app.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div className="container">
        Hello! It works!
      </div>
    )
  }
 }

ReactDom.render(<App />, document.getElementById('app'));
