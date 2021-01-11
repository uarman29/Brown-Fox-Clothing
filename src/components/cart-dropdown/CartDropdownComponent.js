import React from 'react';
import { connect } from 'react-redux';

import CustomButtonComponent from '../custom-button/CustomButtonComponent';
import CartItemComponent from '../cart-item/CartItemComponent';

import { selectCart } from '../../redux/selectors/cartSelector';
import './CartDropdownComponent.css';


const CartDropdownComponent = (props) =>{

    const renderCartItems = () =>
    {
        return props.cart.map(item =>{
            return <CartItemComponent key={item.id} item = {item} />;
        });
    }
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {renderCartItems()}
        </div>
        <CustomButtonComponent>GO TO CHECKOUT</CustomButtonComponent>
    </div>
    );
}

const mapStateToProps = (state) =>{
    return {cart: selectCart(state)};
}
export default connect(mapStateToProps)(CartDropdownComponent);