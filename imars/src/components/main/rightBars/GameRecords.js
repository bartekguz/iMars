import React from 'react';
import homePng from "../../../assets/menu/house.png";
import messagePng from "../../../assets/menu/message.png";
import usersPng from "../../../assets/menu/team.png";
import gamePng from "../../../assets/menu/gamepad.png";
import settingsPng from "../../../assets/menu/settings.png";

const GameRecords = () => {
    return (
        <div className="outline ml6 mt4" style={{width: "20rem"}}>
            <div className="bg-white-80 shadow-5 " style={{borderRadius: "1rem"}}>
                <nav className="flex flex-column flex-wrap justify-center items-center w-100 tc">
                    <div>
                        <p className="f4">Today's game records</p>
                    </div>


                </nav>
            </div>
        </div>
    );
};



export default GameRecords;
