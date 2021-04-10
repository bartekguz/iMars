import React, { useState, useEffect } from 'react';
import Navigation from "./components/start/Navigation/Navigation";
import Signin from "./components/start/Signin/Signin";
import Register from "./components/start/Register/Register";
import Home from "./components/start/Home/Home";
import Main from "./pages/main/Main";


const App = () => {
    const [route, setRoute] = useState('home');
    const [isSignedIn, setSignedIn] = useState(false);

    // useEffect(() => {
    //     fetch('http://localhost:8000/api/fun')
    //         .then(response => response.json())
    //         .then(console.log);
    // })

    const onRouteChange = (route) => {
        if (route === 'home') {
            setSignedIn(false);
        } else if (route === 'signin') {
            setSignedIn(false);
        } else if (route === 'main') {
            setSignedIn(true);
        }
        setRoute(route);
    }

    return (
        <div className="App">
            <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
            {(route === "home")
                ? <Home/>
                : (route === "signin")
                    ? <Signin onRouteChange={onRouteChange}/>
                    : (route === "register")
                        ? <Register onRouteChange={onRouteChange}/>
                        : <Main />
            }
        </div>
    )
}

export default App;
