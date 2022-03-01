/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  dataProfilEmployer: {},
  dataProfilUser: {},
  dataOffers: [],
  dataSiretApi: {},
  flashs: {},
};

/*
 * Reducers
 * ******** */
export function EmployerReducer(state = initialState, action) {
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
    case Actions.GET_PROFIL_EMPLOYER:
      // console.log("GET_PROFIL_EMPLOYER Reducer", action.payload.dataProfilEmployer);
      return {
        // flash: action.payload.flash,
        ...state,
        dataProfilEmployer: action.payload.dataProfilEmployer,
      };
    case Actions.POST_PROFIL_EMPLOYER:
      // console.log("POST_PROFIL_EMPLOYER Reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state,
        dataProfilEmployer: action.payload.dataProfilEmployer,
      };
    case Actions.PUT_PROFIL_EMPLOYER:
      console.log("PUT_PROFIL_EMPLOYER Reducer", action.payload.dataProfilEmployer);
      return {
        // flash: action.payload.flash,
        ...state,
        dataProfilEmployer: action.payload.dataProfilEmployer,
      };
      case Actions.GET_PROFIL_USER:
        // console.log("GET_PROFIL_USER Reducer", action.payload);
        return {
          // flash: action.payload.flash,
          ...state,
          dataProfilUser: action.payload,
        };
      case Actions.PUT_PROFIL_USER:
        // console.log("GET_PROFIL_USER Reducer", action.payload);
        return {
          // flash: action.payload.flash,
          ...state,
          dataProfilUser: action.payload,
        };
        case Actions.PUT_PROFIL_USER_PW:
          // console.log("GET_PROFIL_USER PW Reducer", action.payload);
          return {
            // flash: action.payload.flash,
            ...state,
            dataProfilUser: action.payload,
          };
    case Actions.GET_OFFER:
      // console.log("GET_OFFER reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state,
        dataOffers: action.payload,
      };
    case Actions.POST_OFFER:
      // console.log("POST_OFFER", action.payload);
      return {
        // flash: action.payload.flash,
        ...state,
        dataOffer: action.payload.data,
        flashs: action.payload.message,
      };
    case Actions.POST_MESSAGE_CANDIDATE:
      // console.log("POST_MESSAGE_CANDIDATE reduceur", action.payload);
      return {
        ...state,
        flashs: action.payload.messagePostCandidate,
      };
  }
}

/*
 * Getters
 * ******* */
