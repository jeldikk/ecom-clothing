
import CartActionTypes from "./cart.types"

import {addItemToCart} from "./cart.util"

let INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action)=>{

    switch(action.type){
        case CartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;