
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const ProductPage = ({ products, addToCart }) => {
  const { productId } = useParams();
  const product = products.find(product => product.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

ProductPage.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductPage;
