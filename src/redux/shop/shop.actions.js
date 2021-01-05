import ShopActionTypes from "./shop.types"

export const setShopDataCollection = (collection) => {
    return {
        type: ShopActionTypes.SET_SHOP_DATA,
        payload: collection
    }
}