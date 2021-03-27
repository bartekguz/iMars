import React from 'react';
import logo from './imarslogo.png';
import Tilt from 'react-tilt';

const Logo = () => (
    <div className="ma4 mt0 pt5" style={{'margin-left':'27%'}}>
            <Tilt className="Tilt shadow-2" options={{ max: 40 }} style={{ height: 120, width: 120}}>
                  <div className="Tilt-inner">
                      <img style={{width: '120px', height: '120px'}} src={logo} alt="logo"/>
                  </div>

            </Tilt>
        <h2 className="white f2">Connect with friends <br/>and share your life!</h2>
    </div>
);

export default Logo;

