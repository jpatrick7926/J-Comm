import './featured.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import FeaturedProduct from '../../../components/FeaturedProduct/FeaturedProduct';

// Actions
import { getProductsActions } from '../../../redux/actions/productActions';

const Featured = () => {

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const {products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(getProductsActions());
  }, [dispatch]);

  return (
    <div className="grid-wrapper">
      <div className="subheader-container">
        <h2 style={{fontSize: "2.375rem"}}>
          Featured Items
        </h2>
      </div>
      <div className="featured-content-container">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.slice(14,17).map((product) => (
            <div className="featured__col">
              <FeaturedProduct
                key={product._id}
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
              />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Featured
