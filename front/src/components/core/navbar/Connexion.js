import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TempDirUser from './TempDirUser';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { store } from 'store';
import { checkToken, login } from "store/actions/AuthActions";
// import { getListUsers } from "store/actions/AdminActions";

store.dispatch(checkToken())

export default function Connexion() {

    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const ConnexionList = [
        { titre: 'Mail', name: 'mail', type: 'text' },
        { titre: 'Mot de passe', name: 'pass', type: 'password' },
    ]

    const dataUser = useSelector(state => state.auth.user)

    const handleFormId = (e) => {
        switch (e.target.name) {
            case 'mail':
                setMail(e.target.value)
                break;
            case 'pass':
                setPass(e.target.value)
                break;
            default:
        }
    }

    const SubmitFormId = async () => {
        console.log('submitFormId', mail, pass)
        if (mail && pass) {
            await dispatch(login({ mail, pass }))
            setMail('')
            setPass('')
             setTimeout(() => {
                dispatch(checkToken())
             }, 777); 
            if (dataUser.isAdmin === 1) {
                navigate("/Admin");
            }
            else if (dataUser.isRecruteur === 1) {
                navigate("/employer/dashboard");
            }
            else if (dataUser.isCandidat === 1) {
                navigate("/candidat/dashboard");
            }
            else {
                navigate("/")
            }
        };
    };

    return (
        <Box
            sx={{
                display: 'block',
                width: 400,
                pr: 2,
                borderRight: 2
            }}
        >
            <Typography
                variant='h4'
            >
                Connexion
            </Typography>
            {ConnexionList.map((connexion, index) => (
                <TextField
                    key={index}
                    label={connexion.titre}
                    name={connexion.name}
                    type={connexion.type}
                    variant="outlined"
                    fullWidth
                    onChange={(e) => handleFormId(e)}
                    sx={{
                        my: 1
                    }}
                />
            ))}
            <Link
                component="button"
                variant="body2"
                onClick={() => {
                    console.info("I'm a button.");
                }}
                sx={{
                    color: '#0099FF',
                    fontSize: 17,
                    my: 3
                }}
            >
                Mot de passe oublié
            </Link>
            <Button
                variant="contained"
                fullWidth
                onClick={() => SubmitFormId()}
                sx={{
                    bgcolor: '#ABC4FF',
                    fontWeight: 'bold',
                    my: 1,
                    py: 1
                }}
            >
                Envoyer
            </Button>

            <TempDirUser />
        </Box>
    )
}