// import SHOP_DATA from "./shop.data"
import ShopActionTypes from "./shop.types"
import SHOP_DATA from "./shop.keybased"

// const INITIAL_STATE = {
//     collections: SHOP_DATA
// }

//isFetching is almost similar to isLoading boolean value to check status of data fetching
const INITIAL_STATE = {
    collections: [],
    isFetching: true,
    errorMessage: ''
}

const shopReducer = (state=INITIAL_STATE, action)=>{

    switch(action.type){
        case ShopActionTypes.SET_SHOP_DATA:
            return {
                ...state,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true,
            }
        case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }

}

export default shopReducer