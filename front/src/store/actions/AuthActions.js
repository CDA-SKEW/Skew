/*
 * Import - Module
 * *************** */
import axios from "axios";
import jwt_decode from 'jwt-decode'

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
                if (res.data.success) {
                    if (res.data.token) localStorage["user_token"] = res.data.token;
                    res.data.token = jwt_decode(res.data.token)
                    res.data.authenticate = true
                    dispatch({ type: LOGIN, payload: res.data });
                }
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
                    dispatch({ type: CHECKTOKEN, payload: res.data });
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
