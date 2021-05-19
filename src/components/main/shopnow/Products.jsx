import React from 'react'
import Product from './ProductInGrid.jsx'

const productsStyle = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
}

class Products extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>{
        this.setState({
          products: json,
          isLoaded: true
        })
      })
  }

  render () {
    console.log(this.state.products, 'in render')
    if (!this.state.isLoaded) {
      return (
        <div className='products-container' style={productsStyle}>
          Loading...
        </div>
      )
    }

    if(this.state.isLoaded) {
      return (
        <div className='products-container' style={productsStyle}>
          {this.state.products.map (product => (
            <Product selectedProductHandler={this.props.selectedProductHandler} productObj={product} key={product.id} title={product.title} price={product.price} image={product.image}/>
          ))}
        </div>
      )
    }
  }
}

export default Products
