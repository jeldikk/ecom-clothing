import React from 'react'
import {connect} from 'react-redux'
import "./collection-item.styles.scss"
import {AddButton, CollectionItemContainer, CollectionImageContainer, CollectionFooterContainer, ItemName, ItemPrice} from "./collection-item.styles"
// import CustomButton from "../custom-button/custom-button.components"

import {addItem} from "../../redux/cart/cart.actions"

const CollectionItem = ({item, addItem})=>{
    
    const {name, imageUrl, price} = item;
    
    return (

    <CollectionItemContainer>
        <CollectionImageContainer style={{backgroundImage:`url(${imageUrl})`}} />
        <CollectionFooterContainer>
            <ItemName>{name}</ItemName>
            <ItemPrice>{`$${price}`}</ItemPrice>
        </CollectionFooterContainer>
        {/* <CustomButton inverted onClick={() => addItem(item)}>Add to Cart</CustomButton> */}
        <AddButton inverted onClick={() => addItem(item)}>Add to Cart</AddButton>
    </CollectionItemContainer>
)
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}


export default connect(null, mapDispatchToProps)(CollectionItem);