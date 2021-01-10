import React from 'react';


import FormInputComponent from '../form-input/FormInputComponent';
import CustomButtonComponent from '../custom-button/CustomButtonComponent';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

import './SignUpComponent.css';

class SignUpComponent extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async (event) =>
    {
        const {displayName} = this.state;
        event.preventDefault();
        if(this.state.password !== this.state.confirmPassword)
        {
            alert("Passwords do not match");
            return;
        }

        try
        {
            const { user } = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
        catch(error)
        {
            console.log(error);
        }
    }

    handleChange = (event) =>
    {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render()
    {
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInputComponent 
                        type="text"
                        name="displayName"
                        value={this.state.displayName}
                        label="Name"
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInputComponent 
                        type="email"
                        name="email"
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInputComponent 
                        type="password"
                        name="password"
                        value={this.state.password}
                        label="Password"
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInputComponent 
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        label="Confirm Password"
                        handleChange={this.handleChange}
                        required
                    />

                    <CustomButtonComponent type="submit">SIGN UP</CustomButtonComponent>

                </form>

            </div>
        );
    }
}

export default SignUpComponent;