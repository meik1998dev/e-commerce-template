import React from "react";
import { connect } from "react-redux"; 
import { withRouter } from "react-router";
import CartItem from "./cart-item/cart-item";

const CartDropdown = ({ cartItems, history }) => {
  return (
    <div>
      {cartItems.map(({ id, ...props }) => (
        <CartItem key={id} {...props} />
      ))}
      <button onClick={() => history.push("/checkout")}>Go To Checkout</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
