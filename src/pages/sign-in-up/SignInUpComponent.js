import React from 'react';

import SignInComponent from '../../components/sign-in/SignInComponent';
import SignUpComponent from '../../components/sign-up/SignUpComponent';
import './SignInUpComponent.css';

const SignInUpComponent = () =>{
    return(
        <div className="sign-in-up">
            <SignInComponent />
            <SignUpComponent />
        </div>
    );
};

export default SignInUpComponent;