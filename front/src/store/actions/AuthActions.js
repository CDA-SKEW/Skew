/*
 * Import - Module
 * *************** */
import axios from "axios";

import {
    LOGIN,
    // REGISTER,
} from "./ActionTypes";

/*
 * Import types { ... }
 * ******************** */

/*
 * Actions
 * ******* */

// GET AUTH
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
