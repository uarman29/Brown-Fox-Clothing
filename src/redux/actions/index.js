import { SET_CURRENT_USER, TOGGLE_CART_HIDDEN } from '../types';

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