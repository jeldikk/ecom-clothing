import React from 'react'

import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

import "./cart-icon.styles.scss"

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"

import {toggleDropDown} from "../../redux/cart/cart.actions"
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"

function CartIcon({toggleDropDown, itemCount}) {
    return (
        <div className="cart-icon" onClick={toggleDropDown}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDropDown: ()=> dispatch(toggleDropDown())
    }
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
