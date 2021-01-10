import React from 'react';

import CustomButtonComponent from '../custom-button/CustomButtonComponent';

import './CartDropdownComponent.css';


const CartDropdownComponent = () =>{
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
        </div>
        <CustomButtonComponent>GO TO CHECKOUT</CustomButtonComponent>
    </div>
    );
}

export default CartDropdownComponent;