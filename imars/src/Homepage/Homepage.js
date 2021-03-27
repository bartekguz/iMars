import React from 'react';
import Logo from './components/Logo/Logo';
import Navigation from "./components/Navigation/Navigation";


const Homepage = () => (
    <div className="Homepage">
        <Navigation />
        <Logo />
    </div>
);

export default Homepage;