/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  dataProfilCandidate: {},
  candidatures: []
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
      return {
        ...state, dataProfilCandidate: action.payload.dataProfilCandidate, candidatures: action.payload.candidatures.postul
      };

    case Actions.POST_PROFIL_CANDIDATE:
      console.log("POST_PROFIL_CANDIDATE Reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state, dataProfilCandidate: action.payload.dataProfilCandidate, candidatures: action.payload.candidatures.postul
      };

    case Actions.PUT_PROFIL_CANDIDATE:
      console.log("PUT_PROFIL_CANDIDATE Reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state, dataProfilCandidate: action.payload.dataProfilCandidate, candidatures: action.payload.candidatures.postul
      };
    case Actions.DELETE_PROFIL_CANDIDATE:
      console.log("DELETE_PROFIL_CANDIDATE Reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state, dataProfilCandidate: action.payload.dataProfilCandidate, candidatures: action.payload.candidatures.postul
      };
  }
}

/*
 * Getters
 * ******* */
