import { createSelector } from 'reselect';

export const selectCart = (state) => state.cart;

export const countCartItems = createSelector(
    [selectCart],
    cart => cart.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCart],
  cart => cart.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + (cartItem.quantity * cartItem.price), 0)
);