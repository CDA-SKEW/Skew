/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  dataProfil: [],
  dataSiretApi:[]
};

/*
 * Reducers
 * ******** */
export function EmployerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.POST_PROFIL_EMPLOYER:
      console.log("POST_PROFIL_EMPLOYER Reducer", action.payload )      
      return { dataProfil: action.payload };
    case Actions.GET_API_SIRET:
      return { dataSiretApi: action.payload };
  }
}

/*
 * Getters
 * ******* */
