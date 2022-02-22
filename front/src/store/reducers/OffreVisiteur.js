/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
    listOffer: [],
    flash: "",
};

/*
 * Reducers
 * ******** */
export function OffreVisiteurReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
        case Actions.GET_OFFRE_VISITEUR:
            return {
                ...state,
                flash: action.payload.flash,
                listOffer: action.payload.dbOffresVisiteur
            };
    }
}

/*
 * Getters
 * ******* */
