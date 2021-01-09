import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomePageComponent from './pages/homepage/HomePageComponent';
import ShopPageComponent from './pages/shop/ShopPageComponent';

class App extends React.Component
{
    render()
    {
        return(
            <div>
                <Route exact path="/" component={HomePageComponent}/>
                <Route path="/shop" component={ShopPageComponent} />
            </div>
        );
    }
}

export default App;