import React from 'react'

import {Link, withRouter} from 'react-router-dom'
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

import CartItem from "../cart-item/cart-item.component"
import CustomButton from "../custom-button/custom-button.components"

import {selectCartItems} from "../../redux/cart/cart.selectors"
import {toggleDropDown} from "../../redux/cart/cart.actions"

import "./cart-dropdown.styles.scss"

function CartDropdown({cartItems, history, dispatch}) {

    const handleOnClick = () => {
        dispatch(toggleDropDown());
        history.push('/checkout')
    }
 
    // console.log(otherProps);
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.length === 0
                ?
                <span className="empty-message">Your cart <br /> is empty</span>
                :
                cartItems.map(it => <CartItem key={it.id} item={it} />)
            }
            </div>
            {
                cartItems.length === 0
                ?
                null
                :
                <CustomButton onClick={handleOnClick}>Go to checkout</CustomButton>
            }
            
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
