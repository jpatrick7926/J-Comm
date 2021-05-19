import React from 'react'
import './product-page-style.scss'
import Button from '../../button/Button.jsx'

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    console.log(this.props.productData)
    return (
      <div className="product-page-wrapper">
        <div className="product-page-container">
          <div className="product-page-image-container">
            <img src={this.props.productData.image} style={{width:"70%"}}/>
          </div>
          <div className="product-page-product-description-container">
            <div className="product-page-title">
              <b>
                {this.props.productData.title}
              </b>
            </div>
            <div className="product-page-price">
              <b>
                From ${this.props.productData.price}
                <span style={{color:'grey', textDecoration:'line-through', marginLeft:'20px'}}>
                  ${this.props.productData.price * 2}
                </span>
              </b>
            </div>
            <div className="product-page-description">
              <p>
                {this.props.productData.description}
              </p>
            </div>
            <div className="add-to-cart-cta">
              <Button text="Add To Cart" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductPage
