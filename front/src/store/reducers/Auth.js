/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
    authData: [],
};

/*
 * Reducers
 * ******** */
export function AuthReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
        case Actions.GET_AUTH:
            console.log("AUTH", action.payload);
            return { ...state, authData: action.payload };
    }
}

/*
 * Getters
 * ******* */
