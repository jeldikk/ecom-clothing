import React from "react";

// import "./collection-preview.styles.scss";

// import {Link} from "react-router-dom"

import CollectionItem from "../collection-item/collection-item.component"

import {CollectionPreviewContainer, TitleLink, Preview} from "./collection-preview.styles"

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleLink to={`/shop/${title.toLowerCase()}/`}>{title.toUpperCase()}</TitleLink>
    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
        //   <div key={item.id}>{item.name}</div>
        <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
