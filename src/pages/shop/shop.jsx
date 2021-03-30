import React from "react";
import SHOP_DATA from "./shop-data";
import Collection from "../../components/collection/collection";
import CartDropdown from "../../components/cart/cart-dropdown";
class ShopPage extends React.Component {
  state = {
    shopData: SHOP_DATA,
  };

  render() {
    return (
      <div>
        <h2>Collections</h2>
        <CartDropdown></CartDropdown>
        {this.state.shopData.map(({ title, id, items }) => (
          <Collection title={title} key={id} items={items} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
