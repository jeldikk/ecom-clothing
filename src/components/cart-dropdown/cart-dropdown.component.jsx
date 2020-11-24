import React from 'react'

import {connect} from "react-redux"

import CartItem from "../cart-item/cart-item.component"

import "./cart-dropdown.styles.scss"

function CartDropdown({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.map(it => <CartItem key={it.id} item={it} />)
            }
            </div>
            <button>Checkout</button>
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
        cartItems: [...state.cart.cartItems]
    }
}

export default connect(mapStateToProps)(CartDropdown);
