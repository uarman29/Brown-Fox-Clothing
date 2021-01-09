import React from 'react';

import FormInputComponent from '../form-input/FormInputComponent';
import CustomButtonComponent from '../custom-button/CustomButtonComponent';
import {signInWithGoogle} from '../../firebase/firebase.util';

import './SignInComponent.css';

class SignInComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {email: '', password: ''};
    }

    handleChange = (event) =>{
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = (event) =>
    {
        event.preventDefault();
        this.setState({email:'', password:''});
    }

    render()
    {
        return(
            <div className="sign-in">
                <div className="title">
                    <h2>I already have an account</h2>
                    <span>Sign in with email and password</span>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <FormInputComponent name="email" type="email" value={this.state.email} required handleChange={this.handleChange} label="Email"/>
                    <FormInputComponent name="password" type="password" value={this.state.password} required handleChange={this.handleChange} label="Password"/>

                    <div className="buttons">
                        <CustomButtonComponent type="submit">Sign in</CustomButtonComponent>
                        <CustomButtonComponent isGoogleSignIn onClick={signInWithGoogle} type="submit">Sign in with Google</CustomButtonComponent>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignInComponent;