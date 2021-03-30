import React from "react";
import CollectionItem from "../collection-item/collection-item";

const Collection = ({ title, items }) => {
  return (
    <div>
      <h3>{title}</h3>

      {items
        .filter((item, idx) => idx > 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default Collection;
