
import CartActionTypes from "./cart.types"

import {addItemToCart, removeItemFromCart, modifyItemQuantity} from "./cart.util"

let INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action)=>{

    switch(action.type){
        case CartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.SET_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: modifyItemQuantity(state.cartItems, action.payload.item, action.payload.quantity)
            }
        default:
            return state
    }
}

export default cartReducer;