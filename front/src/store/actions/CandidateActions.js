/*
 * Import - Module
 * *************** */
import { api } from "configs/axios";
import { id } from "date-fns/locale";

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

const token = '5' // || localStorage.getItem('user_token')

/*
 * Actions
 * ******* */
// ######################
// # GET PROFIL COMPLET #
// ######################

// Get profil candidate

export const getProfilCandidate = (user_id) => {
    // console.log("contact user ACTION", user_id);
    return (dispatch) => {
        return api
            .get(`/candidat/profil/${token}`)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: GET_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    }
};

export const getOffreCandidate = () => {
    // console.log("OFFRE user ACTION", token);
    return (dispatch) => {
        return api
            .get(`/candidat/candidatures/${token}`)
            .then((res) => {
                // console.log("Get offre Candidate", res.data);
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
    console.log('form PROFIL CANDIDATE POST', form)
    return (dispatch) => {
        return api
            .post(`/candidat/profil/experience`, form)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: POST_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));


    };
};
// *************************************************

// *************************************************

// Post profil Candidate SKILL

export const postFormProfilCandidateSkill = (form) => {
    console.log('form PROFIL CANDIDATE POST', form)
    return (dispatch) => {
        return api
            .post(`/candidat/profil/skill`, form)
            .then((res) => {
                console.log("Post skill Profil Candidate", res.data);
                dispatch({ type: POST_PROFIL_CANDIDATE, payload: res.data.message });
            })
            .catch((err) => console.log(err));


    };
};
// *************************************************

// *************************************************

// Post profil Candidate SKILL

export const postFormProfilCandidateInterest = (form) => {
    console.log('form PROFIL CANDIDATE POST', form)
    return (dispatch) => {
        return api
            .post(`/candidat/profil/interest`, form)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: POST_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));


    };
};
// *************************************************

// *************************************************

// Post profil Candidate CERTIFICATE

export const postFormProfilCandidateCertificate = (form) => {
    console.log('form PROFIL CANDIDATE POST', form)
    return (dispatch) => {
        return api
            .post(`/candidat/profil/certificate`, form)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: POST_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));


    };
};
// *************************************************
export const postFormDocument = (form) => {
    // console.log('form Document', form)
    return (dispatch) => {
        return api
            .post(`/candidat/profil/document`, form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                // console.log("Get Profil Candidate ACTION RETOUR DU BACK TO FRONT ", res.data);
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
    // console.log('form PROFIL CANDIDATE DELETE', id)
    return (dispatch) => {
        return api
            .delete(`/candidat/profil/experience/${id}`, form)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: DELETE_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};
// *************************************************

// *************************************************
// Delete profil Candidate SKILL

export const deleteFormProfilCandidateSkill = (id) => {
    console.log('form PROFIL CANDIDATE DELETE', id)
    return (dispatch) => {
        return api
            .delete(`/candidat/profil/skill/${id}`)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: DELETE_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};
// *************************************************

// *************************************************

// Delete profil Candidate INTEREST

export const deleteFormProfilCandidateInterest = (id) => {
    console.log('form PROFIL CANDIDATE DELETE', id)
    return (dispatch) => {
        return api
            .delete(`/candidat/profil/interest/${id}`)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: DELETE_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};
// *************************************************

// *************************************************

// Delete profil Candidate CERTIFICATE

export const deleteFormProfilCandidateCertificate = (id) => {
    console.log('form PROFIL CANDIDATE DELETE', id)
    return (dispatch) => {
        return api
            .delete(`/candidat/profil/certificate/${id}`)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: DELETE_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};
// *************************************************
export const deleteFormProfilCandidateDocument = (id_document) => {
    console.log('form PROFIL CANDIDATE DELETE DOCUMENT', id_document)
    return (dispatch) => {
        return api
            .delete(`/candidat/profil/document/${id_document}`)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: DELETE_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};

export const deleteFormProfilCandidateOffre = (id) => {
    // console.log('form OFFRE CANDIDATE DELETE', id)
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
    // console.log('form ACTION PROFIL CANDIDATE PUT', form)
    return (dispatch) => {
        return api
            .put(`/candidat/profil/contact/${form.user_id}`, form)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: PUT_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};

// *************************************************

// Put profil Experience Candidate

export const putFormProfilCandidateExperience = (form, id) => {
    console.log('form ACTION PROFIL CANDIDATE Experience PUT', form)
    return (dispatch) => {
        return api
            .put(`/candidat/profil/experience/${form.id}`, form)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: PUT_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};

// *************************************************

// Put profil Certificate Candidate
export const putFormProfilCandidateCertificate = (form, id) => {
    console.log('form ACTION PROFIL CANDIDATE Experience PUT', form)
    return (dispatch) => {
        return api
            .put(`/candidat/profil/certificate/${form.id}`, form)
            .then((res) => {
                // console.log("Get Profil Candidate", res.data);
                dispatch({ type: PUT_PROFIL_CANDIDATE, payload: res.data.userProfil });
            })
            .catch((err) => console.log(err));
    };
};