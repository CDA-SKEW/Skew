/*
 * React
 * ***** */
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/*
 * Reducers
 * ******** */
import { EmployerReducer } from "./reducers/Employer";
import { MessagesReducer } from "./reducers/Messages";
import { CandidateReducer } from "./reducers/Candidate";
import { AdminReducer } from "./reducers/Admin";
import { AuthReducer } from "./reducers/Auth";
import { ContactReducer } from "./reducers/Contact";
import { OffreVisiteurReducer } from "./reducers/OffreVisiteur";
import { OffreFavoriteReducer } from "./reducers/OffreFavorite";
import { VisiteurDataReducer } from "./reducers/VisiteurData";

/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
  employer: EmployerReducer,
  messages: MessagesReducer,
  candidate: CandidateReducer,
  admin: AdminReducer,
  auth: AuthReducer,
  contact: ContactReducer,
  offreVisiteur: OffreVisiteurReducer,
  offreFavorite: OffreFavoriteReducer,
  visiteurData: VisiteurDataReducer
});

/*
 * Store export
 * ************ */
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
); // Dev
// export const store = createStore(rootReducer); // Prod
