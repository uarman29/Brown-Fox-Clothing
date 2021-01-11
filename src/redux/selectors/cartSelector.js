import { createSelector } from 'reselect';

export const selectCart = (state) => state.cart;

export const countCartItems = createSelector(
    [selectCart],
    cart => cart.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);