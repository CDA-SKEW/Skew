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
      console.log("POST_MESSAGES Reducer", action.payload )      
      return { dataProfil: action.payload };
  }
}

/*
 * Getters
 * ******* */
