import { createSelector } from 'reselect';

const selectCartDropdown = state => state.cartDropdownHidden;

export const selectCartDropdownHidden = createSelector(
    [selectCartDropdown],
    cartDropdownHidden => cartDropdownHidden.hidden
)