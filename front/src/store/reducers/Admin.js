/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  listUsers: [
    {
      id: 1,
      date: new Date(),
      firstName: "Jean",
      lastName: "Cuckstein",
      isEmployer: 1,
      isCandidate: 0,
      isAdmin: 0,
      isBan: 0,
      email: "jean@gmail.com",
    },
    {
      id: 2,
      date: new Date(),
      firstName: "Armong",
      lastName: "Arlert",
      isEmployer: 0,
      isCandidate: 1,
      isAdmin: 0,
      isBan: 0,
      email: "armong@gmail.com",
    },
    {
      id: 3,
      date: new Date(),
      firstName: "Cuckren",
      lastName: "Yoghurt",
      isEmployer: 0,
      isCandidate: 1,
      isAdmin: 0,
      isBan: 0,
      email: "cuckren@gmail.com",
    },
    {
      id: 4,
      date: new Date(),
      firstName: "Samy",
      lastName: "Lynn Jackson",
      isEmployer: 1,
      isCandidate: 0,
      isAdmin: 0,
      isBan: 0,
      email: "samy@gmail.com",
    },
    {
      id: 5,
      date: new Date(),
      firstName: "Dot",
      lastName: "Pixis",
      isEmployer: 0,
      isCandidate: 1,
      isAdmin: 0,
      isBan: 0,
      email: "dot@gmail.com",
    },
    {
      id: 6,
      date: new Date(),
      firstName: "Connie",
      lastName: "Springer",
      isEmployer: 1,
      isCandidate: 0,
      isAdmin: 0,
      isBan: 0,
      email: "springer@gmail.com",
    },
    {
      id: 7,
      date: new Date(),
      firstName: "Mankasa",
      lastName: "Crackerman",
      isEmployer: 1,
      isCandidate: 0,
      isAdmin: 0,
      isBan: 0,
      email: "dogkasa@gmail.com",
    },
    {
      id: 8,
      date: new Date(),
      firstName: "Berthy",
      lastName: "Hoover",
      isEmployer: 0,
      isCandidate: 1,
      isAdmin: 0,
      isBan: 0,
      email: "souka@gmail.com",
    },
    {
      id: 9,
      date: new Date(),
      firstName: "Marie",
      lastName: "Du Nile",
      isEmployer: 0,
      isCandidate: 1,
      isAdmin: 0,
      isBan: 0,
      email: "marie@gmail.com",
    },
  ],
};

/*
 * Reducers
 * ******** */
export function AdminReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_LIST_USERS:
      console.log("LIST_USERS", action.payload);
      return { ...state, listUsers: action.payload };
  }
}

/*
 * Getters
 * ******* */
