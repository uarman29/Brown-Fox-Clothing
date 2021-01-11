import React from 'react';
import { connect } from 'react-redux';

import { toggleCartDropdown } from '../../redux/actions';
import { ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import { countCartItems } from '../../redux/selectors/cartSelector';
import './CartIconComponent.css';

const CartIconComponent = (props) =>{
    return(
        <div onClick={props.toggleCartDropdown} className="cart-icon">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{props.itemCount}</span>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {itemCount: countCartItems(state)};
};

export default connect(mapStateToProps, { toggleCartDropdown })(CartIconComponent);
