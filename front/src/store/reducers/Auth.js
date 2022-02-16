/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
    user: {},
};

/*
 * Reducers
 * ******** */
export function AuthReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
        case Actions.LOGIN:
            return { ...state, flash: action.payload.flash };
        case Actions.REGISTER:
            return { ...state, flash: action.payload.flash };
        case Actions.CHECK:
            return {
                ...state,
                flash: action.payload.flash,
                user: action.payload.user,
            };
    }
}

/*
 * Getters
 * ******* */
