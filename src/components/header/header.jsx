import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartDropdown from "../cart/cart-dropdown";
import { toggleCart } from "../../redux/cart/cart-action";
const Header = ({ cartHidden, dispatch }) => {
  return (
    <div>
      <Link to="/shop">Shop</Link>
      <button onClick={() => dispatch(toggleCart())}>toggle cart</button>
      {cartHidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartHidden: state.cart.cartHidden,
});

export default connect(mapStateToProps)(Header);
