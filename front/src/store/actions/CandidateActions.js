/*
 * Import - Module
 * *************** */
import { api } from "configs/axios";
import jwt_decode from "jwt-decode"

/*
 * Import types { ... }
 * ******************** */


import {
    GET_PROFIL_CANDIDATE,
    POST_PROFIL_CANDIDATE,
    PUT_PROFIL_CANDIDATE,
    DELETE_PROFIL_CANDIDATE,
    GET_OFFRE_CANDIDATE,
    DELETE_OFFRE_CANDIDATE,
} from "./ActionTypes";

let token
if (localStorage.getItem('user_token')) token = jwt_decode(localStorage.getItem('user_token'))
// token = '5' // || localStorage.getItem('user_token')
// const 

console.log("token", token)

/*
 * Actions
 * ******* */
// ######################
// # GET PROFIL COMPLET #
// ######################

// Get profil candidate
export const getProfilCandidate = () => {
    console.log('response getProfilCandidate 1')
    return (dispatch) => {
        return api
            .get(`/candidat/profil/${token.id}`)
            .then((res) => {
                console.log('response getProfilCandidate 2', res)
                dispatch({ type: GET_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    }
};

export const getOffreCandidate = () => {
    return (dispatch) => {
        return api
            .get(`/candidat/candidatures/${token.id}`)
            .then((res) => {
                dispatch({ type: GET_OFFRE_CANDIDATE, payload: res.data.candidatures });
            })
            .catch((err) => console.log(err));
    }
};

// ########
// # POST #
// ########

// *************************************************
// Post profil Candidate EXPERIENCE
export const postFormProfilCandidateExperience = (form) => {
    return (dispatch) => {
        return api
            .post(`/candidat/profil/experience`, form)
            .then((res) => {
                dispatch({ type: POST_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));


    };
};
// *************************************************

// *************************************************

// Post profil Candidate SKILL

export const postFormProfilCandidateSkill = (form) => {
    return (dispatch) => {
        return api
            .post(`/candidat/profil/skill`, form)
            .then((res) => {
                dispatch({ type: POST_PROFIL_CANDIDATE, payload: res.data.message });
            })
            .catch((err) => console.log(err));


    };
};
// *************************************************

// *************************************************

// Post profil Candidate SKILL

export const postFormProfilCandidateInterest = (form) => {
    return (dispatch) => {
        return api
            .post(`/candidat/profil/interest`, form)
            .then((res) => {
                dispatch({ type: POST_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));


    };
};
// *************************************************

// *************************************************

// Post profil Candidate CERTIFICATE

export const postFormProfilCandidateCertificate = (form) => {
    return (dispatch) => {
        return api
            .post(`/candidat/profil/certificate`, form)
            .then((res) => {
                dispatch({ type: POST_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));


    };
};
// *************************************************
export const postFormDocument = (form) => {
    return (dispatch) => {
        return api
            .post(`/candidat/profil/document`, form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                dispatch({ type: POST_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));


    };
};

// ##########
// # DELETE #
// ##########

// *************************************************
// Delete profil Candidate EXPERIENCE

export const deleteFormProfilCandidateExperience = (id, form) => {
    return (dispatch) => {
        return api
            .delete(`/candidat/profil/experience/${id}`, form)
            .then((res) => {
                dispatch({ type: DELETE_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};
// *************************************************

// *************************************************
// Delete profil Candidate SKILL

export const deleteFormProfilCandidateSkill = (id) => {
    return (dispatch) => {
        return api
            .delete(`/candidat/profil/skill/${id}`)
            .then((res) => {
                dispatch({ type: DELETE_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};
// *************************************************

// *************************************************

// Delete profil Candidate INTEREST

export const deleteFormProfilCandidateInterest = (id) => {
    return (dispatch) => {
        return api
            .delete(`/candidat/profil/interest/${id}`)
            .then((res) => {
            })
            .catch((err) => console.log(err));
    };
};
// *************************************************

// *************************************************

// Delete profil Candidate CERTIFICATE

export const deleteFormProfilCandidateCertificate = (id) => {
    return (dispatch) => {
        return api
            .delete(`/candidat/profil/certificate/${id}`)
            .then((res) => {
                dispatch({ type: DELETE_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};
// *************************************************
export const deleteFormProfilCandidateDocument = (id_document) => {
    return (dispatch) => {
        return api
            .delete(`/candidat/profil/document/${id_document}`)
            .then((res) => {
                dispatch({ type: DELETE_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};

export const deleteFormProfilCandidateOffre = (id) => {
    return (dispatch) => {
        return api
            .delete(`/candidat/candidatures/${id}`)
            .then((res) => {
                dispatch({ type: DELETE_OFFRE_CANDIDATE, payload: res.data.candidatures });
            })
            .catch((err) => console.log(err));
    };
};
// #######
// # PUT #
// #######

// *************************************************

// Put profil Contact Candidate

export const putFormProfilCandidate = (form) => {
    return (dispatch) => {
        return api
            .put(`/candidat/profil/contact/${form.user_id}`, form)
            .then((res) => {
                dispatch({ type: PUT_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};

// *************************************************

// Put profil Experience Candidate

export const putFormProfilCandidateExperience = (form, id) => {
    return (dispatch) => {
        return api
            .put(`/candidat/profil/experience/${form.id}`, form)
            .then((res) => {
                dispatch({ type: PUT_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};

// *************************************************

// Put profil Certificate Candidate
export const putFormProfilCandidateCertificate = (form, id) => {
    return (dispatch) => {
        return api
            .put(`/candidat/profil/certificate/${form.id}`, form)
            .then((res) => {
                dispatch({ type: PUT_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};