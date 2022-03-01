/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  userProfil: {
    coord:
    {
      id: 0,
      name: '',
      lastName: '',
      address: '',
      zipCode: '',
      town: '',
      mail: '',
      phone: ''
    },
    experience: [],
    skill: [],
    interest: [],
    certificate: [],
    cv: []
  },
};

/*
 * Reducers
 * ******** */
export function CandidateReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_PROFIL_CANDIDATE:
      console.log("reduccer get profil  candidat", action.payload);
      return {
        ...state, userProfil: action.payload
      };

    case Actions.POST_PROFIL_CANDIDATE:
      console.log("POST_PROFIL_CANDIDATE Reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state, userProfil: action.payload.userProfil
      };

    case Actions.PUT_PROFIL_CANDIDATE:
      console.log("PUT_PROFIL_CANDIDATE Reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state, userProfil: action.payload.userProfil
      };
    case Actions.DELETE_PROFIL_CANDIDATE:
      console.log("DELETE_PROFIL_CANDIDATE Reducer", action.payload);
      return {
        // flash: action.payload.flash,
        ...state, userProfil: action.payload.userProfil
      };
  }
}

/*
 * Getters
 * ******* */
