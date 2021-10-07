import './CartPage.css';
import { useSelector } from 'react-redux'

// Components
import CartItem from '../../components/CartItem/CartItem';

const CartPage = () => {

  const { cartItems } = useSelector(state => state.cart)

  return (
    <div>
      <h2>Cart Page</h2>
      {
        cartItems.map(item => (
          <CartItem
            key={item._id}
            productId={item._id}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            countInStock={item.countInStock}
          />
        ))
      }
    </div>
  );
}


export default CartPage;
