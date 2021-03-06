import { ADD_ITEM, CLEAR_CART, CLEAR_ITEM_FROM_CART, FETCH_CART, REMOVE_ITEM } from "../types";

const INITIAL_STATE = [];

const cartReducer = (cart = INITIAL_STATE, action) =>
{
    switch(action.type)
    {
        case FETCH_CART:
            return action.payload;

        case CLEAR_CART:
            return INITIAL_STATE;

        case ADD_ITEM:
            return action.payload;
        
        case CLEAR_ITEM_FROM_CART:
            return action.payload;
        
        case REMOVE_ITEM:
            return action.payload;

        default:
            return cart;
    }
}

export default cartReducer;