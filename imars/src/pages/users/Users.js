import React, {useState, useEffect} from 'react';
import axios from "axios";
import UserCard from '../../components/main/userCard/UserCard';
import Navigation from "../../components/main/navigation/Navigation";
import Menu from "../../components/main/menu/Menu";
import RightBar from "../../components/main/rightBar/RightBar";
import './users.css';

const Users = () => {

    const [usersList, setUsersList] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        let isMounted = true;
        const getUsers = async () => {
            try {
                const usersList = await axios.get('/allusers');
                if (isMounted) setUsersList(usersList.data.users);
            } catch (e) {
                console.log(e);
            }
        }
        getUsers();
        return () => { isMounted = false}
    }, [])

    const onSearchChange = (event) => {
        console.log(event.target.value)
        setSearchfield(event.target.value)
    }

    let filteredUsers = usersList.filter(user => user.name.toLowerCase().includes(searchfield.toLowerCase()))

    return (
        <>
            <Navigation/>
            <div className="usersWrapper">
                <Menu />
                <div className="usersCenter">
                    <div className="usersChild">
                        <div className="searchBar">
                            <input placeholder="Search for users" className="usersSearchInput" onChange={onSearchChange}/>
                        </div>
                        {filteredUsers.map((u) => (
                            <div className="cardChild">
                                <UserCard key={u.id} user={u} />
                            </div>
                        ))}
                    </div>
                </div>

                <RightBar />
            </div>
        </>
    )
};

export default Users;



