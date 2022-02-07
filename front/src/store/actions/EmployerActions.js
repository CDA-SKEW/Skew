/*
 * Import - Module
 * *************** */
import { apiSiret } from "configs/axios";
import {
  GET_API_SIRET,
  GET_PROFIL_EMPLOYER,
  POST_OFFER,
  POST_PROFIL_EMPLOYER,
  PUT_PROFIL_EMPLOYER,
} from "./ActionTypes";

// import image en static mais à voir pour aller chercher l'image dans le back plus tard
import imageEmployer from "assets/images/imageEmployor.png";

const dataDefault = {
  user_id: 1,
  mail: "wilfried.cda@gmail.com",
  name: "Buno & Co",
  zipCode: "85600",
  siren: "356454356",
  siret: "40976852000135",
  address: "21 fze fzefjzpej",
  category: "fvevfeqrg",
  town: "Bonnetable",
  avatar:imageEmployer,
};

// const dataDefault = {
// }
const message ="Votre offre a bien été publiée !"
/*
 * Import types { ... }
 * ******************** */

/*
 * Actions
 * ******* */

// Get Api siret employer
export const getApiSiret = (siretNumber) => {
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

// get profil employer
export const getProfilEmployer = () => {
  return (dispatch) => {
    // console.log("GET_PROFIL_EMPLOYER action", data);
    dispatch({ type: GET_PROFIL_EMPLOYER, payload: dataDefault });
  };
};

// Post profil employer
export const postFormProfilEmployer = (data) => {
  return (dispatch) => {
    // console.log("POST_PROFIL_EMPLOYER action", data);
    dispatch({ type: POST_PROFIL_EMPLOYER, payload: data });
  };
};

// Put profil employer
export const putFormProfilEmployer = (data) => {
  return (dispatch) => {
    // console.log("PUT_PROFIL_EMPLOYER action", data);
    dispatch({ type: PUT_PROFIL_EMPLOYER, payload: data});
  };
};

// Post add offer
export const postFormAddOffer = (data) => {
  return (dispatch) => {
    // console.log("POST_OFFER action", data, message);
    dispatch({ type: POST_OFFER, payload: {data, message}});
  };
};
