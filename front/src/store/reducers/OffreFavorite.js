/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  favoris: {},
  addFavoris: {}
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
                favoris: action.payload.dbOffresVisiteur
            };
        case Actions.POST_OFFRE_FAVORITE:
            return {
                ...state,
                flash: action.payload.flash,
                addFavoris: action.payload.dbOffresVisiteur
            };
    }
}

/*
 * Getters
 * ******* */
