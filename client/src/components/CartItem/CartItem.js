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

  const changeQtyHandler = (qty) => {
    dispatch(addToCartAction(props.productId, qty))
  }

  return (
    <div className="cartitem">
      <div className='cartitem__left'>
        <div className="cart-img-container">
          <img src={props.imageUrl} alt="temp stuff"/>
        </div>
        <div className="left__buttons">
          <Link className="cartitem__name" to={`/product/${props.productId}`}>
            <p>{props.title}</p>
          </Link>
          <button className="cartitem__removebtn" onClick={removeItemHandler} >Remove</button>
        </div>
      </div>
      <div className="cartitem__right">
        <div className="cartitem__price">
          <strong>${props.price * props.qty}</strong>
        </div>
        <div className="cartitem__select">
          <select onChange={(event => {changeQtyHandler(event.target.value)})}>
            <option value={props.qty}>{props.qty}</option>
            {
              [...Array(props.countInStock).keys()].map(index => (
                <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))
            }
          </select>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
