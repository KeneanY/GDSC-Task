import PropTypes from 'prop-types';

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
    </div>
  );
};

CartPage.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartPage;
