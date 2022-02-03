/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  dataProfilCandidate: {}
};





/*
 * Reducers
 * ******** */
export function CandidateReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_PROFIL_CANDIDATE:
      console.log("reduccer get profil candidat", action.payload);
      return { ...state, dataProfilCandidate: action.payload };
  }
}

/*
 * Getters
 * ******* */
