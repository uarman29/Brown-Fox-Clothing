import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../assests/brown_fox_logo_circle.png';
import { auth } from '../../firebase/firebase.util';
import './HeaderComponent.css';

const HeaderComponent = (props) =>{
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <img alt="logo" src={logo}/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                {
                    props.currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signIn">SIGN IN</Link>
                }
            </div>

        </div>
    );
};

const mapStateToProps = (state) =>
{
    return { currentUser: state.user.currentUser };
};

export default connect(mapStateToProps)(HeaderComponent);