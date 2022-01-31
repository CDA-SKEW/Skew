/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  user: {
    address: '22 rue la shmitrie',
    mail: 'gogo@gadget.com',
    phone: '02.02.02.02.02',
    exp: [
      { id: 1, company: 'comp', post: 'dev', start: '30/02/2018', end: '30/02/2019' },
      { id: 2, company: 'comp', post: 'dev', start: '30/02/2018', end: '30/02/2019' }
    ],
    skill: ['HTML', 'CSS', 'VUEJS', 'REACTJS', 'FAIRE LE CAFE'],
    interest: ['Planche à voile', 'cerveau lent', 'Foot', 'Pillier de comptoir'],
    certificate: [
      { id: 1, school: 'Arinfo', title: 'Dev Web', year: 2020, validate: 0 },
      { id: 2, school: 'Arinfo', title: 'CDA', year: 2022, validate: 0 },
      { id: 3, school: 'Arinfo', title: 'Faire le café', year: 2023, validate: 0 },
    ],
    cv: [
      { id: 1, title: 'Dev-web' },
      { id: 2, title: 'CDA' },
    ]
  }
};

/*
 * Reducers
 * ******** */
export function CandidateReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_CANDIDATE:
      return { ...state, user: action.payload };
  }
}

/*
 * Getters
 * ******* */
