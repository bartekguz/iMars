import React, { useState } from 'react';
import Navigation from "./components/start/Navigation/Navigation";
import Signin from "./components/start/Signin/Signin";
import Register from "./components/start/Register/Register";
import Home from "./components/start/Home/Home";
import Menu from "./components/main/Menu/Menu";
import Posts from "./components/main/Posts/Posts";
import GameRecords from "./components/main/rightBars/GameRecords";
import Friends from "./components/main/rightBars/Friends";
import Footer from "./components/start/Footer/Footer";

const post = {
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
    const [route, setRoute] = useState('home');
    const [isSignedIn, setSignedIn] = useState(false);
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
            <Navigation name={user.name} isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
            {(route === "home")
                ? <Home/>
                : (route === "signin")
                    ? <Signin loadUser={loadUser} onRouteChange={onRouteChange}/>
                    : (route === "register")
                        ? <Register loadUser={loadUser} onRouteChange={onRouteChange}/>
                        : <div className="flex mt4">
                            <Menu />
                            <Posts post={post}/>
                                <div className="flex flex-column">
                                    <GameRecords />
                                    <Friends />
                                </div>
                        </div>
            }
            <Footer />
        </div>
    )
}

export default App;
