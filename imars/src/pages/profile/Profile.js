import React, {useContext, useEffect, useRef, useState} from 'react';
import Navigation from "../../components/main/navigation/Navigation";
import Menu from "../../components/main/menu/Menu";
import RightBar from "../../components/main/rightBar/RightBar";
import './profile.css';
import Feed from "../../components/main/feed/Feed";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import swal from "sweetalert";
import {Add, Cancel, Remove} from '@material-ui/icons';
import {AuthContext} from "../../context/AuthContext";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";

const Profile = () => {

    const { user: currentUser } = useContext(AuthContext);

    const [user, setUser] = useState({});
    const paramsUserId = useParams().id;
    const history = useHistory();
    const [isFriend, setIsFriend] = useState(false);
    const [updateFriends, setUpdateFriends] = useState();
    const [updateUser, setUpdateUser] = useState();
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);

    const nameField = useRef(currentUser.name);
    const lastnameField = useRef(currentUser.lastname);
    const genderField = useRef(currentUser.gender);
    const locationField = useRef(currentUser.location);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        let isMounted = true;

        const isFriend = async () => {
            try {
                const res = await axios.get(`/friends/${paramsUserId}`);
                if (isMounted) setIsFriend(res.data.friend)
            } catch (e) {
                console.log(e);
            }
        }
        isFriend();
        return () => { isMounted = false }
    }, [paramsUserId])

    useEffect( () => {
        let isMounted = true;

        const fetchUser = async () => {
            try {
                const res = await axios.get(`/users/${paramsUserId}`);
                if (res.data.id) {
                    isMounted && setUser(res.data)
                } else {
                    history.push('/')
                    await swal("Ops!", `User with ID ${paramsUserId} does not exist!`, "error");
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchUser();
        return () => { isMounted = false }
    }, [paramsUserId, history, updateUser])

    const handleClick = async () => {
        try {
            await axios.get(`/users/${paramsUserId}/friend`)
            setIsFriend(!isFriend)
            setUpdateFriends(Date().toLocaleString())
        } catch (err) {

        }
    }

    const acceptHandler = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", nameField.current.value);
        data.append("lastname", lastnameField.current.value);
        file && data.append("image", file);
        data.append("gender", genderField.current.value);
        data.append("location", locationField.current.value);
        data.append("_method", "PATCH");

        try {
            await axios.post("/users", data);
            const res = await axios.get("/users");
            await localStorage.setItem("user", JSON.stringify(res.data))
            setUpdateUser(Date().toLocaleString())
        } catch (e) {
            await swal("Ops!", `You have to provide data!`, "error");
        }
    }

    return (
        <>
            <Navigation updateUser={updateUser} />
            <div className="profileWrapper">
                <Menu />

                <div className="profile">

                    <div className="bg bg-white-80">

                        <div className="profileTop">
                            {currentUser.id === parseInt(paramsUserId) &&
                            <Button aria-controls="simple-menu" aria-haspopup="true" className="editButton" onClick={handleClickOpen}>
                                <b>Edit</b>
                            </Button>}

                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        To edit user info, fill fields below.
                                    </DialogContentText>
                                    <form onSubmit={acceptHandler}>
                                        Avatar:
                                        <br />
                                        <Button
                                            variant="contained"
                                            component="label"
                                        >
                                            Upload Avatar
                                            <input
                                                type="file"
                                                hidden
                                                id="file"
                                                accept=".png,.jpeg,.jpg"
                                                onChange={(e) => setFile(e.target.files[0])}
                                            />
                                        </Button>
                                        {file && (
                                        <div className="updateImgContainer">
                                            <img className="h4 w4" src={URL.createObjectURL(file)} alt="" />
                                            <Cancel className="updateCancel" onClick={() => setFile(null)}/>
                                        </div>
                                        )}
                                        <br /><br />
                                        Name:
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            type="text"
                                            defaultValue={nameField.current}
                                            inputRef={nameField}
                                            fullWidth
                                        />
                                        Lastname:
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="lastname"
                                            type="text"
                                            defaultValue={lastnameField.current}
                                            inputRef={lastnameField}
                                            fullWidth
                                        />
                                        Gender:
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="gender"
                                            type="text"
                                            defaultValue={genderField.current}
                                            inputRef={genderField}
                                            fullWidth
                                        />
                                        Location:
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="location"
                                            type="text"
                                            defaultValue={locationField.current}
                                            inputRef={locationField}
                                            fullWidth
                                        />
                                        <button className="editSubmitButton" type="submit" onClick={handleClose} autoFocus>Accept</button>
                                    </form>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        <b>Cancel</b>
                                    </Button>
                                </DialogActions>
                            </Dialog>

                            {user.name && <img className="profileUserImg" src={user.avatar ? `http://localhost:8000/storage/${user.avatar}` : `https://eu.ui-avatars.com/api/?name=${user.name + ' ' + user.lastname}`} alt="profileimg"/>}
                        </div>

                        <div className="profileInfo black">
                            {user && <span className="profileInfoName">{user.name} {user.lastname}</span>}
                            {user && <span className="profileInfoDesc">{user.location}</span>}
                            {user && <span className="profileInfoDesc">{user.date_of_birth}</span>}
                            {user && <span className="profileInfoDesc">{user.gender}</span>}

                            {currentUser.id !== parseInt(paramsUserId) && (
                                user.name && <button className="profileFollowButton dim" onClick={handleClick}>
                                    {isFriend ? "Unfollow" : "Follow"}
                                    {isFriend ? <Remove /> : <Add />}
                                </button>
                            )}
                        </div>


                    </div>


                    <div className="profileBottom">
                        <Feed id={paramsUserId} />
                    </div>
                </div>
                <RightBar id={paramsUserId} updateFriends={updateFriends} updateUser={updateUser} />
            </div>

        </>
    )
};


export default Profile;

