import React from 'react'

// import "./cart-item.styles.scss"

import {CartItemContainer, ItemImageContainer, ItemDetailsContainer, ItemName, ItemPrice} from './cart-item.styles'

const CartItem = ({item: {imageUrl, name, price, quantity}}) => {
    return (
        <CartItemContainer>
            <ItemImageContainer src={imageUrl} alt="item" />
            <ItemDetailsContainer>
                <ItemName>{name}</ItemName>
                <ItemPrice>{`${quantity} x $${price}`}</ItemPrice>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem;
