import React from 'react'
import './shop.scss'
import Subheader from '../subheader/Subheader.jsx'
import Spacer from '../../tools/Spacer.jsx'
import Products from './Products.jsx'

// This page is not finished yet....

class Shop extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      productPicked: false,
      productPageId: 0
    }
  }

  render () {
    return (
      <div className="shop-container">
        <div className="shop-copytext">
          <Subheader text="Shop"/>
          <p>
            You want options? We’ve got options. From the luxe Ratio Eight and its conical physique to the no-nonsense Six, there’s a Ratio that matches your taste and temperament. Slow drinker? Add a thermal carafe. You want the form of the Six with the carafe of the Eight? Do it. Here’s everything you could ever want.
          </p>
        <Spacer height="100px" />
        <Products selectedProductHandler={this.props.selectedProductHandler}/>
        </div>
      </div>
    )
  }
}

export default Shop;
