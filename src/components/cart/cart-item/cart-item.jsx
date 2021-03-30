import React from "react";

const CartItem = ({ name, price, imageUrl, quantity }) => {
  return (
    <div>
      <img src={imageUrl}></img>
      <h3>{name}</h3>
      <span>{price} $</span>
      <p>quantity {quantity}</p>
    </div>
  );
};

export default CartItem;
