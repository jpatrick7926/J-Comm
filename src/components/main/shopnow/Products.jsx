import React from 'react'

const productsStyle = {
  width: '100%',
  backgroundColor: 'pink',
  display: 'flex',
  flexWrap: 'wrap'
}

const dummy = () => {
  return(
    <div style={{minWidth:'200px', textAlign: 'center'}}>
      Product
    </div>
  )
}

const Products = () => {
  return (
    <div className='products-container' style={productsStyle}>
      {dummy()}
      {dummy()}
      {dummy()}
      {dummy()}
      {dummy()}
      {dummy()}
      {dummy()}
      {dummy()}
    </div>
  )
}

export default Products
