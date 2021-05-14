import React, { useContext } from 'react';
import './app.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Welcome from "./pages/welcome/Welcome";
import { AuthContext } from "./context/AuthContext";

const App = () => {

    const { user, token } = useContext(AuthContext);

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    {console.log("/")}
                    {console.log(user)}
                    {console.log(token)}
                    {user ? <Home /> : <Welcome />}
                </Route>

                <Route path='/welcome'>
                    {console.log("WELCOME")}
                    {console.log(user)}
                    {console.log(token)}
                    {user ? <Redirect to ='/' /> : <Welcome />}
                </Route>

                <Route path='/login'>
                    {console.log("LOGIN")}
                    {console.log(user)}
                    {console.log(token)}
                    {user ? <Redirect to='/' /> : <Login />}
                </Route>

                <Route path='/register'>
                    {console.log("REGISTER")}
                    {console.log(user)}
                    {console.log(token)}
                    {user ? <Redirect to='/login' /> : <Register />}
                </Route>

                <Route path='/profile/:id'>
                    {user ? <Profile /> : <Welcome />}
                </Route>
            </Switch>
        </Router>

    )
}

export default App;
