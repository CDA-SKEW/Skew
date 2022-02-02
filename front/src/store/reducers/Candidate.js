/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  dataProfilCandidate: {
    coord: [
      {
        adress: '22 rue la shmitrie 44250 un lieu perdu',
        mail: 'gogo@gadget.com',
        phone: '02.02.02.02.02'
      }
    ],
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
  },

  candidatures: {
    postul: [
      { id: 1, title: 'Boucher', ets: 'Arinfo', city: 'lambé', date: '31/02/2022', statusCheck: true, statusDist: false, statusQuery: false, statusValid: "Candidature Validé" },
      { id: 2, title: 'Dev Web', ets: 'Arinfo', city: 'Le Mans', date: '31/02/2022', statusCheck: false, statusDist: true, statusQuery: false },
      { id: 3, title: 'Tech-lead', ets: 'Arinfo', city: 'Paris 16eme', date: '31/02/2022', statusCheck: false, statusDist: false, statusQuery: true },
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
