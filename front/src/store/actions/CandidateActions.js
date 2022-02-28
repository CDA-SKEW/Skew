/*
 * Import - Module
 * *************** */
import axios from "axios";

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


//     candidatures: {
//         postul: [
//             { id: 1, title: 'Boucher', ets: 'Arinfo', city: 'lambé', date: '31/02/2022', statusCheck: true, statusDist: false, statusQuery: false, statusValid: "Candidature Validé" },
//             { id: 2, title: 'Dev Web', ets: 'Arinfo', city: 'Le Mans', date: '31/02/2022', statusCheck: false, statusDist: true, statusQuery: false },
//             { id: 3, title: 'Tech-lead', ets: 'Arinfo', city: 'Paris 16eme', date: '31/02/2022', statusCheck: false, statusDist: false, statusQuery: true },
//         ]
//     }
// };

// Get profil candidate
export const getProfilCandidate = (id) => {
    console.log("contact user ACTION", id);
    return (dispatch) => {
        return axios
            .get(`http://localhost:3033/api/candidat/profil/5`)
            .then((res) => {
                console.log("Get Profil Candidate", res.data);
                dispatch({ type: GET_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    }
};


// Post profil Candidate
export const postFormProfilCandidate = (form) => {
    console.log('form PROFIL CANDIDATE POST', form)
    return (dispatch) => {
        return axios
            .post(`http://localhost:3033/api/candidat/profil/experience`, form)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: POST_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));


    };
};
// Delete profil Candidate
// export const deleteFormProfilCandidate = (form) => {
//     console.log('form PROFIL CANDIDATE DELETE', form)
//     return (dispatch) => {
//         // console.log("DELETE_PROFIL_EMPLOYER action", data);
//         dispatch({ type: DELETE_PROFIL_CANDIDATE, payload: res.data.userProfil });
//     };
// };


// Put profil Contact Candidate
export const putFormProfilCandidate = (form) => {
    // console.log('form ACTION PROFIL CANDIDATE PUT', form)
    return (dispatch) => {
        return axios
            .put(`http://localhost:3033/api/candidat/profil/contact/${form.id}`, form)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: PUT_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};

// Put profil Experience Candidate

export const putFormProfilCandidateExperience = (form, id) => {
    console.log('form ACTION PROFIL CANDIDATE Experience PUT', form)
    return (dispatch) => {
        return axios
            .put(`http://localhost:3033/api/candidat/profil/experience/${form.id}`, form)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: PUT_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};