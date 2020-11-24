import React from 'react'

import "./collection-page.styles.scss"

import SHOP_DATA from "../shop/shop.data"

import CollectionPreview from "../../components/collection-preview/collection-preview.component"
import CollectionItem from "../../components/collection-item/collection-item.component"

const CollectionPage = (props) => {
    // console.log("collection_name is ",collectionName)

    let {collectionName} = props.match.params;
    let itemListObject = SHOP_DATA.filter(itm => itm.routeName === collectionName);
    console.log("itemListObject" ,itemListObject)
    let {items, title} = itemListObject[0];
    console.log(items);
    // console.log("shop data is :", SHOP_DATA)
    // console.log('props are ', props)
    return (
        <div className="collection-page">
            <div className="title">Showing {collectionName}</div>
            <div className="collection">
                {
                    items.map(itm => <CollectionItem key={itm.id} item={itm} />)
                }
            </div>
        </div>
    )
}

export default CollectionPage
