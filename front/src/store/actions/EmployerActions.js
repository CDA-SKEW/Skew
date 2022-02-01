/*
 * Import - Module
 * *************** */
import { apiSiret } from "configs/axios";
import { GET_API_SIRET, GET_PROFIL_EMPLOYER} from "./ActionTypes";


// import image en static mais à voir pour aller chercher l'image dans le back plus tard
import imageEmployer from "assets/images/imageEmployor.png";
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
        dispatch({ type: GET_API_SIRET, payload: res.data.etablissement});
      })
      .catch((err) => console.log(err));
  };
};

// Post profil employer
export const postFormProfilEmployer = (data) => {
  return (dispatch) => {
    console.log("POST_PROFIL_EMPLOYER action", data);
    dispatch({ type: GET_PROFIL_EMPLOYER, payload: data });
  };
};

// get profil employer
export const getProfilEmployer = () => {
    const data = {
        name: "Buno & Co",
        zipCode: "85600",
        siren: "356454356",
        siret: "40976852000135",
        address: "21 fze fzefjzpej",
        category: "fvevfeqrg",
        town: "Bonnetable",
        imageEmployer: imageEmployer,
      }
    // const data ={}
      
    return (dispatch) => {
      // console.log("GET_PROFIL_EMPLOYER action", data);
      dispatch({ type: GET_PROFIL_EMPLOYER, payload: data });
    };
  };
