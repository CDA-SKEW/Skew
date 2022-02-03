/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  dataProfilEmployer: {},
  dataSiretApi: {},
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
      // console.log("GET_PROFIL_EMPLOYER Reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state,
        dataProfilEmployer: action.payload,
      };
    case Actions.POST_PROFIL_EMPLOYER:
      // console.log("POST_PROFIL_EMPLOYER Reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state,
        dataProfilEmployer: action.payload,
      };
    case Actions.PUT_PROFIL_EMPLOYER:
      // console.log("PUT_PROFIL_EMPLOYER Reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state,
        dataProfilEmployer: action.payload,
      };
  }
}

/*
 * Getters
 * ******* */
