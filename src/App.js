import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import HomePageComponent from './pages/homepage/HomePageComponent';
import ShopPageComponent from './pages/shop/ShopPageComponent';
import HeaderComponent from './components/header/HeaderComponent';
import SignInUpComponent from './pages/sign-in-up/SignInUpComponent';
import CheckoutPageComponent from './pages/checkout/CheckoutPageComponent';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser, fetchShopData, fetchCart, clearCart } from './redux/actions';
import { selectCurrentUser } from './redux/selectors/userSelector';
import CollectionPageComponent from './pages/collection-page/CollectionPageComponent';

class App extends React.Component
{
    unsubscribeFromAuth = null;

    componentDidMount()
    {
        this.props.fetchShopData();
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            this.props.clearCart();
            if(userAuth)
            {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot =>{
                    this.props.setCurrentUser(snapShot.data());
                    this.props.fetchCart();
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
                    <Route path="/shop/:collectionId" component={CollectionPageComponent} />
                    <Route path="/shop" component={ShopPageComponent} />
                    <Route exact path="/signIn" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInUpComponent />)} />
                    <CheckoutPageComponent exact path="/checkout" component={CheckoutPageComponent}/>
                    <Redirect to='/' />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {currentUser: selectCurrentUser(state)};
}

export default connect(mapStateToProps, { setCurrentUser, fetchShopData, fetchCart, clearCart })(App);