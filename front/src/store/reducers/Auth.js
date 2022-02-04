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
            return { ...state, authData: action.payload };
            case Actions.POST_AUTH:
                return { ...state, authData: action.payload }
    }
}

/*
 * Getters
 * ******* */
