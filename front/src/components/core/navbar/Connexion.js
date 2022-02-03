import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TempDirUser from './TempDirUser';
import { getAuth } from "store/actions/AuthActions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Connexion() {

    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = getAuth();
    const navigate = useNavigate();

    const authData = useSelector((state) => state.auth.authData);

    const ConnexionList = [
        { key: 1, titre: 'Mail', name: 'mail', type: 'text' },
        { key: 2, titre: 'Mot de passe', name: 'pass', type: 'password' },
    ]

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
            await dispatch(getAuth)
            console.log('auth.mail', authData)
            // if (authData.role = 'candidat') {
                // navigate('/candidat/dashboard')
            //     console.log('oui')
            // } else {
            //     console.log("non")
            // }
        }
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
            {ConnexionList.map((index1) => (
                <TextField
                    key={index1.key}
                    label={index1.titre}
                    name={index1.name}
                    type={index1.type}
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