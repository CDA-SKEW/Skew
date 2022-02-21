import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'

export default function withAdmin(Component) {
    const AdminRoute = () => {
        if (!localStorage.getItem("user_token")) return <Navigate to="/" />;
        else {
            const token = jwt_decode(localStorage.getItem("user_token"));
            if (token.isAdmin === 1) return <Component />;
            else return <Navigate to="/" />;
        }
    };

    return AdminRoute;
};