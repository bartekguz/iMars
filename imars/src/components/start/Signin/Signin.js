import React, { useState } from 'react';
import emailpng from '../../../assets/register/email.png';
import keypng from '../../../assets/register/key.png';

const Signin = ({ onRouteChange, loadUser, onSignedInChange }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDataCorrect, setDataCorrect] = useState(false);

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitSignin = async () => {
        let obj = {email, password};

        // eslint-disable-next-line no-unused-vars
        const result = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
            .then(response => response.json())
            .then(user => {
                if (user.user_id) {
                    loadUser(user);
                    onSignedInChange(true);
                    onRouteChange('home');
                } else {
                    setDataCorrect(true);
                }
            })
    }

    return (
            <article className="br4 b--black-10 mv2 w-100 w-50-m w-20-l mw6 shadow-5 center">
                <main className="br4 pa4 black bg-white-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="center f3 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                        className="shadow-5 f6 pa2 input-reset ba b--white-025 bg-transparent w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        placeholder="Enter your Email"
                                        style={{background: `url(${emailpng}) no-repeat scroll 5px`, paddingLeft: '40px'}}
                                        onChange={onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                        className="shadow-5 f6 pa2 input-reset ba b--white-025 bg-transparent w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        style={{background: `url(${keypng}) no-repeat scroll 5px`, paddingLeft: '40px'}}
                                        onChange={onPasswordChange}
                                />
                            </div>
                        </fieldset>

                        {isDataCorrect &&
                            <div>
                                <p className="f3 red tc">Invalid email or password!</p>
                            </div>
                        }

                        <div>
                                <input onClick={onSubmitSignin} className="b br4 w-100 pv2 input-reset ba b--black bg-black tracked dim pointer f5 db center white" type="submit" value="LOGIN" />
                        </div>
                        <div className="lh-copy mt2">
                            <p className="mt4 f6 normal pointer link dim black tc">Don't have Account? <b>Sign up</b></p>
                        </div>
                    </div>
                </main>
            </article>
    )
};


export default Signin;

