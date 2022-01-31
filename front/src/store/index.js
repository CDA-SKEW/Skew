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
import { AdminReducer } from "./reducers/Admin";

/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
  employer: EmployerReducer,
  admin: AdminReducer,
});

/*
 * Store export
 * ************ */
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
); // Dev
// export const store = createStore(rootReducer); // Prod
