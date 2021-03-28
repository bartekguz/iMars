import React from 'react';
import logo from './imarslogo.png';
import Tilt from 'react-tilt';

const Logo = () => (
    <div className="mt0 ml6">
            <Tilt className="Tilt shadow-2" options={{ max: 40 }} style={{ height: 150, width: 150}}>
                  <div className="Tilt-inner">
                      <img style={{width: '150px', height: '150px'}} src={logo} alt="logo"/>
                  </div>
            </Tilt>
            {/*<h2 className="white f2">Connect with friends <br/>and share your life!</h2>*/}
    </div>
);

export default Logo;

