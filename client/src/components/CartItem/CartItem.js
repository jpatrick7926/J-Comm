import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = (props) => {

  const cartItemInfo = props.cartItemInfo

  return (
    <div className="cartitem">
      <div className='cartitem__left'>
        <img src={props.imageUrl} alt="temp stuff"/>
        <div className="left__buttons">
          <Link className="cartitem__name" to={`/product/60a9c1b2b1196c48141b8ac9`}>
            <p>Red Converse High Tops</p>
          </Link>
          <button className="cartitem__removebtn">Remove</button>
        </div>
      </div>
      <p className="cartitem__price">$45.00</p>
      <select className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p className="cartitem__total">$45.00</p>
    </div>
  );
}

export default CartItem;
