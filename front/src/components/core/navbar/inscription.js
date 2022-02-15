import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { postAuth } from 'store/actions/AuthActions';

export default function Inscription() {

    const [mail, setMail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [toggle, setToggle] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e, newToggle) => {
        setToggle(newToggle);
    };

    const InscriptionList = [
        { titre: 'Mail', type: 'text', name: 'mail' },
        { titre: 'Mot de passe', type: 'password', name: 'pass1' },
        { titre: 'Confirmation mot de passe', type: 'password', name: 'pass2' },
    ]

    const handleFormId = (e) => {
        switch (e.target.name) {
            case 'mail':
                setMail(e.target.value)
                break;
            case 'pass1':
                setPass1(e.target.value)
                break;
            case 'pass2':
                setPass2(e.target.value)
                break;
            default:
        }
    }

    const SubmitFormIdInscription = async (e) => {
        // e.preventDefault();

        console.log('submitFormId', mail, pass1, pass2, toggle)

        if ( mail && toggle && pass1 === pass2) {
            //   await dispatch(postAuth({ prenom, nom, mail, pass1, toggle }));
            console.log('ok')
            setMail("");
            setPass1("");
            setPass2("");
            setToggle("");
        };
    };

    return (
        <Box
            sx={{
                display: 'block',
                width: 400,
                ml: 2,
            }}>
            <Typography
                variant='h4'
            >
                Inscription
            </Typography>
            {InscriptionList.map((InscriptionList, index) => (
                <TextField
                    key={index}
                    label={InscriptionList.titre}
                    name={InscriptionList.name}
                    type={InscriptionList.type}
                    variant="outlined"
                    fullWidth
                    onChange={(e) => handleFormId(e)}
                    sx={{
                        my: 1
                    }}
                />
            ))}
            <ToggleButtonGroup
                color="info"
                value={toggle}
                exclusive
                onChange={handleChange}
                fullWidth
                sx={{
                    my: 1
                }}
            >
                <ToggleButton value="candidat">Candidat</ToggleButton>
                <ToggleButton value="recruteur">Recruteur</ToggleButton>
            </ToggleButtonGroup>
            <Button
                variant="contained"
                fullWidth
                onClick={() => SubmitFormIdInscription()}
                sx={{
                    bgcolor: '#ABC4FF',
                    fontWeight: 'bold',
                    my: 1,
                    py: 1
                }}
            >
                Envoyer
            </Button>
        </Box>
    )
}