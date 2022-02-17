/*
 * Import - Module
 * *************** */
import axios from "axios";

import {
    LOGIN,
    CHECKTOKEN,
    REGISTER,
} from "./ActionTypes";

/*
 * Import types { ... }
 * ******************** */

/*
 * Actions
 * ******* */

// Login
export const login = (data) => {
    return (dispatch) => {
        return axios
            .post("http://localhost:3033/api/login", data)
            .then((res) => {
                if (res.data.token) localStorage["user_token"] = res.data.token;
                dispatch({
                    type: LOGIN,
                    payload: res.data
                });
            })
            .catch((err) => console.log(err));
    };
};

// Check User
export const checkToken = () => {
    console.log("checkToken", localStorage["user_token"])
    return (dispatch) => {
        return axios
            .get(`http://localhost:3033/api/auth/${localStorage["user_token"]}`)
            .then((res) => {
                if (res.data.user) {
                    console.log("check", res.data);
                    dispatch({ type: CHECKTOKEN, payload: res.data });
                    // if (res.data.user.isVerified === 0)
                    //     localStorage["user_verified"] = localStorage["user_token"];
                    // if (res.data.user.isAdmin === 1)
                    //     localStorage["user_admin"] = localStorage["user_token"];
                    // if (res.data.user.isCandidat === 1)
                    //     localStorage["user_candidat"] = localStorage["user_token"];
                    // if (res.data.user.isRecruteur === 1)
                    //     localStorage["user_recruteur"] = localStorage["user_token"];
                }
            })
            .catch((err) => console.log(err));
    };
}

// REGISTER
export const register = (data) => {
    return (dispatch) => {
        return axios
            .post("http://localhost:3033/api/register", data)
            .then((res) => {
                dispatch({ type: REGISTER, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};
