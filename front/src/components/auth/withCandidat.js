import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'

export default function withCandidat(Component) {
    const CandidatRoute = () => {
        // if (!localStorage.getItem("user_token")) return <Navigate to="/" />;
        // else {
        //     const token = jwt_decode(localStorage.getItem("user_token"));
        //     if (token.isCandidat === 1) return 
        //     else return <Navigate to="/" />;
        // }
        return <Component />;
    };


    return CandidatRoute;
};