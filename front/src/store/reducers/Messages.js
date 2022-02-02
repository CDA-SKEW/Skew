/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  listMessage: [],
};

/*
 * Reducers
 * ******** */
export function MessagesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.POST_MESSAGES:
      return {
       ...state, dataProfil: action.payload
      };
  }
}

/*
 * Getters
 * ******* */
