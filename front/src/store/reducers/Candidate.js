/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  userProfil: {
    coord: {},
    experience: [],
    skill: [],
    interest: [],
    certificate: [],
    document: []
  },
  candidaturesProfil: [],
  message: ''
};

/*
 * Reducers
 * ******** */
export function CandidateReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;

    case Actions.GET_OFFRE_CANDIDATE:
      return {
        ...state, candidaturesProfil: action.payload
      };
    case Actions.DELETE_OFFRE_CANDIDATE:
      return {
        ...state, candidaturesProfil: action.payload.candidatures
      };

    case Actions.GET_PROFIL_CANDIDATE:
      return {
        ...state, userProfil: action.payload
      };

    case Actions.POST_PROFIL_CANDIDATE:
      return {
        ...state, message: action.payload
      };

    case Actions.PUT_PROFIL_CANDIDATE:
      return {
        ...state, userProfil: action.payload.userProfil
      };
    case Actions.DELETE_PROFIL_CANDIDATE:
      return {
        ...state, userProfil: action.payload.userProfil
      };
  }
}

/*
 * Getters
 * ******* */
