import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className='cartitem__left'>
        <img src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80" alt="temp stuff"/>
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
