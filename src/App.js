import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePageComponent from './pages/homepage/HomePageComponent';
import ShopPageComponent from './pages/shop/ShopPageComponent';
import HeaderComponent from './components/header/HeaderComponent';
import SignInUpComponent from './pages/sign-in-up/SignInUpComponent';

class App extends React.Component
{
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

export default App;