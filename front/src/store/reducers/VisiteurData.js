/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
    VisiteurDataEntrepriseAvatar: [],
    flash: "",
};

/*
 * Reducers
 * ******** */
export function VisiteurDataReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
        case Actions.GET_VISITEUR_DATA_ENTREPRISE_AVATAR:
            return {
                ...state,
                flash: action.payload.flash,
                VisiteurDataEntrepriseAvatar: action.payload.dbVisiteurDataEntrepriseAvatar
            };
    }
}

/*
 * Getters
 * ******* */
