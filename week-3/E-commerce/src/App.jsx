import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductPage from './components/ProductPage';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10, image: 'acer laptop.jpg'},
    { id: 2, name: 'Product 2', price: 20, image: 'asus laptop.jpg'},
    { id: 3, name: 'Product 3', price: 20, image: 'download.jpg'},
    { id: 4, name: 'Product 4', price: 20, image: 'iphone 11 promax.jpg'},
    { id: 5, name: 'Product 5', price: 20, image: 'iphone X.jpg '},
    { id: 6, name: 'Product 6', price: 20, image: 'macbook pro.jpg'},
    { id: 7, name: 'Product 7', price: 20, image: 'samsung 21s ultra.jpg' },
    { id: 8, name: 'Product 8', price: 20, image: 'samsung A54.jpg'},
    { id: 9, name: 'Product 9', price: 20, image: 'samsung galaxy s22.jpg'},
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== item.id));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home products={products} />
          </Route>
          <Route path="/product/:productId">
            <ProductPage products={products} addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
