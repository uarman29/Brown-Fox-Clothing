import { ADD_ITEM, CLEAR_CART, CLEAR_ITEM_FROM_CART, DATA_FETCH_FAIL, DATA_FETCH_SUCCESS, FETCH_CART, REMOVE_ITEM, SET_CURRENT_USER, START_DATA_FETCH, TOGGLE_CART_HIDDEN } from '../types';
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

export const fetchCart = () =>
{
    return async (dispatch, getState) =>
    {
        dispatch({
            type: FETCH_CART,
            payload: getState().user.currentUser.cart
        });
    };
}

const addItemToCartHelper = (cartItems, itemToAdd) =>
{
    var cartItemsCopy = [...cartItems];
    const existingItem = cartItemsCopy.find(item => item.id === itemToAdd.id);

    if(existingItem)
        return cartItemsCopy.map(item => item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1} : item);
    else
    {
        cartItemsCopy.push({...itemToAdd, quantity: 1});
        return cartItemsCopy;
    }
}

export const addCartItem = (item) =>
{
    return async (dispatch, getState) =>
    {
        const newCart = addItemToCartHelper(getState().cart, item);
        if(getState().user.currentUser !== null)
        {
            const userRef = firestore.doc(`users/${getState().user.currentUser.uid}`);
            try
            {
                await userRef.update("cart", newCart);
            }
            catch(error)
            {
                console.log("Error Adding to Cart", error.message);
            }
        }

        dispatch({
            type: ADD_ITEM,
            payload: newCart
        });

    }
}

const removeItemFromCartHelper = (cartItems, itemToRemove) =>
{
    const existingItem = cartItems.find(item => item.id === itemToRemove.id);

    if(existingItem && existingItem.quantity === 1)
    {
        return cartItems.filter(item => item.id !== itemToRemove.id);
    }
    else if(existingItem)
    {
        return cartItems.map(item => item.id === itemToRemove.id ? {...item, quantity: item.quantity - 1} : item);
    }

    return cartItems;
}

export const removeCartItem = (item) =>
{
    return async (dispatch, getState) =>
    {
        const newCart = removeItemFromCartHelper(getState().cart, item);
        if(getState().user.currentUser !== null)
        {
            const userRef = firestore.doc(`users/${getState().user.currentUser.uid}`);
            try
            {
                await userRef.update("cart", newCart);
            }
            catch(error)
            {
                console.log("Error Removing From Cart", error.message);
            }
        }

        dispatch({
            type: REMOVE_ITEM,
            payload: newCart
        });

    }
}

export const clearItemFromCart = (item) =>
{
    return async (dispatch, getState) =>
    {
        const newCart = getState().cart.filter(selectedItem => selectedItem.id !== item.id);

        if(getState().user.currentUser !== null)
        {
            const userRef = firestore.doc(`users/${getState().user.currentUser.uid}`);
            try
            {
                await userRef.update("cart", newCart);
            }
            catch(error)
            {
                console.log("Error Clearing From Cart", error.message);
            }
        }

        dispatch({
            type: CLEAR_ITEM_FROM_CART,
            payload: newCart
        });

    }
}

export const clearCart = () =>
{
    return async (dispatch, getState) =>
    {
        const newCart = [];

        if(getState().user.currentUser !== null)
        {
            const userRef = firestore.doc(`users/${getState().user.currentUser.uid}`);
            try
            {
                await userRef.update("cart", newCart);
            }
            catch(error)
            {
                console.log("Error Clearing Cart", error.message);
            }
        }

        dispatch({
            type: CLEAR_CART
        });

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