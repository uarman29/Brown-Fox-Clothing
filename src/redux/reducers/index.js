import { combineReducers } from 'redux';
import cartDropdownReducer from './cartDropdownReducer';
import userReducer from './userReducer';

export default combineReducers({
    user: userReducer,
    cartDropdownHidden: cartDropdownReducer
});