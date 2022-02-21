/*
 * Import - Module
 * *************** */
import axios from "axios";

import { POST_CONTACT } from "./ActionTypes";

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
            .post("http://localhost:3033/api/contact", data)
            .then((res) => {
                dispatch({ type: POST_CONTACT, payload: res.data })
            })
            .catch((err) => console.log(err));
    };
};