import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItemComponent.css';

const MenuItemComponent = ({ title, imageUrl, size, linkUrl, history }) =>{
    return(
        <div className={`${size} menu-item`} onClick={() => history.push(`/shop/${linkUrl}`)}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItemComponent);