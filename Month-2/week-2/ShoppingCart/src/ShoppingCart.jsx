// ShoppingCart.js

import{ useState } from 'react';

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);

  const addToCart = () => {
    if (!itemName.trim() || itemQuantity <= 0 || itemPrice <= 0) {
      alert('Please fill in all fields with valid values.');
      return;
    }

    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      price: itemPrice,
    };

    setItems([...items, newItem]);
    setItemName('');
    setItemQuantity(1);
    setItemPrice(0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        <h3>Add Item to Cart</h3>
        <label>
          Name:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(parseInt(e.target.value, 10))}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(parseFloat(e.target.value))}
          />
        </label>
        <button type="button" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
      <div>
        <h3>Cart</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
