import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";
// import Cookies from 'universal-cookie';
//
// const cookies = new Cookies();

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: JSON.parse(localStorage.getItem("token")) || null,
    //zmiana na localStorage wymaga zakomentowania 2 ponizszych linii oraz odkomentowania 2 powyzszych linii
    // user: cookies.get("user") || null,
    // token: cookies.get("token") || null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    //zmiana na localStorage wymaga odkomentowania ponizszego hooka

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
        localStorage.setItem("token", JSON.stringify(state.token))
        // cookies.set("user", state.user)
        // cookies.set("token", state.token)

    }, [state.user, state.token])

    return (
        <AuthContext.Provider value={{
            user: state.user,
            token: state.token,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    )
}