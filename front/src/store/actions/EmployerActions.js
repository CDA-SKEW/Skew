/*
 * Import - Module
 * *************** */
import { apiSiret, api } from "configs/axios";
import {
  DELETE_OFFER,
  GET_API_SIRET,
  GET_DASHBOARD_EMPLOYER,
  GET_OFFER,
  GET_PROFIL_EMPLOYER,
  GET_PROFIL_USER,
  POST_MESSAGE_CANDIDATE,
  POST_OFFER,
  // POST_PROFIL_EMPLOYER,
  PUT_ACTION_CANDIDATE,
  PUT_PROFIL_EMPLOYER,
  PUT_PROFIL_USER,
  PUT_PROFIL_USER_PW,
} from "./ActionTypes";


/*
 * Actions
 * ******* */

// Get Api siret employer
export const getApiSiret = (siretNumber) => {
  return (dispatch) => {
    return apiSiret
      .get(siretNumber)
      .then((res) => {
        dispatch({ type: GET_API_SIRET, payload: res.data.etablissement });
      })
      .catch((err) => console.log(err));
  };
};

// get dashboard employer
export const getDashboardEmployer = () => {
  return (dispatch) => {
    return api
      .get(`/employer/dashboard`, {
        headers: { Authorization: `${localStorage["user_token"]}` },
      })
      .then((res) => {
        if (res.data.token) localStorage["user_token"] = res.data.token;
        dispatch({ type: GET_DASHBOARD_EMPLOYER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// get profil employer
export const getProfilEmployer = () => {
  return (dispatch) => {
    return api
      .get(`/employer/profil`, { headers: { Authorization: `${localStorage["user_token"]}` }, })
      .then((res) => {
        if (res.data.token) localStorage["user_token"] = res.data.token;
        dispatch({ type: GET_PROFIL_EMPLOYER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Put profil employer
export const putFormProfilEmployer = (data) => {
  return (dispatch) => {
    return api
      .put(`/employer/profil`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${localStorage["user_token"]}`
        },
      })
      .then((res) => {
        if (res.data.token) localStorage["user_token"] = res.data.token;
        dispatch({ type: PUT_PROFIL_EMPLOYER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// get profil user
export const getProfilUser = () => {
  return (dispatch) => {
    return api
      .get(`/employer/profilUser`, {
        headers: { Authorization: `${localStorage["user_token"]}` },
      })
      .then((res) => {
        if (res.data.token) localStorage["user_token"] = res.data.token;
        dispatch({ type: GET_PROFIL_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Put profil User email
export const putFormProfilUser = (data) => {
  return (dispatch) => {
    return api
      .put(`/employer/profilUser`, data, {
        headers: { Authorization: `${localStorage["user_token"]}` },
      })
      .then((res) => {
        if (res.data.token) localStorage["user_token"] = res.data.token;
        dispatch({ type: PUT_PROFIL_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Put profil User password
export const putFormProfilUserPw = (data) => {
  return (dispatch) => {
    return api
      .put(`/employer/profilUserPw`, data, {
        headers: { Authorization: `${localStorage["user_token"]}` },
      })
      .then((res) => {
        if (res.data.token) localStorage["user_token"] = res.data.token;
        dispatch({ type: PUT_PROFIL_USER_PW, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// get offer
export const getOffer = () => {
  return (dispatch) => {
    return api
      .get(`/employer/offer`, { headers: { Authorization: `${localStorage["user_token"]}` }, })
      .then((res) => {
        if (res.data.token) localStorage["user_token"] = res.data.token;
        dispatch({ type: GET_OFFER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Post add offer
export const postFormAddOffer = (data) => {
  return (dispatch) => {
    return api
      .post("/employer/offer", data, { headers: { Authorization: `${localStorage["user_token"]}` }, })
      .then((res) => {
        if (res.data.token) localStorage["user_token"] = res.data.token
        dispatch({ type: POST_OFFER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

//  Delete offer  
export const deleteOffer = (idOffer) => {
  return (dispatch) => {
    return api
      .delete(`/employer/offer/${idOffer}`, { headers: { Authorization: `${localStorage["user_token"]}` } })
      .then((res) => {
        if (res.data.token) localStorage["user_token"] = res.data.token
        dispatch({ type: DELETE_OFFER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

//  Action candidate
export const putActionCandidate = (data) => { 
  return (dispatch) => {
    return api
      .put(`/employer/offer/candidat/${data.user_id}`, data, { headers: { Authorization: `${localStorage["user_token"]}` } })
      .then((res) => {
        if (res.data.token) localStorage["user_token"] = res.data.token
        dispatch({ type: PUT_ACTION_CANDIDATE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Post message candidate
export const postMessageCandidate = (data) => {
  return (dispatch) => {
    return api
      .post("employer/candidat/message", data, { headers: { Authorization: `${localStorage["user_token"]}` } })
      .then((res) => {
        if (res.data.token) localStorage["user_token"] = res.data.token
        dispatch({ type: POST_MESSAGE_CANDIDATE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Non utilisé dans l'application car profil crée par défaut au register
// Post profil employer
// export const postFormProfilEmployer = (data) => {
//   return (dispatch) => {
//     dispatch({ type: POST_PROFIL_EMPLOYER, payload: data });
//   };
// };
