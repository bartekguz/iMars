import React from 'react';
import './rightBar.css';
import { Users } from '../../fakeData';
import UsersFriendsList from "../usersFriendsList/UsersFriendsList";
import UsersGameRecords from "../usersGameRecords/UsersGameRecords";

const rightBar = ({ profile }) => {

    const HomeRightbar = () => {
        return (
            <>
                <h3 className="gameRecordsTitle">Today's game records</h3>
                <ul className="gameRecordsList">
                    {Users.map((u) => {
                        return <UsersGameRecords key={u.id} user={u} />
                    })}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h3 className="gameRecordsTitle">Personal's game records</h3>
                <ul className="gameRecordsList">
                    {Users.map((u) => {
                        return <UsersGameRecords key={u.id} user={u} />
                    })}
                </ul>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="gameRecordsContainer bg-white-90">
                    {profile ? <ProfileRightbar /> : <HomeRightbar />}
                </div>

                <div className="friendsListContainer bg-white-90">
                    <h3 className="friendsListTitle">Friends list</h3>
                    <ul className="friendsList">
                        {Users.map((u) => (
                            <UsersFriendsList key={u.id} user={u} />
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default rightBar;
