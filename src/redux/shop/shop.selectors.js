import {createSelector} from 'reselect'

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
    [selectShop],
    (collections) => collections.collections
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    (shop) => shop.isFetching
)

export const selectCollection = (collectionId) => createSelector(
    [selectCollections],
    (collections) => collections[collectionId]

)