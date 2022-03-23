/*
 * Import - Module
 * *************** */
// import axios from "axios";
import { POST_MESSAGES} from "./ActionTypes";

/*
 * Import types { ... }
 * ******************** */
// import {
//     GET_MESSAGES_DATA,
//     ADD_MESSAGES_DATA,
//     DELETE_MESSAGES_DATA,
// } from './ActionTypes';

/*
 * Actions
 * ******* */

// Get messages

// Post messages
export const postMessages = (data) => {
    return (dispatch) => {
      console.log("POST_MESSAGES action", data);
      dispatch({ type: POST_MESSAGES, payload: data });
    };
  };

// Delete messages