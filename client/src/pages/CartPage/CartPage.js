import './CartPage.css';
import { useSelector } from 'react-redux'

// Components
import CartItem from '../../components/CartItem/CartItem';
import SubHeader from '../../components/SubHeader/SubHeader'

// actions


const CartPage = () => {

  const { cartItems } = useSelector(state => state.cart)

  return (
    <div className = "cartPage-container">
      <SubHeader text="Your Cart"/>
      <div className="cart-header">
        <div className='cartitem__left'>
          <div className="cart-img-container">
            <strong>Product</strong>
          </div>
          <div className="left__buttons">
          </div>
        </div>
        <div className="cartitem__right">
          <div className="cartitem__price">
            <strong>Price</strong>
          </div>
          <div className="cartitem__select">
            <strong>Qty</strong>
          </div>
        </div>
      </div>
      {
        cartItems.map(item => (
          <CartItem
            key={item.id}
            productId={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            countInStock={item.countInStock}
            qty={item.qty}
            item={item}
          />
        ))
      }
    </div>
  );
}


export default CartPage;
