/*
 * Import - Module
 * *************** */
import { api } from "configs/axios";

import { GET_OFFRE_FAVORITE_ID, POST_OFFRE_FAVORITE } from "./ActionTypes";

/*
 * Import types { ... }
 * ******************** */

/*
 * Actions
 * ******* */

// GET OFFRES FAVORITE
export const getOffreFavoriteId = (id) => {
    return (dispatch) => {
        return api
            .get(`/offrefavorite/${id}`)
            .then((res) => {
                dispatch({ type: GET_OFFRE_FAVORITE_ID, payload: res.data })
            })
            .catch((err) => console.log(err));
    };
};

export const postOffreFavorite = (id, data) => {
    console.log('data', data)
    return (dispatch) => {
        return api
            .get(`/offrefavorite/${id}`, data)
            .then((res) => {
                dispatch({ type: POST_OFFRE_FAVORITE, payload: res.data })
            })
            .catch((err) => console.log(err));
    };
};