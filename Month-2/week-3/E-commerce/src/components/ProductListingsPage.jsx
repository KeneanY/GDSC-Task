import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductListingsPage = ({ products }) => {
  return (
    <div>
      <h1>Product Listings</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductListingsPage.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductListingsPage;
