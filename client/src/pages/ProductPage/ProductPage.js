import './productPage.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Button from '../../components/Button/Button.js'

// Actions
import { getProductDetailsActions } from '../../redux/actions/productActions';
import { addToCartAction } from '../../redux/actions/cartActions'

const ProductPage = ({match, history}) => {
  const dispatch = useDispatch();

  const [ qty, setQty ] = useState(1)
  const { product, loading, error } = useSelector(state => state.getProductDetails);

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetailsActions(match.params.id))
    }
  }, [dispatch, match, product])

  const addToCartHandler = () => {
    dispatch(addToCartAction(product._id, qty))
    // history.push('/cart')
  }

  return (
    <div className="product-page-wrapper">
      {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
        <>
          <div className="product-page-container">
            <div className="product-page-image-container">
              <img src={product.imageUrl} style={{width:"70%"}} alt={product.title}/>
            </div>
            <div className="product-page-product-description-container">
              <div className="product-page-title">
                <b>
                  {product.title}
                </b>
              </div>
              <div className="product-page-price">
                <b>
                  From ${product.price}
                  <span style={{color:'grey', textDecoration:'line-through', marginLeft:'20px'}}>
                    ${Number(product.price) * 2}
                  </span>
                </b>
              </div>
              <div className="product-page-description">
                <p>
                  {product.description}
                </p>
              </div>
              <div className="add-to-cart-cta">
                <select value={qty} onChange={(event) => {setQty(event.target.value)}}>
                  {
                    [...Array(product.countInStock).keys()].map(index => (
                      <option key={index + 1} value={index + 1}>{index + 1}</option>
                      ))
                  }

                </select>
                <Button text="Add To Cart" click={addToCartHandler} path='cart'/>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductPage;
