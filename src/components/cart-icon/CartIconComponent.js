import React from 'react';
import { connect } from 'react-redux';

import { toggleCartDropdown } from '../../redux/actions';
import { ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import './CartIconComponent.css';

const CartIconComponent = (props) =>{
    return(
        <div onClick={props.toggleCartDropdown} className="cart-icon">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    );
};

export default connect(null, { toggleCartDropdown })(CartIconComponent);
