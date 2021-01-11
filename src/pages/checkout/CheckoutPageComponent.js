import React from 'react';
import { connect } from 'react-redux';
import { selectCart } from '../../redux/selectors/cartSelector';
import { selectCartTotal } from '../../redux/selectors/cartSelector';

import CheckoutItemComponent from '../../components/checkout-item/CheckoutItemComponent';
import './CheckoutPageComponent.css';

const CheckoutPageComponent = (props) =>
{
    const renderItems = () =>
    {
        return props.cart.map(item =>{
            return <CheckoutItemComponent key={item.id} item={item}/>
        });
    }

    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {renderItems()}
            <div className="total">
                <span>TOTAL: ${props.total}</span>
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>
{
    return {cart: selectCart(state), total: selectCartTotal(state)};
};

export default connect(mapStateToProps)(CheckoutPageComponent);