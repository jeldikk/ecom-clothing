import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component"

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h2>{title.toUpperCase()}</h2>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherParams}) => (
        //   <div key={item.id}>{item.name}</div>
        <CollectionItem key={id} {...otherParams} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
