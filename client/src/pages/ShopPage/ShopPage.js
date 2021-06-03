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
        <p>You want options? We’ve got options. From the luxe Ratio Eight and its conical physique to the no-nonsense Six, there’s a Ratio that matches your taste and temperament. Slow drinker? Add a thermal carafe. You want the form of the Six with the carafe of the Eight? Do it. Here’s everything you could ever want.</p>
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
