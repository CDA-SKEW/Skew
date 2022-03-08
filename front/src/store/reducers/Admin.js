/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  flash: "",
  listUsers: [],
  listJobs: [],
  listMessages: [],
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
      console.log("GET_LIST_USERS", action.payload);
      return {
        ...state,
        listUsers: action.payload,
      };
    // case Actions.GET_USER:
    //   console.log("GET_USER", action.payload);
    //   return { ...state, listUsers: action.payload };
    case Actions.PUT_USER:
      console.log("PUT_USER", action.payload);
      return {
        ...state,
        listUsers: action.payload,
      };
    case Actions.DELETE_USER:
      console.log("DELETE_USER", action.payload);
      return {
        ...state,
        listUsers: action.payload,
      };
    // Jobs
    case Actions.GET_LIST_JOBS:
      console.log("GET_LIST_JOBS", action.payload);
      return {
        ...state,
        listJobs: action.payload,
      };
    // case Actions.GET_JOB:
    //   console.log("GET_JOB", action.payload);
    //   return { ...state, listJobs: action.payload };
    case Actions.DELETE_JOB:
      console.log("DELETE_JOB", action.payload);
      return {
        ...state,
        listJobs: action.payload,
      };
    // Messages
    case Actions.GET_LIST_MESSAGES:
      console.log("GET_LIST_MESSAGES", action.payload);
      return {
        ...state,
        listMessages: action.payload,
      };
    // case Actions.GET_MESSAGE:
    //   console.log("GET_MESSAGE", action.payload);
    //   return { ...state, listMessages: action.payload };
    case Actions.DELETE_MESSAGE:
      console.log("DELETE_MESSAGE", action.payload);
      return {
        ...state,
        listMessages: action.payload,
      };
    case Actions.ADD_MESSAGE:
      console.log("ADD_MESSAGE", action.payload);
      return {
        ...state,
        // listMessages: action.payload,
      };
  }
}

/*
 * Getters
 * ******* */
