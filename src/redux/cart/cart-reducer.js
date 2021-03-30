import addItemToCartWithQuantity from "../../components/cart/cart-util";

const INITIAL_STATE = {
  cartHidden: true,
  items: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "TOGGLE_CART":
      return { ...state, cartHidden: !state.cartHidden };

    case "ADD_TO_CART":
      return {
        ...state,
        items: addItemToCartWithQuantity(state.items, payload),
      };

    default:
      return state;
  }
};
