import React from 'react'

import {connect} from "react-redux"

import "./cart-icon.styles.scss"

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"

import {toggleDropDown} from "../../redux/cart/cart.actions"

function CartIcon({toggleDropDown}) {
    return (
        <div className="cart-icon" onClick={toggleDropDown}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{0}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDropDown: ()=> dispatch(toggleDropDown())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon);
