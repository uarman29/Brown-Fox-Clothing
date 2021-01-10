import { TOGGLE_CART_HIDDEN } from "../types";

const INITIAL_STATE = {
    hidden: true
}

const cartDropdownReducer = (cartDropdownHidden = INITIAL_STATE, action) =>
{
    switch(action.type)
    {
        case TOGGLE_CART_HIDDEN:
            return {...cartDropdownHidden, hidden: !cartDropdownHidden.hidden};
        
        default:
            return cartDropdownHidden;
    }
}

export default cartDropdownReducer;