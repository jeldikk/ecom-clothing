import React from 'react'
import {connect} from 'react-redux'

import "./checkout-item.styles.scss"

import {removeItem, setItemQuantity} from "../../redux/cart/cart.actions"

const CheckoutItem = ({cartItem, removeItem, setItemQuantity})=>{

    const {name, imageUrl, quantity, price} = cartItem;
    // console.log("checkout item for ", cartItem.id, 'rendered');
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt='item' />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <span className={`arrow ${quantity === 1 ? 'disable' : ''}`} onClick={() => setItemQuantity(cartItem, quantity-1)}>&#10134;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => setItemQuantity(cartItem, quantity+1)}>&#10133;</span>
            </div>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10006;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (item) => dispatch(removeItem(item)),
        setItemQuantity: (item, quantity) => dispatch(setItemQuantity(item, quantity))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem)



