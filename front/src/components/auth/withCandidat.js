import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'

export default function withCandidat(Component) {
    const CandidatRoute = () => {
<<<<<<< HEAD
        // if (!localStorage.getItem("user_token")) return <Navigate to="/" />;
        // else {
        //     const token = jwt_decode(localStorage.getItem("user_token"));
        //     if (token.isCandidat === 1) return 
        //     else return <Navigate to="/" />;
        // }
        return <Component />;
=======
        if (!localStorage.getItem("user_token")) return <Navigate to="/" />;
        else {
            const token = jwt_decode(localStorage.getItem("user_token"));
            if (token.isVerified === 1 && token.isBanned === 0 && token.isCandidat === 1) return <Component />;
            else return <Navigate to="/" />;
        }
>>>>>>> 9428403d292d450365e6560ab6863a5b13a84732
    };


    return CandidatRoute;
};