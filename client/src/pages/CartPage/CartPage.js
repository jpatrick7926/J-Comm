import './CartPage.css';

// Components
import CartItem from '../../components/CartItem/CartItem';

const CartPage = () => {
  return (
    <div>
      <h2>Cart Page</h2>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}


export default CartPage;
