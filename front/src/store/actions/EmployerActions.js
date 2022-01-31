/*
 * Import - Module
 * *************** */
// import axios from "axios";

import { POST_PROFIL_EMPLOYER } from "./ActionTypes";


/*
 * Import types { ... }
 * ******************** */


/*
 * Actions
 * ******* */

// Get Api employer
export const getApiSiret = () => {
};

// Get Api employer
export const postFormProfilEmployer = (data) => {

    return (dispatch) => {
    console.log("POST_PROFIL_EMPLOYER action", data)   
    dispatch({ type: POST_PROFIL_EMPLOYER, payload: data });
    }
};
