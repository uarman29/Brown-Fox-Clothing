import React from 'react';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/actions';

import './CollectionItemComponent.css';
import CustomButtonComponent from '../custom-button/CustomButtonComponent';

const CollectionItemComponent = (props) =>{
    return(
        <div className="collection-item">
            <div 
                className="image"
                style={{backgroundImage: `url(${props.item.imageUrl})`}}
            />
            <div className="collection-footer">
                <span className="name">{props.item.name}</span>
                <span className="price">${props.item.price}</span>
            </div>
            <CustomButtonComponent inverted onClick={() => props.addCartItem(props.item)}>Add to cart</CustomButtonComponent>
        </div>
    );
};

export default connect(null, { addCartItem })(CollectionItemComponent);