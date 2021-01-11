import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButtonComponent from '../custom-button/CustomButtonComponent';
import CartItemComponent from '../cart-item/CartItemComponent';

import { toggleCartDropdown } from '../../redux/actions';
import { selectCart } from '../../redux/selectors/cartSelector';
import './CartDropdownComponent.css';


const CartDropdownComponent = (props) =>{

    const renderCartItems = () =>
    {
        if(props.cart.length === 0)
            return <span className="empty-message">Your cart is empty</span>;
        return props.cart.map(item =>{
            return <CartItemComponent key={item.id} item = {item} />;
        });
    }
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {renderCartItems()}
        </div>
        <CustomButtonComponent onClick={() => {props.toggleCartDropdown(); props.history.push("/checkout");}}>GO TO CHECKOUT</CustomButtonComponent>
    </div>
    );
}

const mapStateToProps = (state) =>{
    return {cart: selectCart(state)};
}
export default withRouter(connect(mapStateToProps, { toggleCartDropdown })(CartDropdownComponent));