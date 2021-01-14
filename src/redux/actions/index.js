import { ADD_ITEM, CLEAR_ITEM_FROM_CART, DATA_FETCH_FAIL, DATA_FETCH_SUCCESS, REMOVE_ITEM, SET_CURRENT_USER, START_DATA_FETCH, TOGGLE_CART_HIDDEN } from '../types';
import { firestore, convertShopQuerySnapshotToObject } from '../../firebase/firebase.util';

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
}

export const toggleCartDropdown = () =>
{
    return {type: TOGGLE_CART_HIDDEN};
}

export const addCartItem = (item) =>
{
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export const removeCartItem = (item) =>
{
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}

export const clearItemFromCart = (item) =>
{
    return{
        type: CLEAR_ITEM_FROM_CART,
        payload: item
    }
}

export const signalStartShopDataFetch = () => 
{
    return {type: START_DATA_FETCH};
}

export const dataFetchSuccess = (data) =>
{
    return {
        type: DATA_FETCH_SUCCESS,
        payload: data
    };
}

export const dataFetchFail = (errorMessage) =>
{
    return {
        type: DATA_FETCH_FAIL,
        payload: errorMessage
    };
}

export const fetchShopData = () =>
{
    return async (dispatch) =>
    {
        const shopCollectionRef = firestore.collection('shop_data');
        dispatch(signalStartShopDataFetch());

        await shopCollectionRef.get().then(querySnapshot => {
            const shopData = convertShopQuerySnapshotToObject(querySnapshot);
            dispatch(dataFetchSuccess(shopData));
        })
        .catch(error => dispatch(dataFetchFail(error.message)));
    };
}