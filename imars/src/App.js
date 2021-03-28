import React, { useEffect, useState} from 'react';
import './App.css';
import Navigation from "./Homepage/components/Navigation/Navigation";
import Logo from "./Homepage/components/Logo/Logo";
import Signin from "./Homepage/components/Signin/Signin";
import Register from "./Homepage/components/Register/Register";

const App = () => {
    const [route, setRoute] = useState('signin');
    const [isSignedIn, setSignedIn] = useState('false');

    const onRouteChange = (route) => {
        if (route === 'signout') {
            setSignedIn(false);
        } else if (route === 'home') {
            setSignedIn(true);
        }
        setRoute(route);
    }

    return (
        <div className="App">
            <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
            <Logo />
            { route === "signin"
                ? <Signin onRouteChange={onRouteChange}/>
                : <Register />
            }
        </div>
    )
}



export default App;
