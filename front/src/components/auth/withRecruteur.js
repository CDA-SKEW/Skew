import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import { now } from "moment";

export default function withRecruteur(Component) {
    const RecruteurRoute = () => {
        if (!localStorage.getItem("user_token")) return <Navigate to="/" />;
        else {
            const token = jwt_decode(localStorage.getItem("user_token"));
            console.log("token decode", token)
            console.log('durée token', token.exp - token.iat)
            const toto = Date.now()
            console.log('toto', toto)
            console.log('token.exp', token.exp)
            console.log('fin token', Number(token.exp) -Number(toto))



            if (token.isVerified === 1 && token.isBanned === 0 && token.isRecruteur === 1) return <Component />;
            else {
                localStorage.removeItem("user_token");
                return <Navigate to="/" />;
            }
        }
        // return <Component />;
    };

    return RecruteurRoute;
};