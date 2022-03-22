/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
    favoris: {},
};

/*
 * Reducers
 * ******** */
export function OffreFavoriteReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
        case Actions.GET_OFFRE_FAVORITE_ID:
            return {
                ...state,
                flash: action.payload.flash,
                favoris: action.payload.dbOffreFavoris
            };
        case Actions.POST_OFFRE_FAVORITE:
            return {
                ...state,
                flash: action.payload.flash,
                favoris: action.payload.dbOffreFavoris
            };
        case Actions.DELETE_OFFRE_FAVORITE:
            return {
                ...state,
                flash: action.payload.flash,
                favoris: action.payload.dbOffreFavoris
            };
    }
}

/*
 * Getters
 * ******* */
