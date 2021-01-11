import React from 'react';

import './CheckoutItemComponent.css';

const CheckoutItemComponent = (props) =>
{
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt={props.item.name} src={props.item.imageUrl}/>
            </div>
            <span className="name">{props.item.name}</span>
            <span className="quantity">{props.item.quantity}</span>
            <span className="price">${props.item.price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    );
};

export default CheckoutItemComponent;