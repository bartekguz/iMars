import React, { useState } from 'react';
import emailpng from '../../../assets/register/email.png';
import keypng from '../../../assets/register/key.png';
import namepng from '../../../assets/register/name.png';
import datepng from '../../../assets/register/date.png';

const Signup = ({ onRouteChange, loadUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [date_of_birth, setDateofbirth] = useState("");


    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const onNameChange = (event) => {
        let value = event.target.value;
        let str = value.split(' ');
        setName(str[0]);
        setLastname(str[1]);
    }

    const onDateChange = (event) => {
        setDateofbirth(event.target.value)
    }

    const onSubmitRegister = async () => {
        let obj = {email, password, name, lastname, date_of_birth};

        let result = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
            .then(response => response.json())
            .then(user => {
                console.log(user);
                if (user.id) {
                    loadUser(user);
                    onRouteChange('main');
                }
            })
    }

    return (
        <article className="br4 b--black-10 mv2 w-100 w-50-m w-20-l mw6 shadow-5 center">
            <main className="br4 pa4 black bg-white-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="center f3 fw6 ph0 mh0">Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Full Name</label>
                            <input className="shadow-5 f6 pa2 input-reset ba b--white-025 bg-transparent w-100"
                                   type="text"
                                   name="name" id="name"
                                   placeholder="Enter your Name"
                                   style={{background: `url(${namepng}) no-repeat scroll 5px`, paddingLeft: '40px'}}
                                   onChange={onNameChange}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Date of Birth</label>
                            <input className="shadow-5 pa2 f6 input-reset ba b--white-025 bg-transparent w-100"
                                   type="date"
                                   name="date-of-birth"
                                   id="date-of-birth"
                                   style={{boxSizing: 'border-box', background: `url(${datepng}) no-repeat scroll 5px`, paddingLeft: '40px'}}
                                   onChange={onDateChange}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="shadow-5 f6 pa2 input-reset ba b--white-025 bg-transparent w-100"
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
                            <input className="shadow-5 f6 pa2 input-reset ba b--white-025 bg-transparent w-100"
                                   type="password"
                                   name="password" id="password"
                                   placeholder="Enter your password"
                                   style={{background: `url(${keypng}) no-repeat scroll 5px`, paddingLeft: '40px'}}
                                   onChange={onPasswordChange}
                            />
                        </div>
                    </fieldset>
                    <div>
                        <input onClick={onSubmitRegister} className="b br4 w-100 pv2 input-reset ba b--black bg-black tracked pointer f5 db center white dim" type="submit" value="Signup" />
                    </div>
                    <div className="lh-copy mt2">
                        <p className="mt4 f6 dim normal link pointer black tc">Have an Account? <b>Sign in</b></p>
                    </div>
                </div>
            </main>
        </article>
    )
};


export default Signup;

