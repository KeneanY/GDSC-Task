import PropTypes from 'prop-types';
import ProductListingsPage from '../components/ProductListingsPage';

const Home = ({ products }) => {
  return (
    <div>
      <ProductListingsPage products={products} />
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Home;
