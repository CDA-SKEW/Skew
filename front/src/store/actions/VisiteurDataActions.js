/*
 * Import - Module
 * *************** */
import { api } from "configs/axios";

import { GET_VISITEUR_DATA_ENTREPRISE_AVATAR } from "./ActionTypes";

/*
 * Import types { ... }
 * ******************** */

/*
 * Actions
 * ******* */

// GET VISITEUR DATA
export const getVisiteurDataEntrepriseAvatar = (data) => {
    return (dispatch) => {
        return api
            .get("/visiteur-data")
            .then((res) => {
                dispatch({ type: GET_VISITEUR_DATA_ENTREPRISE_AVATAR, payload: res.data })
            })
            .catch((err) => console.log(err));
    };
};