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
  POST_PROFIL_EMPLOYER,
  PUT_ACTION_CANDIDATE,
  PUT_PROFIL_EMPLOYER,
  PUT_PROFIL_USER,
  PUT_PROFIL_USER_PW,
} from "./ActionTypes";


const id = 4;

const message = "Votre offre a bien été publiée !";
const messagePostCandidate = "Votre mail a bien été envoyé !";

/*
 * Actions
 * ******* */

// Get Api siret employer
export const getApiSiret = (siretNumber) => {
  // console.log("get siret action store ", siretNumber);
  return (dispatch) => {
    return apiSiret
      .get(siretNumber)
      .then((res) => {
        // console.log("resApi action store", res.data.etablissement);
        dispatch({ type: GET_API_SIRET, payload: res.data.etablissement });
      })
      .catch((err) => console.log(err));
  };
};

// get dashboard employer
export const getDashboardEmployer = () => {
  // console.log("getDashboardEmployer action store ");
  return (dispatch) => {
    return api
      .get(`/employer/dashboard/${id}`)
      .then((res) => {
        // console.log("return api getDashboardEmployer action store", res.data);
        dispatch({ type: GET_DASHBOARD_EMPLOYER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// get profil employer
export const getProfilEmployer = () => {
  // console.log("getProfilEmployer action store ");
  return (dispatch) => {
    return api
      .get(`/employer/profil/${id}`)
      .then((res) => {
        // console.log("return api getProfilEmployer action store", res.data);
        dispatch({ type: GET_PROFIL_EMPLOYER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Put profil employer
export const putFormProfilEmployer = (data) => {
  return (dispatch) => {
    // console.log("PUT_PROFIL_EMPLOYER action",data);
    return api
      .put(`/employer/profil/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log("PUT_PROFIL_EMPLOYER action", res.data);
        dispatch({ type: PUT_PROFIL_EMPLOYER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// get profil user
export const getProfilUser = () => {
  return (dispatch) => {
    // console.log("GET_PROFIL_USER action");
    return api
      .get(`/employer/profilUser/${id}`)
      .then((res) => {
        // console.log("return api getProfil User action store", res.data);
        dispatch({ type: GET_PROFIL_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Put profil User email
export const putFormProfilUser = (data) => {
  return (dispatch) => {
    // console.log("PUT_PROFIL_USER action", data);
    return api
      .put(`/employer/profilUser/${id}`, data, {
      })
      .then((res) => {
        // console.log("PUT_PROFIL_EMPLOYER action", res.data);
        dispatch({ type: PUT_PROFIL_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Put profil User password
export const putFormProfilUserPw = (data) => {
  return (dispatch) => {
    // console.log("PUT_PROFIL_USER PW action", data);
    return api
      .put(`/employer/profilUserPw/${id}`, data, {
      })
      .then((res) => {
        // console.log("PUT_PROFIL_EMPLOYER action retour back", res.data);
        dispatch({ type: PUT_PROFIL_USER_PW, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};


// get offer
export const getOffer = () => {
  return (dispatch) => {
    // console.log("GET_OFFER action")
    return api
      .get(`/employer/offer/${id}`)
      .then((res) => {
        // console.log("return api getoffer by Id action store", res.data);
        dispatch({ type: GET_OFFER, payload: res.data });
      })
      .catch((err) => console.log(err));

  };
};

// Post add offer
export const postFormAddOffer = (data) => {
  return (dispatch) => {
    // console.log("POST_OFFER action", data, message);
    dispatch({ type: POST_OFFER, payload: { data, message } });
  };
};

//  Delete offer
export const deleteOffer = (id) => {
  return (dispatch) => {
    console.log("DELETE_OFFER action", id);
    // dispatch({ type: DELETE_OFFER, payload: {data, messagePostCandidate}});
  };
};

//  Action candidate
export const putActionCandidate = (data) => {
  return (dispatch) => {
    // console.log("PUT_ACTION_CANDIDATE", data);
    dispatch({
      type: PUT_ACTION_CANDIDATE,
      payload: { data, messagePostCandidate },
    });
  };
};

// Post message candidate
export const postMessageCandidate = (data) => {
  // console.log("POST_MESSAGE_CANDIDATE action", data);
  return (dispatch) => {
    // console.log("POST_MESSAGE_CANDIDATE action", data, messagePostCandidate);
    return api
      .post(`employer/candidat/message`, data)
      .then((res) => {
        // console.log("return api getoffer by Id action store", res.data);
        dispatch({ type: POST_MESSAGE_CANDIDATE, payload: res.data });
      })
      .catch((err) => console.log(err));

  };
};

// Non utilisé dans l'application car profil crée par défaut au register
// Post profil employer
// export const postFormProfilEmployer = (data) => {
//   return (dispatch) => {
//     // console.log("POST_PROFIL_EMPLOYER action", data);
//     dispatch({ type: POST_PROFIL_EMPLOYER, payload: data });
//   };
// };
