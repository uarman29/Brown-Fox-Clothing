import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePageComponent from './pages/homepage/HomePageComponent';
import ShopPageComponent from './pages/shop/ShopPageComponent';
import HeaderComponent from './components/header/HeaderComponent';
import SignInUpComponent from './pages/sign-in-up/SignInUpComponent';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions';

class App extends React.Component
{
    unsubscribeFromAuth = null;

    componentDidMount()
    {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if(userAuth)
            {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot =>{
                    this.props.setCurrentUser(snapShot.data());
                });
            }
            else
            {
                this.props.setCurrentUser(null);
            }
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
                <HeaderComponent />
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

export default connect(null, { setCurrentUser })(App);