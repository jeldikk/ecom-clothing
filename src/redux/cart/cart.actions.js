
import CartActionTypes from "./cart.types"

export const toggleDropDown = ()=>{
    return {
        type: CartActionTypes.TOGGLE_CART_DROPDOWN
    }
}

export const addItem = (item) => {

    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
}

export const removeItem = (item) => {

    return {
        type: CartActionTypes.REMOVE_ITEM,
        payload: item
    }
}

export const setItemQuantity = (item, quantity) => {
    return {
        type: CartActionTypes.SET_ITEM_QUANTITY,
        payload: {item, quantity}
    }
}