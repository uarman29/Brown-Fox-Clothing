import { combineReducers } from 'redux';
import cartDropdownReducer from './cartDropdownReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import shopDataReducer from './shopDataReducer';

export default combineReducers({
    user: userReducer,
    cartDropdownHidden: cartDropdownReducer,
    cart: cartReducer,
    shop: shopDataReducer
});