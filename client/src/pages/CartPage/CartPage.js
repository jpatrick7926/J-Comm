import './CartPage.css';
import { useSelector } from 'react-redux'

// Components
import CartItem from '../../components/CartItem/CartItem';

// actions


const CartPage = () => {

  const { cartItems } = useSelector(state => state.cart)



  return (
    <div>
      <h2>Cart Page</h2>
      {
        cartItems.map(item => (
          <CartItem
            key={item.id}
            productId={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            countInStock={item.countInStock}
            item={item}
          />
        ))
      }
    </div>
  );
}


export default CartPage;
