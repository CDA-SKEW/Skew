/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  listUsers: [],
};

/*
 * Reducers
 * ******** */
export function AdminReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    // Users
    case Actions.GET_LIST_USERS:
      console.log("LIST_USERS", action.payload);
      return { ...state, listUsers: action.payload };
    case Actions.DELETE_USER:
      console.log("DELETE_USER", action.payload);
      return { ...state, listUsers: action.payload };
    // Jobs
    case Actions.GET_LIST_JOBS:
      console.log("LIST_JOBS", action.payload);
      return { ...state, listJobs: action.payload };
  }
}

/*
 * Getters
 * ******* */
