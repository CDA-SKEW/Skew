/*
 * Import - Module
 * *************** */
import { api } from "configs/axios";
import jwt_decode from 'jwt-decode'

import {
    LOGIN,
    CHECKTOKEN,
    REGISTER,
    CHANGEMDP,
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
        return api
            .post("/login", data)
            .then((res) => {
                if (res.data.success === 'success') {
                    if (res.data.token) localStorage["user_token"] = res.data.token;
                    res.data.token = jwt_decode(res.data.token)
                    res.data.authenticate = true
                    dispatch({ type: LOGIN, payload: res.data });
                } else {
                    res.data.authenticate = false
                    dispatch({ type: LOGIN, payload: res.data });
                }
            })
            .catch((err) => console.log(err));
    };
};

// Check User
export const checkToken = () => {
    return (dispatch) => {
        return api
            .get(`/auth/${localStorage["user_token"]}`)
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
        return api
            .post("/register", data)
            .then((res) => {
                dispatch({ type: REGISTER, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};

// Change pass
export const changePass = (data) => {
    return (dispatch) => {
        return api
            .post(`/auth/mail-lost-mdp`, data)
            .then((res) => {
                console.log('mailLostPass', res.data)
                dispatch({ type: CHANGEMDP, payload: res.data });
            })
            .catch((err) => console.log(err))
    }
}