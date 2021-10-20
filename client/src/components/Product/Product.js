import React from 'react';
import { Link } from 'react-router-dom';

const productContainerStyle = {
  minWidth: '200px',
  width: '20%',
  padding: '20px'
}

const imgContainerStyle = {
  // width: '100%',
}

const productInfoContainerStyle = {
  textAlign: 'center',
  width: '100%',
  fontFamily: 'Roboto'
}

const productNameStyle = {
  color: '#cca869',
  fontSize: '1rem',
  margin: '10px 0px'
}

const productPriceStyle = {
  fontFamily: 'Arial',
  color: '#666666',
  fontSize: '14px'
}

const Product = (props) => {
  return(
    <div className="product-container" style={productContainerStyle}>
      <Link to={`/product/${props.productId}`} style={{textDecoration:'none'}}>
        <div className="img-container" style={imgContainerStyle}>
          <img src={props.imageUrl} style={{height:"300px"}} alt="temporary alt text"/>
        </div>
        <div className="product-info-container" style={productInfoContainerStyle}>
          <div className="product-name" style={productNameStyle}>
            <b>{props.title}</b>
          </div>
          <div className="product-price" style={productPriceStyle}>
            ${props.price}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product;
