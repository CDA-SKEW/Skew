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
                console.log("res login", res.data);
                if (res.data.token) localStorage.setItem("user_token", res.data.token);
                dispatch({
                    type: LOGIN,
                    payload: res.data
                });
            })
            .catch((err) => console.log(err));
    };
};

// Check User
export const checkToken = (id) => {
    console.log("checkToken");
    return (dispatch) => {
        return axios
            .get(
                `http://localhost:3033/api/auth/${localStorage.getItem("user_token")}`
            )
            .then((res) => {
                console.log("check", res.data);
                if (res.data.user) {
                    dispatch({ type: CHECKTOKEN, payload: res.data });
                    // if (res.data.user.isVerified === 0)
                    //     localStorage.setItem(
                    //         "user_verified",
                    //         localStorage.getItem("user_token")
                    //     );
                    if (res.data.user.isAdmin === 1)
                        localStorage.setItem(
                            "user_admin",
                            localStorage.getItem("user_token")
                        );
                    if (res.data.user.isCandidat === 1)
                        localStorage.setItem(
                            "user_candidat",
                            localStorage.getItem("user_token")
                        );
                    if (res.data.user.isRecruteur === 1)
                        localStorage.setItem(
                            "user_recruteur",
                            localStorage.getItem("user_token")
                        );
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
