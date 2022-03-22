/*
 * Import - Module
 * *************** */
import { api } from "configs/axios";

/*
 * Import types { ... }
 * ******************** */
import { GET_OFFRE_FAVORITE_ID, POST_OFFRE_FAVORITE, DELETE_OFFRE_FAVORITE } from "./ActionTypes";

/*
 * Actions
 * ******* */

// GET OFFRES FAVORITE
export const getOffreFavoriteId = (id) => {
    return (dispatch) => {
        return api
            .get(`/offrefavorite/${id}`, { headers: { Authorization: `${localStorage["user_token"]}` } })
            .then((res) => {
                if (res.data.token) localStorage["user_token"] = res.data.token;
                dispatch({ type: GET_OFFRE_FAVORITE_ID, payload: res.data })
            })
            .catch((err) => console.log(err));
    };
};

export const postOffreFavorite = (id) => {
    return (dispatch) => {
        return api
            .post(`/offrefavorite/${id}`, { headers: { Authorization: `${localStorage["user_token"]}` } })
            .then((res) => {
                if (res.data.token) localStorage["user_token"] = res.data.token;
                dispatch({ type: POST_OFFRE_FAVORITE, payload: res.data })
            })
            .catch((err) => console.log(err));
    };
};

export const deleteOffreFavorite = (id) => {
    return (dispatch) => {
        return api
            .post(`/offrefavorite/${id}`, { headers: { Authorization: `${localStorage["user_token"]}` } })
            .then((res) => {
                if (res.data.token) localStorage["user_token"] = res.data.token;
                dispatch({ type: DELETE_OFFRE_FAVORITE, payload: res.data })
            })
            .catch((err) => console.log(err));
    };
};