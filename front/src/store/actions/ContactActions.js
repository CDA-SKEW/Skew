/*
 * Import - Module
 * *************** */
import { api } from "configs/axios";

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
        return api
            .post("/contact", data)
            .then((res) => {
                dispatch({ type: POST_CONTACT_US, payload: res.data })
            })
            .catch((err) => console.log(err));
    };
};