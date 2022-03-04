/*
 * Import - Module
 * *************** */
import axios from "axios";

import { GET_OFFRE_VISITEUR, GET_OFFRE_VISITEURID } from "./ActionTypes";

/*
 * Import types { ... }
 * ******************** */

/*
 * Actions
 * ******* */

// GET OFFRES VISITEUR
export const getOffreVisiteur = (data) => {
    return (dispatch) => {
        return axios
            .get("http://localhost:3033/api/offresvisiteur")
            .then((res) => {
                dispatch({ type: GET_OFFRE_VISITEUR, payload: res.data })
            })
            .catch((err) => console.log(err));
    };
};

export const getOffreVisiteurId = (id) => {
    return (dispatch) => {
        return axios
            .get(`http://localhost:3033/api/offresvisiteur/${id}`)
            .then((res) => {
                dispatch({ type: GET_OFFRE_VISITEURID, payload: res.data })
            })
            .catch((err) => console.log(err));
    };
};