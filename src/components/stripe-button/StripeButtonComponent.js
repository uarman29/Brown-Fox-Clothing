import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { clearCart } from '../../redux/actions';
import { withRouter } from 'react-router-dom';

const StripeCheckoutButton = (props) =>
{
    const priceForStripe = props.price * 100;
    const publishKey = 'pk_test_51I9uW5A6Vs7WE9jDV0o82YjfSxuPU8mJWJr5ukVSp2fAtSzV3iWoYe8jGqOVQFrVlmy7bqoOZhfvSUkCx0SpxLd200gvq8v3tk';

    const onToken = (token) =>
    {
        props.clearCart();
        alert("Payment Successful");
        props.history.push("/");
    }

    return(
        <StripeCheckout 
            label = "Pay now"
            name = "brown-fox-clothing"
            billingAddress
            shippingAddress
            description = {`Your total is ${props.price}`}
            amount = {priceForStripe}
            panelLabel = "Pay now"
            token = {onToken}
            stripeKey = {publishKey}
        />
    );
}

export default withRouter(connect(null, { clearCart })(StripeCheckoutButton));