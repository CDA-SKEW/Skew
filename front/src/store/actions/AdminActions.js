/*
 * Import - Module
 * *************** */
// import axios from "axios";

// import { GET_LIST_USERS } from "./ActionTypes";
import { DELETE_USER } from "./ActionTypes";

/*
 * Import types { ... }
 * ******************** */

/*
 * Actions
 * ******* */

// Get Api Admin:listUsers
export const getListUsers = () => {
  console.log("get:admin List user");
};

// Delete User
export const deleteUser = (listUsers) => {
  return (dispatch) => {
    console.log("DELETE_USER action", listUsers);
    dispatch({ type: DELETE_USER, payload: "" });
  };
};
