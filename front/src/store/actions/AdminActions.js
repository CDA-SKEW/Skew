/*
 * Import - Module
 * *************** */
import axios from "axios";

import {
  PUT_USER,
  DELETE_USER,
  GET_LIST_USERS,
  // GET_USER,
  GET_LIST_JOBS,
  // GET_JOB,
  PUT_JOB,
  DELETE_JOB,
  GET_LIST_MESSAGES,
  // GET_MESSAGE,
  DELETE_MESSAGE,
  ADD_MESSAGE,
} from "./ActionTypes";

/*
 * Import types { ... }
 * ******************** */

/*
 * Actions
 * ******* */

// USERS

// User All
export const getListUsers = () => {
  return (dispatch) => {
    return (
      axios
        // Lien de la base de données
        .get("http://localhost:1870/api/admin/users")
        .then((res) => {
          // console.log("getListUsers:", res.data.user);
          dispatch({
            type: GET_LIST_USERS,
            /* Récupération de la variable "user"
        du controller UsersController, pour afficher 
        les datas */
            payload: res.data.user,
          });
        })
        .catch((err) => console.log(err))
    );
  };
};

// User ID
// export const getUserId = () => {
//   return (dispatch) => {
//     console.log("get:admin One user");
//     dispatch({ type: GET_USER, payload: listUsers });
//   };
// };

// User Update (put)
export const putUser = (id) => {
  return (dispatch) => {
    console.log("put user action", id);
    return axios
      .put(`http://localhost:1870/api/admin/users/${id}`)
      .then((res) => {
        console.log("putUser", res.data);
        dispatch({
          type: PUT_USER,
          payload: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const putBadge = (id) => {
  return (dispatch) => {
    console.log("put badge action", id);
    return axios
      .put(`http://localhost:1870/api/admin/users/badge/${id}`)
      .then((res) => {
        console.log("putUserBadge", res.data);
        dispatch({
          type: PUT_USER,
          payload: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  };
};

//  User Delete
export const deleteUser = (id) => {
  return (dispatch) => {
    console.log("delete user action", id);
    return axios
      .delete(`http://localhost:1870/api/admin/users/${id}`)
      .then((res) => {
        console.log("deleteUser", res.data);
        dispatch({
          type: DELETE_USER,
          payload: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  };
};

/*---------------------*/

// JOBS

// All jobs
export const getListJobs = () => {
  return (dispatch) => {
    return (
      axios
        // Lien de la base de données
        .get("http://localhost:1870/api/admin/jobs")
        .then((res) => {
          console.log("getListJobs:", res.data.job);
          res.data.job.map((el, index) => {
            el.id = index;
          });
          dispatch({
            type: GET_LIST_JOBS,
            /* Récupération de la variable "job"
        du controller JobsController, pour afficher 
        les datas */
            payload: res.data.job,
          });
        })
        .catch((err) => console.log(err))
    );
  };
};

// Job ID
// export const getJobId = () => {
//   return (dispatch) => {
//     console.log("get:admin One job");
//     // dispatch({ type: GET_JOB, payload: listJobs });
//   };
// };

// Job Update (put)
export const putJob = (id) => {
  return (dispatch) => {
    console.log("put job action", id);
    return axios
      .put(`http://localhost:1870/api/admin/jobs/${id}`)
      .then((res) => {
        console.log("putJob", res.data.job);
        dispatch({
          type: PUT_JOB,
          payload: res.data.job,
        });
      })
      .catch((err) => console.log(err));
  };
  // return (dispatch) => {
  //   console.log("put job action");
  //   // dispatch({ type: PUT_JOB, payload: data });
  // };
};

// Job delete
export const deleteJob = (id) => {
  return (dispatch) => {
    console.log("delete job action", id);
    return axios
      .delete(`http://localhost:1870/api/admin/jobs/${id}`)
      .then((res) => {
        console.log("deleteJob", res.data.job);
        res.data.job.map((el, index) => {
          el.id = index;
        });
        dispatch({
          type: DELETE_JOB,
          payload: res.data.job,
        });
      })
      .catch((err) => console.log(err));
  };
};

/*---------------------*/

// MESSAGES

// All Messages
export const getListMessages = () => {
  return (dispatch) => {
    return (
      axios
        // Lien de la base de données
        .get("http://localhost:1870/api/admin/messages")
        .then((res) => {
          console.log("getListMessages:", res.data.messages);
          dispatch({
            type: GET_LIST_MESSAGES,
            /* Récupération de la variable "user"
        du controller UsersController, pour afficher 
        les datas */
            payload: res.data.messages,
          });
        })
        .catch((err) => console.log(err))
    );
  };
};

// Message ID
// export const getMessageId = (id) => {
//   return (dispatch) => {
//     console.log("ID message action", id);
//     dispatch({ type: GET_MESSAGE, payload: listMessages });
//   };
// };

// Reply Message (POST)
export const replyMessage = (form) => {
  console.log("action reply message", form);
  return (dispatch) => {
    return (
      axios
        // Lien de la base de données
        .post("http://localhost:1870/api/admin/messages", form)
        .then((res) => {
          console.log("ADMIN Action - Reply message:", res.data.messages);
          dispatch({
            type: ADD_MESSAGE,
            /* Récupération de la variable "user"
        du controller UsersController, pour afficher 
        les datas */
            payload: res.data.messages,
          });
        })
        .catch((err) => console.log(err))
    );
  };
};

// DELETE Message
export const deleteMessage = (id) => {
  return (dispatch) => {
    console.log("delete message action", id);
    return axios
      .delete(`http://localhost:1870/api/admin/messages/${id}`)
      .then((res) => {
        console.log("deleteMessage", res.data.messages);
        dispatch({
          type: DELETE_MESSAGE,
          payload: res.data.messages,
        });
      })
      .catch((err) => console.log(err));
  };
};
