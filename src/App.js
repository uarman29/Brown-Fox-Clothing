import React from 'react';
import HomePageComponent from './pages/homepage/HomePageComponent';
import { Route } from 'react-router-dom';
import './App.css';

class App extends React.Component
{
    render()
    {
        return(
            <div>
                <Route exact path="/" component={HomePageComponent}/>
            </div>
        );
    }
}

export default App;