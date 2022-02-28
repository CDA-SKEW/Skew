import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { verifMail } from "store/actions/AuthActions";

export default function VerifAuth () {
  const isVerified = useSelector(state => state.auth);

    return (
        <div>
            <h1>Hello world</h1>
        </div>
    );
};