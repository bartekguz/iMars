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

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    {user ? <Home /> : <Welcome />}
                </Route>

                <Route path='/welcome'>
                    {user ? <Redirect to ='/' /> : <Welcome />}
                </Route>

                <Route path='/login'>
                    {user ? <Redirect to='/' /> : <Login />}
                </Route>

                <Route path='/register'>
                    {user ? <Redirect to='/login' /> : <Register />}
                </Route>

                <Route path='/profile/:id'>
                    {user ? <Profile /> : <Welcome />}
                </Route>

                <Route path='/*'>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </Router>

    )
}

export default App;
