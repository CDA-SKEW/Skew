/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
    contact: {},
    flash: "",
};

/*
 * Reducers
 * ******** */
export function ContactReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
        case Actions.POST_CONTACT_US:
            return {
                ...state,
                flash: action.payload.flash,
                contact: action.payload.data,
            };
    }
}

/*
 * Getters
 * ******* */
