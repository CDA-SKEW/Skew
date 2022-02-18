/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
    listOffer: [],
};

/*
 * Reducers
 * ******** */
export function OffresVisiteurReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
        case Actions.LOGIN:
            return { ...state, listOffer: action.payload };
    }
}

/*
 * Getters
 * ******* */
