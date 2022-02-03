import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TempDirUser from './TempDirUser';
import { getListUsers } from "store/actions/UsersActions";
import { useDispatch, useSelector } from "react-redux";

export default function Connexion() {

    const listUsers = useSelector((state) => state.admin.listUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListUsers());
    }, []);

    const [mail, setMail] = useState()
    const [pass, setPass] = useState()

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
            await dispatch(listUsers({ mail, pass }));
            setMail("");
            setPass("");
            // dispatch(checkUx());
            // navigate('/Admin')
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

