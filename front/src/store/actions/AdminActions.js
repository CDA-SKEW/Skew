/*
 * Import - Module
 * *************** */
// import axios from "axios";

import {
  PUT_USER,
  DELETE_USER,
  GET_LIST_USERS,
  GET_LIST_JOBS,
  DELETE_JOB,
  GET_LIST_MESSAGES,
  DELETE_MESSAGE,
  ADD_MESSAGE,
} from "./ActionTypes";

/*
 * Import types { ... }
 * ******************** */

/*
 * Actions
 * ******* */

// GET Api listUsers
const listUsers = [
  {
    id: 1,
    avatar:
      "https://img.search.brave.com/YAChonmMV6YUIBHQOKsUE6JGVUHhfgyC1wKEpiygEdk/rs:fit:736:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC81Yi84NC9iNC81/Yjg0YjQyMmY5OTdl/OGZiNzVmZDdiZWI5/MTY5ZTYwMy5qcGc",
    firstName: "Jean",
    name: "Cuckstein",
    isEmployer: 1,
    isCandidate: 0,
    isAdmin: 0,
    isBan: 0,
    isChecked: 1,
    email: "jean@gmail.com",
  },
  {
    id: 2,
    avatar:
      "https://www.tailslife.com/blog/wp-content/uploads/2018/04/adorable-animal-animal-photography-1022158.jpg",
    firstName: "Armong",
    name: "Arlert",
    isEmployer: 0,
    isCandidate: 1,
    isAdmin: 0,
    isBan: 0,
    isChecked: 0,
    email: "armong@gmail.com",
  },
  {
    id: 3,
    avatar:
      "https://img.search.brave.com/GAJ6GzxYthkkC_CMna9L4DxVJrUYvg2AsTA5ikrHWR0/rs:fit:1136:640:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4L2M5/LzIxLzM4YzkyMTNi/YTUzOWE0NjFlZGRi/YzljYzRhNDllYmZh/LnBuZw",
    firstName: "Cuckren",
    name: "Yoghurt",
    isEmployer: 0,
    isCandidate: 1,
    isAdmin: 0,
    isBan: 0,
    isChecked: 1,
    email: "cuckren@gmail.com",
  },
  {
    id: 4,
    avatar:
      "https://img.search.brave.com/ZEeJZMmnd-U68c99O10N7wtRwlALIZMj3MwjZKWpOeY/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYzLzQ2/LzlmLzYzNDY5Zjlh/YTdmN2RmMWNlMzQ4/YmQ2NDc4Nzk2OGUx/LmpwZw",
    firstName: "Samy",
    name: "Lynn Jackson",
    isEmployer: 1,
    isCandidate: 0,
    isAdmin: 0,
    isBan: 0,
    isChecked: 0,
    email: "samy@gmail.com",
  },
  {
    id: 5,
    avatar:
      "https://img.search.brave.com/NbuxLwX2_38WJd3uh41_KouHvmJp4fj9Hh7knRwsJK4/rs:fit:400:400:1/g:ce/aHR0cHM6Ly90aWVy/bWFrZXIuY29tL2lt/YWdlcy9hdmF0YXJz/L2Nvbm5pZXoyNTU2/MTYyMS9jb25uaWV6/MjU1NjE2MjEuanBn",
    firstName: "Dot",
    name: "Pixis",
    isEmployer: 0,
    isCandidate: 1,
    isAdmin: 0,
    isBan: 0,
    isChecked: 1,
    email: "dot@gmail.com",
  },
  {
    id: 6,
    avatar:
      "https://img.search.brave.com/r0gC5aKGJwb4lUh-TCjwuKWJkxJz_5vg74ChwSgwnoo/rs:fit:1200:630:1/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvdUh6/cE00cUhYLWR0ejd0/YjRxNW1IRDRsTkJO/YzlVZnRXS19STmtq/NzNzQS5qcGc_YXV0/bz13ZWJwJnM9NWQ5/ZjdjMzUzNzg0NDQw/YjJjNGFkYjNhNWVi/YWE3OTAzNjI5MDFi/YQ",
    firstName: "Connie",
    name: "Springer",
    isEmployer: 1,
    isCandidate: 0,
    isAdmin: 0,
    isBan: 0,
    isChecked: 0,
    email: "springer@gmail.com",
  },
  {
    id: 7,
    avatar: "",
    firstName: "Mankasa",
    name: "Crackerman",
    isEmployer: 1,
    isCandidate: 0,
    isAdmin: 0,
    isBan: 0,
    isChecked: 1,
    email: "dogkasa@gmail.com",
  },
  {
    id: 8,
    avatar:
      "https://img.search.brave.com/DBocuQMRvKkBYqT4Xj9Ly1iAW0R50YSovjzxArwt5IE/rs:fit:916:692:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMud2Fnd2Fsa2lu/Z3dlYi5jb20vbWVk/aWEvZGFpbHlfd2Fn/L2Jsb2dfYXJ0aWNs/ZXMvaGVyby8xNjA5/ODAxNDE3LjUyNTQw/Njgvc2NyZWVuLXNo/b3QtMjAyMS0wMS0w/NC1hdC0zMDMxNC1w/bS5wbmc",
    firstName: "Berthy",
    name: "Hoover",
    isEmployer: 0,
    isCandidate: 1,
    isAdmin: 0,
    isBan: 0,
    isChecked: 1,
    email: "souka@gmail.com",
  },
  {
    id: 9,
    avatar:
      "https://img.search.brave.com/9XtR4b7OCYfsbrR3YiAqoWwes-5L0ifcMD8I_4CplBU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ibG9n/cy5jb2x1bWJpYW4u/Y29tL2NhdC10YWxl/cy93cC1jb250ZW50/L3VwbG9hZHMvc2l0/ZXMvNDMvMjAxNy8w/OS9TYXd5ZXJfRFNf/MTQwMi5qcGc",
    firstName: "Marie",
    name: "Du Nile",
    isEmployer: 0,
    isCandidate: 1,
    isAdmin: 0,
    isBan: 0,
    isChecked: 1,
    email: "marie@gmail.com",
  },
];

export const getListUsers = () => {
  return (dispatch) => {
    console.log("get:admin List user");
    dispatch({ type: GET_LIST_USERS, payload: listUsers });
  };
};

// PUT User
export const putUser = (id) => {
  return (dispatch) => {
    // console.log("put action", id);
    // console.log("const putUser");
    dispatch({ type: PUT_USER, payload: listUsers });
  };
};

// DELETE User
export const deleteUser = (id) => {
  return (dispatch) => {
    // console.log("delete action", id);
    // console.log("const deleteUser");
    dispatch({ type: DELETE_USER, payload: listUsers });
  };
};

/*---------------------*/

// GET Api ListJobs

const listJobs = [
  {
    id: 1,
    title: "Developpeur informatique",
    type: "CDI",
    period: "ezteztgz",
    description: "ezreztaze",
    profile: "sqgegg",
    isChecked: 1,
  },
  {
    id: 2,
    title: "Developpeur front-end",
    type: "CDI",
    period: "ezteztgz",
    description: "ezreztaze",
    profile: "sqgegg",
    isChecked: 0,
  },
  {
    id: 3,
    title: "Developpeur back-end",
    type: "CDI",
    period: "ezteztgz",
    description: "ezreztaze",
    profile: "sqgegg",
    isChecked: 1,
  },
  {
    id: 4,
    title: "Developpeur freelance",
    type: "freelance",
    period: "ezteztgz",
    description: "ezreztaze",
    profile: "sqgegg",
    isChecked: 1,
  },
  {
    id: 5,
    title: "Developpeur applicatif et technique",
    type: "CDI",
    period: "ezteztgz",
    description: "ezreztaze",
    profile: "sqgegg",
    isChecked: 0,
  },
  {
    id: 6,
    title: "Developpeur réseau",
    type: "CDI",
    period: "ezteztgz",
    description: "ezreztaze",
    profile: "sqgegg",
    isChecked: 0,
  },
  {
    id: 7,
    title: "Developpeur JAVA",
    type: "CDI",
    period: "ezteztgz",
    description: "ezreztaze",
    profile: "sqgegg",
    isChecked: 1,
  },
  {
    id: 8,
    title: "Developpeur full-stack",
    type: "CDI",
    period: "ezteztgz",
    description: "ezreztaze",
    profile: "sqgegg",
    isChecked: 1,
  },
  {
    id: 9,
    title: "Developpeur système embarqué",
    type: "CDI",
    period: "ezteztgz",
    description: "ezreztaze",
    profile: "sqgegg",
    isChecked: 0,
  },
];

export const getListJobs = () => {
  return (dispatch) => {
    console.log("get:admin List jobs");
    dispatch({ type: GET_LIST_JOBS, payload: listJobs });
  };
};

// DELETE Job
export const deleteJob = (id) => {
  return (dispatch) => {
    // console.log("delete action", id);
    // console.log("const deleteJob");
    // console.log("DELETE JOB (store)", id);
    dispatch({ type: DELETE_JOB, payload: listJobs });
  };
};

/*---------------------*/

// GET Api ListMessages
const listMessages = [
  {
    id: 1,
    avatar:
      "https://img.search.brave.com/YAChonmMV6YUIBHQOKsUE6JGVUHhfgyC1wKEpiygEdk/rs:fit:736:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC81Yi84NC9iNC81/Yjg0YjQyMmY5OTdl/OGZiNzVmZDdiZWI5/MTY5ZTYwMy5qcGc",
    firstName: "Jean",
    name: "Cuckstein",
    isEmployer: 1,
    isCandidate: 0,
    isAdmin: 0,
    isBan: 0,
    isChecked: 1,
    email: "jean@gmail.com",
    phone: "+33 - 700 - 555 - 322",
    subject: "coucou !",
    message: "adsgfezqgreqillico.",
  },
  {
    id: 2,
    avatar:
      "https://www.tailslife.com/blog/wp-content/uploads/2018/04/adorable-animal-animal-photography-1022158.jpg",
    firstName: "Armong",
    name: "Arlert",
    isEmployer: 0,
    isCandidate: 1,
    isAdmin: 0,
    isBan: 0,
    isChecked: 0,
    email: "armong@gmail.com",
    phone: "+33 - 785 - 555 - 425",
    subject: "salut !",
    message: "zrfhoqzfheoshfoezf",
  },
  {
    id: 3,
    avatar:
      "https://img.search.brave.com/GAJ6GzxYthkkC_CMna9L4DxVJrUYvg2AsTA5ikrHWR0/rs:fit:1136:640:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4L2M5/LzIxLzM4YzkyMTNi/YTUzOWE0NjFlZGRi/YzljYzRhNDllYmZh/LnBuZw",
    firstName: "Cuckren",
    name: "Yoghurt",
    isEmployer: 0,
    isCandidate: 1,
    isAdmin: 0,
    isBan: 0,
    isChecked: 1,
    email: "cuckren@gmail.com",
    phone: "+33 - 775 - 556 - 209",
    subject: "bonjour !",
    message: "zrfhoqzfheoshfoezf",
  },
  {
    id: 4,
    avatar:
      "https://img.search.brave.com/ZEeJZMmnd-U68c99O10N7wtRwlALIZMj3MwjZKWpOeY/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYzLzQ2/LzlmLzYzNDY5Zjlh/YTdmN2RmMWNlMzQ4/YmQ2NDc4Nzk2OGUx/LmpwZw",
    firstName: "Samy",
    name: "Lynn Jackson",
    isEmployer: 1,
    isCandidate: 0,
    isAdmin: 0,
    isBan: 0,
    isChecked: 0,
    email: "samy@gmail.com",
    phone: "+33 - 655 - 512 - 946",
    subject: "RDV !",
    message: "zrfhoqzfheoshfoezf",
  },
  {
    id: 5,
    avatar:
      "https://img.search.brave.com/NbuxLwX2_38WJd3uh41_KouHvmJp4fj9Hh7knRwsJK4/rs:fit:400:400:1/g:ce/aHR0cHM6Ly90aWVy/bWFrZXIuY29tL2lt/YWdlcy9hdmF0YXJz/L2Nvbm5pZXoyNTU2/MTYyMS9jb25uaWV6/MjU1NjE2MjEuanBn",
    firstName: "Dot",
    name: "Pixis",
    isEmployer: 0,
    isCandidate: 1,
    isAdmin: 0,
    isBan: 0,
    isChecked: 1,
    email: "dot@gmail.com",
    phone: "+33 - 655 - 557 - 206",
    subject: "inscription !",
    message: "zrfhoqzfheoshfoezf",
  },
  {
    id: 6,
    avatar:
      "https://img.search.brave.com/r0gC5aKGJwb4lUh-TCjwuKWJkxJz_5vg74ChwSgwnoo/rs:fit:1200:630:1/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvdUh6/cE00cUhYLWR0ejd0/YjRxNW1IRDRsTkJO/YzlVZnRXS19STmtq/NzNzQS5qcGc_YXV0/bz13ZWJwJnM9NWQ5/ZjdjMzUzNzg0NDQw/YjJjNGFkYjNhNWVi/YWE3OTAzNjI5MDFi/YQ",
    firstName: "Connie",
    name: "Springer",
    isEmployer: 1,
    isCandidate: 0,
    isAdmin: 0,
    isBan: 0,
    isChecked: 0,
    email: "springer@gmail.com",
    phone: " +33 - 655 - 540 - 531",
    subject: "connexion !",
    message: "zrfhoqzfheoshfoezf",
  },
  {
    id: 7,
    avatar: "",
    firstName: "Mankasa",
    name: "Crackerman",
    isEmployer: 1,
    isCandidate: 0,
    isAdmin: 0,
    isBan: 0,
    isChecked: 1,
    email: "dogkasa@gmail.com",
    phone: "+33 - 735 - 555 - 800",
    subject: "désinscription !",
    message: "zrfhoqzfheoshfoezf",
  },
  {
    id: 8,
    avatar:
      "https://img.search.brave.com/DBocuQMRvKkBYqT4Xj9Ly1iAW0R50YSovjzxArwt5IE/rs:fit:916:692:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMud2Fnd2Fsa2lu/Z3dlYi5jb20vbWVk/aWEvZGFpbHlfd2Fn/L2Jsb2dfYXJ0aWNs/ZXMvaGVyby8xNjA5/ODAxNDE3LjUyNTQw/Njgvc2NyZWVuLXNo/b3QtMjAyMS0wMS0w/NC1hdC0zMDMxNC1w/bS5wbmc",
    firstName: "Berthy",
    name: "Hoover",
    isEmployer: 0,
    isCandidate: 1,
    isAdmin: 0,
    isBan: 0,
    isChecked: 1,
    email: "souka@gmail.com",
    phone: "+33 - 775 - 558 - 374",
    subject: "emploi !",
    message: "zrfhoqzfheoshfoezf",
  },
  {
    id: 9,
    avatar:
      "https://img.search.brave.com/9XtR4b7OCYfsbrR3YiAqoWwes-5L0ifcMD8I_4CplBU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ibG9n/cy5jb2x1bWJpYW4u/Y29tL2NhdC10YWxl/cy93cC1jb250ZW50/L3VwbG9hZHMvc2l0/ZXMvNDMvMjAxNy8w/OS9TYXd5ZXJfRFNf/MTQwMi5qcGc",
    firstName: "Marie",
    name: "Du Nile",
    isEmployer: 0,
    isCandidate: 1,
    isAdmin: 0,
    isBan: 0,
    isChecked: 1,
    email: "marie@gmail.com",
    phone: "+33 - 655 - 531 - 111",
    subject: "reconversion !",
    message: "zrfhoqzfheoshfoezf",
  },
];

export const getListMessages = () => {
  return (dispatch) => {
    // console.log("get:admin List messages");
    dispatch({ type: GET_LIST_MESSAGES, payload: listMessages });
  };
};

// ADD Message (POST)
export const addMessage = (id) => {
  return (dispatch) => {
    // console.log("reply message action", id);
    // console.log("const replyMessage");
    dispatch({ type: ADD_MESSAGE, payload: listMessages });
  };
};

// DELETE Message
export const deleteMessage = (id) => {
  // console.log('DELETE MESSAGE (store)', id)
  return (dispatch) => {
    console.log("delete message action", id);
    // console.log("const deleteMessage");
    dispatch({ type: DELETE_MESSAGE, payload: listMessages });
  };
};
