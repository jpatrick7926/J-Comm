import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './homepage/Homepage.jsx'
import Shop from './shopnow/Shop.jsx'
import ProductPage from './productPage/ProductPage.jsx'
import './main-style.scss'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectedProduct: {}
    }

    this.selectedProductHandler = this.selectedProductHandler.bind(this)
  }

  selectedProductHandler (product) {
    this.setState({
      selectedProduct: product
    })
  }

  render() {
    return (
      <Switch>
        <div className="main">
          <Route path="/shop">
            <Shop selectedProductHandler={this.selectedProductHandler}/>
          </Route>
          <Route exact path="/" >
            <Homepage />
          </Route>
          <Route path="/product" >
            <ProductPage productData={this.state.selectedProduct}/>
          </Route>

        </div>
      </Switch>
    )
  }
}

export default Main;
