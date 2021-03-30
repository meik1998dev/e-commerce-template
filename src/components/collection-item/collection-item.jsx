import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart-action";

const CollectionItem = ({ addItemToCart, item }) => {
  const { name, imageUrl, price } = item;
  return (
    <div>
      <img src={imageUrl}></img>
      <h4>{name}</h4>
      <span>{price} $</span>
      <button onClick={() => addItemToCart(item)}> Add to cart </button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
