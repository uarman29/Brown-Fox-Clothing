import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assests/brown_fox_logo_circle.png';
import './HeaderComponent.css';

const HeaderComponent = () =>{
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <img alt="logo" src={logo}/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
            </div>
        </div>
    );
};

export default HeaderComponent;