/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  dataDashboardEmployer: [],
  dataProfilEmployer: {},
  dataProfilUser: {},
  dataOffers: [],
  dataSiretApi: {},
  flash: "",
  statusMessage: "",
};

/*
 * Reducers
 * ******** */
export function EmployerReducer(state = initialState, action) {
  // const messageError = ""

  switch (action.type) {
    default:
      return state;
    case Actions.GET_API_SIRET:
      return {
        // flash: action.payload.flash,
        ...state,
        dataSiretApi: action.payload,
      };

    case Actions.GET_DASHBOARD_EMPLOYER:
      return {
        ...state,
        dataDashboardEmployer: action.payload.dashboard,
      };

    case Actions.GET_PROFIL_EMPLOYER:
      return {
        // flash: action.payload.flash,
        ...state,
        dataProfilEmployer: action.payload.dataProfilEmployer,
      };

    case Actions.PUT_PROFIL_EMPLOYER:
      return {
        ...state,
        flash: action.payload.message,
        dataProfilEmployer: action.payload.dataProfilEmployer,
      };

    case Actions.GET_PROFIL_USER:
      return {
        // flash: action.payload.flash,
        ...state,
        dataProfilUser: action.payload.dataProfilUser,
      };

    case Actions.PUT_PROFIL_USER:
      return {
        ...state,
        flash: action.payload.message,
        dataProfilUser: action.payload.dataProfilUser,
      };

    case Actions.PUT_PROFIL_USER_PW:
      return {
        ...state,
        statusMessage: action.payload.status,
        flash: action.payload.message,
        dataProfilUser: action.payload.dataProfilUser,
      };

    case Actions.GET_OFFER:
      return {
        // flash: action.payload.flash,
        ...state,
        dataOffers: action.payload.offers,
      };

    case Actions.POST_OFFER:
      return {
        ...state,
        flash: action.payload.message,
      };

    case Actions.DELETE_OFFER:
      return {
        ...state,
        flash: action.payload.message,
      };

    case Actions.PUT_ACTION_CANDIDATE:
      return {
        ...state,
      };

    case Actions.POST_MESSAGE_CANDIDATE:
      return {
        ...state,
        flash: action.payload.message,
      };

    // Non utilisé dans l'application car profil crée par défaut au register
    // case Actions.POST_PROFIL_EMPLOYER:
    //   return {
    //     ...state,
    //     dataProfilEmployer: action.payload.dataProfilEmployer,
    //   };
  }
}

/*
 * Getters
 * ******* */
