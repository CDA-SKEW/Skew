/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  dataDashboardEmployer: [],
  dataProfilEmployer: {},
  dataProfilUser: {},
  dataOffers: [],
  dataSiretApi: {},
  flash: "",
  statusMessage: "",
};

/*
 * Reducers
 * ******** */
export function EmployerReducer(state = initialState, action) {
  // const messageError = ""

  switch (action.type) {
    default:
      return state;
    case Actions.GET_API_SIRET:
      //  console.log("store reducer Api siret", action.payload);
      return {
        // flash: action.payload.flash,
        ...state,
        dataSiretApi: action.payload,
      };

    case Actions.GET_DASHBOARD_EMPLOYER:
      // console.log("GET_DASHBOARD_EMPLOYER Reducer", action.payload.dashboard);
      return {
        ...state,
        dataDashboardEmployer: action.payload.dashboard,
      };

    case Actions.GET_PROFIL_EMPLOYER:
      // console.log("GET_PROFIL_EMPLOYER Reducer", action.payload.dataProfilEmployer);
      return {
        // flash: action.payload.flash,
        ...state,
        dataProfilEmployer: action.payload.dataProfilEmployer,
      };

    case Actions.PUT_PROFIL_EMPLOYER:
      // console.log("PUT_PROFIL_EMPLOYER Reducer", action.payload);
      return {
        ...state,
        flash: action.payload.message,
        dataProfilEmployer: action.payload.dataProfilEmployer,
      };

    case Actions.GET_PROFIL_USER:
      // console.log("GET_PROFIL_USER Reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state,
        dataProfilUser: action.payload.dataProfilUser,
      };

    case Actions.PUT_PROFIL_USER:
      //  console.log("PUT_PROFIL_USER Reducer", action.payload.message);
      return {
        ...state,
        flash: action.payload.message,
        dataProfilUser: action.payload.dataProfilUser,
      };

    case Actions.PUT_PROFIL_USER_PW:
      // console.log("PUT_PROFIL_USER PW Reducer", action.payload)
      return {
        ...state,
        statusMessage: action.payload.status,
        flash: action.payload.message,
        dataProfilUser: action.payload.dataProfilUser,
      };

    case Actions.GET_OFFER:
      // console.log("GET_OFFER reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state,
        dataOffers: action.payload.offers,
      };

    case Actions.POST_OFFER:
      // console.log("POST_OFFER reducer", action.payload.message);
      return {
        // flash: action.payload.flash,
        ...state,
        // dataOffer: action.payload.data,
        flash: action.payload.message,
      };

    case Actions.DELETE_OFFER:
      // console.log("DELETE_OFFER reducer", action.payload.message);
      return {
        // flash: action.payload.flash,
        ...state,
        // dataOffer: action.payload.data,
        flash: action.payload.message,
      };

    case Actions.PUT_ACTION_CANDIDATE:
      // console.log("PUT_ACTION_CANDIDATE reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state,
      };

    case Actions.POST_MESSAGE_CANDIDATE:
      // console.log("POST_MESSAGE_CANDIDATE reduceur", action.payload.message);
      return {
        ...state,
        flash: action.payload.message,
      };

    // Non utilisé dans l'application car profil crée par défaut au register
    // case Actions.POST_PROFIL_EMPLOYER:
    //   // console.log("POST_PROFIL_EMPLOYER Reducer", action.payload);
    //   return {
    //     // flash: action.payload.flash,
    //     ...state,
    //     dataProfilEmployer: action.payload.dataProfilEmployer,
    //   };
  }
}

/*
 * Getters
 * ******* */
