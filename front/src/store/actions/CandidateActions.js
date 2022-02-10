/*
 * Import - Module
 * *************** */
// import axios from "axios";

/*
 * Import types { ... }
 * ******************** */

import {
    GET_PROFIL_CANDIDATE,
    POST_PROFIL_CANDIDATE,
    PUT_PROFIL_CANDIDATE,
    DELETE_PROFIL_CANDIDATE,
} from "./ActionTypes";

/*
 * Actions
 * ******* */
// Post profil candidate
// export const postFormProfilCandidate = (data) => {
//     return (dispatch) => {
//         console.log("POST_PROFIL_CANDIDATE action", data);
//         dispatch({ type: GET_PROFIL_CANDIDATE, payload: data });
//     };
// };

let data = {
    dataProfilCandidate: {
        coord:
        {
            id: 1,
            address: '22 rue la shmitrie',
            zipCode: '44520',
            town: 'Trou perdu',
            mail: 'gogo@gadget.com',
            phone: '0202020202'
        },
        exp: [
            {
                id: 1, company: 'comp', post: 'dev', desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                start: '30/02/2018', end: '30/02/2019'
            },
            {
                id: 2, company: 'EDF', post: 'dev-front', desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                start: '30/08/2016', end: '30/02/2018'
            }
        ],
        skill: ['HTML', 'CSS', 'VUEJS', 'REACTJS', 'FAIRE LE CAFE', 'DU BON', 'TEST'],
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

// Get profil candidate
export const getProfilCandidate = () => {
    return (dispatch) => {
        console.log("GET_PROFIL_CANDIDATE action", data);
        dispatch({ type: GET_PROFIL_CANDIDATE, payload: data.dataProfilCandidate });
    };
};


// Post profil Candidate
export const postFormProfilCandidate = (form) => {
    console.log('form ezfihjroh', form)
    // data.dataProfilCandidate.coord = form
    // data.dataProfilCandidate.exp = formExp
    // data.dataProfilCandidate.skill = formComp
    return (dispatch) => {
        console.log("POST_PROFIL_CANDIDATE action", data);
        dispatch({ type: POST_PROFIL_CANDIDATE, payload: data.dataProfilCandidate });
    };
};


// Put profil Candidate
export const putFormProfilCandidate = (data) => {
    return (dispatch) => {
        // console.log("PUT_PROFIL_EMPLOYER action", data);
        dispatch({ type: PUT_PROFIL_CANDIDATE, payload: data });
    };
};
// Delete profil Candidate
export const deleteFormProfilCandidate = (data) => {
    return (dispatch) => {
        // console.log("DELETE_PROFIL_EMPLOYER action", data);
        dispatch({ type: DELETE_PROFIL_CANDIDATE, payload: data });
    };
};
