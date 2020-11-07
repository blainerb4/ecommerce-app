import { createSelector } from 'reselect'
import memoize from 'lodash.memoize';


//object(collectionidmap) matches the string value (url parameter) to the id
const selectShop = state => state.shop

export const selectCollections = createSelector (
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector (
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)
//we get keys off collections, get allow the values


export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);

//storing lists of elements inside an objecvt and not an array -data normalization
/*
    export const selectCollection = collectionUrlParam =>
    createSelector (
        [selectCollections],
        collections => 
        collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
            )
    )
export const selectCollection = collectionUrlParam =>
createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
)
 const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}
    */