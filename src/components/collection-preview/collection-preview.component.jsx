import React from "react";

import "./collection-preview.styles.scss";

import {Link} from "react-router-dom"

import CollectionItem from "../collection-item/collection-item.component"

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <Link className="title" to={`/shop/${title.toLowerCase()}/`}>{title.toUpperCase()}</Link>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
        //   <div key={item.id}>{item.name}</div>
        <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
