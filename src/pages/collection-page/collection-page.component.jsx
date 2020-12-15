import React from 'react'

import {connect} from 'react-redux'

import "./collection-page.styles.scss"

import {selectCollection} from "../../redux/shop/shop.selectors"
// import SHOP_DATA from "../../redux/shop/shop.data"

// import CollectionPreview from "../../components/collection-preview/collection-preview.component"
import CollectionItem from "../../components/collection-item/collection-item.component"

const CollectionPage = (props) => {
    
    let {items, title} = props.item
    
    return (
        <div className="collection-page">
            <div className="title">Showing {title}</div>
            <div className="collection">
                {
                    items.map(itm => <CollectionItem key={itm.id} item={itm} />)
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state, actualProps) => {
    return {
        item: selectCollection(actualProps.match.params.collectionName)(state)
    }
}

/*
line #32 is called as currying. it means splitting a multi arguments taking function to single argument taking functions

for example:
const Multiply = (a) => (b) => a*b

const MultiplyBy5 = Multiply(5); // we are making a utility function called MultiplyBy5 we can use this when ever we want as shorthand

so MultiplyBy5(10) will produce 50 because it is equivalent to Multiply(5)(10)

These help in decrease in the decrease of amount of work to be done by computer since, the functions are already calculated before.

*/

export default connect(mapStateToProps,null)(CollectionPage)
