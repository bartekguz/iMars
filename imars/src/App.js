import React, { useEffect, useState} from 'react';
import './App.css';
import Navigation from "./Homepage/components/Navigation/Navigation";
import Logo from "./Homepage/components/Logo/Logo";
import Signin from "./Homepage/components/Signin/Signin";

const App = () => {
    const [route, setRoute] = useState('signin');

    const onClick = () => {
        setRoute(route+1);
    }
    return (
        <div className="App">
            <Navigation />
            { route === "signin"
                ? <Signin />
                : <Logo />
            }
        </div>
    )
}



export default App;
