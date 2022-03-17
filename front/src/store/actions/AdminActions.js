/*
 * Import - Module
 * *************** */
import { api } from "configs/axios";

import {
  PUT_USER,
  DELETE_USER,
  GET_LIST_USERS,
  GET_USER,
  GET_LIST_JOBS,
  GET_JOB,
  DELETE_JOB,
  GET_LIST_MESSAGES,
  GET_MESSAGE,
  DELETE_MESSAGE,
  ADD_MESSAGE,
  GET_MESSAGES,
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
      api
        // Lien de la base de données
        .get("/admin/users")
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
export const getUserId = (id) => {
  return (dispatch) => {
    console.log("get:admin One user");
    return api
      .put(`/admin/users/${id}`)
      .then((res) => {
        console.log("putUserBan", res.data);
        dispatch({
          type: GET_USER,
          payload: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  };
};

// User Ban (put)
export const putUser = (id) => {
  return (dispatch) => {
    console.log("put user ban action", id);
    return api
      .put(`/admin/users/${id}`)
      .then((res) => {
        console.log("putUserBan", res.data);
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
    return api
      .put(`/admin/users/badge/${id}`)
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

export const verifUser = (id) => {
  return (dispatch) => {
    console.log("put verif action", id);
    return api
      .put(`/admin/users/verif/${id}`)
      .then((res) => {
        console.log("putUserVerif", res.data);
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
    return api
      .delete(`/admin/users/${id}`)
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
      api
        // Lien de la base de données
        .get("/admin/jobs")
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
export const getJobId = (id) => {
  return (dispatch) => {
    console.log("get:admin One job");
    return api
      .delete(`/admin/jobs/${id}`)
      .then((res) => {
        console.log("deleteJob", res.data.job);
        res.data.job.map((el, index) => {
          el.id = index;
        });
        dispatch({
          type: GET_JOB,
          payload: res.data.job,
        });
      })
      .catch((err) => console.log(err));
  };
};

// Job delete
export const deleteJob = (id) => {
  return (dispatch) => {
    console.log("delete job action", id);
    return api
      .delete(`/admin/jobs/${id}`)
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
      api
        // Lien de la base de données
        .get("/admin/messages")
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
export const getMessageId = (id) => {
  return (dispatch) => {
    console.log("ID message action", id);
    return api
    .delete(`/admin/messages/${id}`)
    .then((res) => {
      console.log("deleteJob", res.data.job);
      res.data.job.map((el, index) => {
        el.id = index;
      });
      dispatch({
        type: GET_MESSAGE,
        payload: res.data.messages,
      });
    })
    .catch((err) => console.log(err));
};
  };


// Reply Message (POST)
export const replyMessage = (form) => {
  console.log("action reply message", form);
  return (dispatch) => {
    return (
      api
        // Lien de la base de données
        .post("/admin/messages", form)
        .then((res) => {
          console.log("ADMIN Action - Reply message:", res.data);
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
    return api
      .delete(`/admin/messages/${id}`)
      .then((res) => {
        console.log("deleteMessage", res.data);
        dispatch({
          type: DELETE_MESSAGE,
          payload: res.data.messages,
        });
      })
      .catch((err) => console.log(err));
  };
};
