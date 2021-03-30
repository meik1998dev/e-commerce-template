import React from "react";
import { connect } from "react-redux";
import CartItem from "../../components/cart/cart-item/cart-item";
const CheckoutPage = ({ cartItems }) => {
  return (
    <div>
      <h1>Checkout Page</h1>

      {cartItems.length ? (
        cartItems.map(({ id, ...props }) => <CartItem key={id} {...props} />)
      ) : (
        <span> your cart is empty !</span>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps)(CheckoutPage);
