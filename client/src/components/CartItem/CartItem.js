import './CartItem.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

//actions
import {removeFromCartAction} from '../../redux/actions/cartActions';
import { addToCartAction } from '../../redux/actions/cartActions'

const CartItem = (props) => {

  const dispatch = useDispatch()



  const removeItemHandler = () => {
    dispatch(removeFromCartAction(props.productId));
  }

  const changeQtyHandler = () => {
    dispatch(addToCartAction(props.productId, qty))
  }

  return (
    <div className="cartitem">
      <div className='cartitem__left'>
        <img src={props.imageUrl} alt="temp stuff"/>
        <div className="left__buttons">
          <Link className="cartitem__name" to={`/product/60a9c1b2b1196c48141b8ac9`}>
            <p>Red Converse High Tops</p>
          </Link>
          <button className="cartitem__removebtn" onClick={removeItemHandler} >Remove</button>
        </div>
      </div>
      <p className="cartitem__price">$45.00</p>
      <select className="cartitem__select" onChange={changeQtyHandler}>
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
