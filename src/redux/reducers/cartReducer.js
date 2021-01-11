import { ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from "../types";

const INITIAL_STATE = [];

const addItemToCart = (cartItems, itemToAdd) =>
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

const removeItemFromCart = (cartItems, itemToRemove) =>
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

const cartReducer = (cart = INITIAL_STATE, action) =>
{
    switch(action.type)
    {
        case ADD_ITEM:
            return addItemToCart(cart, action.payload);
        
        case CLEAR_ITEM_FROM_CART:
            return cart.filter(item => item.id !== action.payload.id);
        
        case REMOVE_ITEM:
            return removeItemFromCart(cart, action.payload);

        default:
            return cart;
    }
}

export default cartReducer;