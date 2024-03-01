
import PropTypes from 'prop-types';
import CartPage from '../components/CartPage';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <CartPage cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
