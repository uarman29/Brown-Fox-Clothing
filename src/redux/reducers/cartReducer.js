import { ADD_ITEM } from "../types";

const INITIAL_STATE = [];

const addItemToCart = (cartItems, itemToAdd) =>
{
    var cartItemsCopy = [...cartItems];
    const existingItem = cartItemsCopy.find(item => item.id === itemToAdd.id);

    if(existingItem)
        return cartItemsCopy.map(item => item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1} : item);
    else
    {
        cartItemsCopy.push({id: itemToAdd.id, itemDetails: itemToAdd, quantity: 1});
        return cartItemsCopy;
    }
}

const cartReducer = (cart = INITIAL_STATE, action) =>
{
    switch(action.type)
    {
        case ADD_ITEM:
            return addItemToCart(cart, action.payload);
        default:
            return cart;
    }
}

export default cartReducer;