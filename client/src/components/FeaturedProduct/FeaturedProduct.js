import './FeaturedProduct.css';
import { Link } from 'react-router-dom';

const FeaturedProduct = ({ title, price, imageUrl, productId }) => {
  return (
    <Link to={`/product/${productId}`} >
      <img className="featured_img" src={imageUrl} alt={title}/>
      <div className="featured-description">
        <div className="featured-name">
          <b>{title}</b>
        </div>
        <div className="featured-price">
          <p>Starting at ${price}</p>
        </div>
      </div>
    </Link>
  );
}

export default FeaturedProduct;
