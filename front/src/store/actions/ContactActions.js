/*
 * Import - Module
 * *************** */
import axios from "axios";

import { POST_CONTACT_US } from "./ActionTypes";

/*
 * Import types { ... }
 * ******************** */

/*
 * Actions
 * ******* */

// Post
export const PostContactUs = (data) => {
    return (dispatch) => {
        return axios
            .post("http://localhost:3033/api/contact", data)
            .then((res) => {
                dispatch({ type: POST_CONTACT_US, payload: res.data })
            })
            .catch((err) => console.log(err));
    };
};