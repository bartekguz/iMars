import React from 'react';
import homePng from "../../../assets/menu/house.png";
import messagePng from "../../../assets/menu/message.png";
import usersPng from "../../../assets/menu/team.png";
import gamePng from "../../../assets/menu/gamepad.png";
import settingsPng from "../../../assets/menu/settings.png";

const Menu = () => {
        return (
            <div className="outline self-center" style={{width: "5rem", marginLeft: "6rem"}}>
                <div className="bg-white-80 shadow-5" style={{borderRadius: "1rem"}}>
                    <nav className="flex flex-column flex-wrap justify-center items-center tc">
                        <div>
                            <p><img className="pointer dim" src={homePng}  alt='homePng'/></p>
                        </div>

                        <div>
                            <p ><img className="pointer dim" src={messagePng}  alt='messagePng'/></p>
                        </div>

                        <div>
                            <p><img className="pointer dim" src={usersPng}  alt='usersPng'/></p>
                        </div>

                        <div>
                            <p><img className="pointer dim" src={gamePng}  alt='gamePng'/></p>
                        </div>

                        <div>
                            <p><img className="pointer dim" src={settingsPng}  alt='settingsPng'/></p>
                        </div>
                    </nav>
                </div>
            </div>
        );
};

export default Menu;
