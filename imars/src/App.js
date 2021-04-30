import React, { useState } from 'react';
import Navigation from "./components/alwaysExists/Navigation/Navigation";
import Signin from "./components/start/Signin/Signin";
import Register from "./components/start/Register/Register";
import Home from "./components/start/Home/Home";
import Menu from "./components/main/Menu/Menu";
import Posts from "./components/main/Posts/Posts";
import GameRecords from "./components/share/GameRecords";
import Friends from "./components/share/Friends";
import Footer from "./components/alwaysExists/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from "./pages/Login/Login";
import HomePage from './pages/Home/Home';

const posts = {
    post_id: 71,
    body: "Dzisiaj byłem w sklepie i spotkałem niedźwiedzia!",
    image: "https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg",
    datetime: "2019-02-15",
    rockets: "3",
    comments: {
        1: {
            comment_id: 1,
            body: "Ale fajnie! Wow!",
            datetime: "2019-02-16",
            user_id: [2, {
                user_id: 2,
                email: 'kuba@gmail.com',
                name: 'Jakub',
                lastname: 'Klocek',
                date_of_birth: '1999-01-11',
                gender: 'male',
                avatar: 'http://placehold.it/32x32',
                location: 'Poland',
                status: '',
                role: 'admin'
            }]
        },
        2: {
            comment_id: 1,
            body: "Ale fajnie! Wow!",
            datetime: "2019-02-16",
            user_id: [2, {
                user_id: 2,
                email: 'kuba@gmail.com',
                name: 'Jakub',
                lastname: 'Klocek',
                date_of_birth: '1999-01-11',
                gender: 'male',
                avatar: 'http://placehold.it/32x32',
                location: 'Poland',
                status: '',
                role: 'admin'
            }]
    }},
    user_id: [1, {
        user_id: 1,
        email: 'bartek@gmail.com',
        name: 'Bartosz',
        lastname: 'Guzik',
        date_of_birth: '1999-11-11',
        gender: 'male',
        avatar: 'http://placehold.it/32x32',
        location: 'Poland',
        status: '',
        role: 'admin'
        }
    ]
}

const App = () => {
    const [routeLoginPage, setRouteLoginPage] = useState('home');
    const [isSignedIn, setSignedIn] = useState(false);
    const [background, setBackground] = useState('loginBackground App');
    const [user, setUser] = useState({
        user_id: '',
        email: '',
        password: '',
        name: '',
        lastname: '',
        date_of_birth: '',
        gender: '',
        avatar: '',
        location: '',
        status: '',
        role: ''
    })


    const loadUser = (data) => {
        setUser({
            user_id: data.user_id,
            email: data.email,
            password: data.password,
            name: data.name,
            lastname: data.lastname,
            date_of_birth: data.date_of_birth
        })
    }

    const onRouteChange = (route) => {
        if (route === 'home') {
            setRouteLoginPage(route);
        } else if (route === 'signin') {
            setRouteLoginPage(route);
        } else if (route === 'register') {
            setRouteLoginPage(route);
        }
    }

    const onSignedInChange = (change) => {
        if (change === true) {
            setSignedIn(true);
        } else {
            setSignedIn(false);
        }
    }

    return (
        <Router>
            <div className={ background }>
                {/*<Navigation name={ user.name } isSignedIn={ isSignedIn } onRouteChange={onRouteChange} />*/}

                {/*<Route*/}
                {/*    path='/'*/}
                {/*    exact*/}
                {/*    render={() => (*/}
                {/*        <LoginPage onSignedInChange={onSignedInChange} loadUser={loadUser} onRouteChange={onRouteChange} routeLoginPage={routeLoginPage} />*/}
                {/*    )}*/}
                {/*/>*/}

                {/*{ isSignedIn &&*/}
                {/*<Route*/}
                {/*    path='/home'*/}
                {/*    render={() => (*/}
                {/*        <HomePage />*/}
                {/*    )}*/}
                {/*/>*/}
                {/*}*/}
                <HomePage />


                {/*{(route === "home")*/}
                {/*    ? <Home/>*/}
                {/*    : (route === "signin")*/}
                {/*        ? <Signin loadUser={loadUser} onRouteChange={onRouteChange}/>*/}
                {/*        : (route === "register")*/}
                {/*            ? <Register loadUser={loadUser} onRouteChange={onRouteChange}/>*/}
                {/*            : <div className="flex mt4">*/}
                {/*                <Menu />*/}
                {/*                <Posts posts={posts}/>*/}
                {/*                    <div className="flex flex-column">*/}
                {/*                        <GameRecords />*/}
                {/*                        <Friends />*/}
                {/*                    </div>*/}
                {/*            </div>*/}
                {/*}*/}
                {/*<Footer />*/}
            </div>
        </Router>

    )
}

export default App;
