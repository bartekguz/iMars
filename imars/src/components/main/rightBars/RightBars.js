import React from 'react';
import Friends from "../../share/Friends";
import GameRecords from "../../share/GameRecords";
import './RightBars.css';

const rightBars = () => {
    return (
        <div className="rightBars ">
            <Friends />
            <GameRecords />
        </div>
    );
};



export default rightBars;
