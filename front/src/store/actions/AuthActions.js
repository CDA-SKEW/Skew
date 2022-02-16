/*
 * Import - Module
 * *************** */
import axios from "axios";

import {
    LOGIN,
    CHECK,
    // REGISTER,
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
                console.log("res login", res.data);
                //         if (res.data.token) localStorage.setItem("user_token", res.data.token);
                dispatch({
                    type: LOGIN,
                    payload: res.data
                });
            })
            .catch((err) => console.log(err));
    };
};

// Check User
export const check = (id) => {
    console.log("check");
    return (dispatch) => {
        return axios
            .get(
                `http://localhost:3030/api/auth/${id}`
            )
            .then((res) => {
                console.log("check", res.data);
                if (res.data.user) {
                    dispatch({ type: CHECK, payload: res.data });
                    if (res.data.user.isVerified === true)
                        localStorage.setItem(
                            "user_verified",
                            localStorage.getItem("user_token")
                        );
                    if (res.data.user.isAdmin === true)
                        localStorage.setItem(
                            "user_admin",
                            localStorage.getItem("user_token")
                        );
                }
            })
            .catch((err) => console.log(err));
    };
}

// POST AUTH
export const register = () => {
    return (dispatch) => {
        //     return axios
        //         .post("adresse API")
        //         .then((res) => {
        // dispatch({ type: POST_AUTH, payload: res.data });
        //         })
        //         .catch((err) => console.log(err));
    };
};
