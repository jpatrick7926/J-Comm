import './ShopPage.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import SubHeader from '../../components/SubHeader/SubHeader.js';
import Spacer from '../../components/tools/Spacer.js';
import Product from '../../components/Product/Product.js'

// Actions
import { getProductsActions } from '../../redux/actions/productActions';

// This page is not finished yet....

const ShopPage = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const {products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(getProductsActions());
  }, [dispatch]);

  return (
    <div className="shop-container">
      <div className="shop-copytext">
        <SubHeader text="Shop"/>
        <p>You want options? We’ve got options. From luxury jewelry, to high end monitors, and even men's and women's apparel. If you are looking for that strange combination of a purchase, then this website is exactly the place for you!</p>
        <Spacer height="100px" />
        <div className='products-container'>
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
