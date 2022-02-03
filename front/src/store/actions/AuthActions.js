/*
 * Import - Module
 * *************** */
// import axios from "axios";

import { GET_AUTH } from "./ActionTypes";

/*
 * Import types { ... }
 * ******************** */

/*
 * Actions
 * ******* */

// GET AUTH
export const getAuth = () => {
    const authData = [
        {
            id: 1,
            mail: 'candidat@gmail.com',
            role: 'candidat',
            pass: 'candidat',
        },
        {
            id: 2,
            mail: 'recruteur@gmail.com',
            role: 'recruteur',
            pass: 'recruteur',
        },
        {
            id: 3,
            mail: 'admin@gmail.com',
            role: 'admin',
            pass: 'admin',
        },
    ];
    return (dispatch) => {
        console.log("get:auth");
        dispatch({ type: GET_AUTH, payload: authData });
    };
};