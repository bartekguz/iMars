import React from 'react';
import homePng from "../../../assets/menu/house.png";
import messagePng from "../../../assets/menu/message.png";
import usersPng from "../../../assets/menu/team.png";
import gamePng from "../../../assets/menu/gamepad.png";
import './menu.css';
import {Link} from "react-router-dom";

//TODO ŚCIEŻKI DO STRON PO ICH STWORZENIU
const Menu = () => {
        return (
            <div className="leftMenu">
                <div className="leftMenuWrapper bg-white-90 shadow-5">
                        <ul className="leftMenuList">
                                <li className="leftMenuListItem">
                                        <Link to='/'>
                                               <img className="pointer dim" src={homePng}  alt='homePng'/>
                                        </Link>
                                </li>

                                <li className="leftMenuListItem">
                                        <img className="pointer dim" src={messagePng}  alt='messagePng'/>
                                </li>

                                <li className="leftMenuListItem">
                                        <img className="pointer dim" src={usersPng}  alt='usersPng'/>
                                </li>

                                <li className="leftMenuListItem">
                                        <img className="pointer dim" src={gamePng}  alt='gamePng'/>
                                </li>
                        </ul>
                </div>
            </div>
        );
};

export default Menu;
