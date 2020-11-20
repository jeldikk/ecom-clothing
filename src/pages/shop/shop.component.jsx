import React from 'react'

import "./shop.styles.scss"

import SHOP_DATA from "./shop.data"

import CollectionPreview from "../../components/collection-preview/collection-preview.component"

class ShopPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){

        return (
            <div className="shop-page">
                <h1>Collections</h1>
                {
                    this.state.collections.map(({id, title, items})=>(
                        <CollectionPreview key={id} title={title} items={items} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage