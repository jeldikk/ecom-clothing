import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils"
import ShopActionTypes from "./shop.types"

export const setShopDataCollection = (collection) => {
    return {
        type: ShopActionTypes.SET_SHOP_DATA,
        payload: collection
    }
}

export const fetchCollectionStart = () => {
    return {
        type: ShopActionTypes.FETCH_COLLECTION_START,
    }
}

export const fetchCollectionSuccess = (collectionMap) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
        payload: collectionMap
    }
}

export const fetchCollectionFailure = (errorMessage) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
        payload: errorMessage
    }
}

export const fetchCollectionStartAsync = () => {
    
    return (dispatch) => {
        const collectionRef = firestore.collection("collections");

        dispatch(fetchCollectionStart())
        
        collectionRef.get()
            .then((snapshot) => {
                const collectionMap = convertCollectionSnapshotToMap(snapshot);
                dispatch(fetchCollectionSuccess(collectionMap));
                
            })
            .catch((error)=>{
                dispatch(fetchCollectionFailure(error.message))
            })
            
    }
}