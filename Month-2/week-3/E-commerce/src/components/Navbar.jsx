import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/cart" activeClassName="active">Cart</NavLink>
    </nav>
  );
};

export default Navbar;

