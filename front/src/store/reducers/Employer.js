/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";
import imageEmployer from "assets/images/imageEmployor.png";

/*
 * Selector
 * ******** */
const initialState = {
  dataProfil: {},
  dataSiretApi: {},
};

/*
 * Reducers
 * ******** */
export function EmployerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_PROFIL_EMPLOYER:
      // console.log("GET_PROFIL_EMPLOYER Reducer", action.payload);
      return {
        // ...state,
        // flash: action.payload.flash,
        ...state, dataProfil: action.payload,
      };
    case Actions.GET_API_SIRET:
      console.log("store reducer Api siret", action.payload);
      return {
        // ...state,
        // flash: action.payload.flash,
        dataSiretApi: action.payload,
      };
  }
}

/*
 * Getters
 * ******* */
