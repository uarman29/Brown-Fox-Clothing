import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePageComponent from './pages/homepage/HomePageComponent';
import ShopPageComponent from './pages/shop/ShopPageComponent';
import HeaderComponent from './components/header/HeaderComponent';
import SignInUpComponent from './pages/sign-in-up/SignInUpComponent';

import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends React.Component
{
    unsubscribeFromAuth = null;
    constructor()
    {
        super();
        this.state = {currentUser: null};
    }

    componentDidMount()
    {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
            this.setState({currentUser: user});
            createUserProfileDocument(user);
        });
    }

    componentWillUnmount()
    {
        this.unsubscribeFromAuth();
    }

    render()
    {
        return(
            <div>
                <HeaderComponent currentUser={this.state.currentUser}/>
                <hr />
                <Switch>
                    <Route exact path="/" component={HomePageComponent}/>
                    <Route path="/shop" component={ShopPageComponent} />
                    <Route path="/signIn" component={SignInUpComponent} />
                </Switch>
            </div>
        );
    }
}

export default App;