import React from 'react';
import Tilt from "react-tilt";
import logo from "../../../assets/imarslogo.png";

const Navigation = ({ onRouteChange, isSignedIn, name }) => {
    if (isSignedIn) {
        return (
            <div>
                <nav className="flex justify-end flex-wrap">
                    <div className="mt4 ml5" style={{marginRight: 'auto'}}>
                        <Tilt className="Tilt shadow-2" options={{ max: 40 }} style={{ height: 150, width: 150}}>
                            <div className="Tilt-inner">
                                <img style={{width: '150px', height: '150px'}} src={logo} alt="logo"/>
                            </div>
                        </Tilt>
                    </div>
                    <p className="f2 white " style={{marginRight: '8%'}}>{`It's good to see you ${name}!`}</p>
                    <p onClick={() => onRouteChange('home')} className="f3 link b dim white pa3 mr4 pointer ttu tracked">Sign Out</p>
                </nav>
            </div>
        );
    } else {
        return (
            <div>
                <nav className="flex flex-wrap h5">

                    <div className="mt4 ml5" style={{marginRight: 'auto'}}>
                        <Tilt className="Tilt shadow-2" options={{ max: 40 }} style={{ height: 150, width: 150}}>
                            <div className="Tilt-inner">
                                <img style={{width: '150px', height: '150px'}} src={logo} alt="logo"/>
                            </div>
                        </Tilt>
                    </div>

                    <p onClick={() => onRouteChange('signin')} className="f3 link b dim white pa3 mr4 pointer ttu tracked h3">Sign In</p>
                    <p onClick={() => onRouteChange('register')} className="f3 link b dim white pa3 mr4 pointer ttu tracked h3">Sign Up</p>
                </nav>
            </div>
        )
    }
};



export default Navigation;
