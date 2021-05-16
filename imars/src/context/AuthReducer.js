// import Cookies from 'universal-cookie';
//
// const cookies = new Cookies();

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                token: null,
                isFetching: true,
                error: false
            };

        case "LOGIN_SUCCESS":
            //zmiana na localStorage wymaga zakomentowania 2 ponizszych linii
            // cookies.set("user", action.payload.user)
            // cookies.set("token", action.payload.user)

            return {
                user: action.payload.user,
                token: action.payload.token,
                isFetching: false,
                error: false
            };

        case "LOGIN_FAILURE":
            return {
                user: null,
                token: null,
                isFetching: false,
                error: action.payload
            };

        case "LOGOUT":
            localStorage.clear();

            //zmiana na localStorage wymaga zakomentowania 2 ponizszych linii oraz odkomentowania jednej powyzej
            // cookies.remove("user");
            // cookies.remove("token");

            return {
                user: null,
                token: null,
                isFetching: false,
                error: false
            };

        default:
            return state;
    }
};

export default AuthReducer;
