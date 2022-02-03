import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';

export default function Inscription() {

    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [mail, setMail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [toggle, setToggle] = useState('');

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setToggle(newAlignment);
    };

    const InscriptionList = [
        { key: 1, titre: 'Prénom', type: 'text', name: 'prenom' },
        { key: 2, titre: 'Nom', type: 'text', name: 'nom' },
        { key: 3, titre: 'Mail', type: 'text', name: 'mail' },
        { key: 4, titre: 'Mot de passe', type: 'password', name: 'pass1' },
        { key: 5, titre: 'Confirmation mot de passe', type: 'password', name: 'pass2' },
    ]

    const handleFormId = (e) => {
        switch (e.target.name) {
            case 'prenom':
                setPrenom(e.target.value)
                break;
            case 'nom':
                setNom(e.target.value)
                break;
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

    const SubmitFormIdInscription = async () => {
        console.log('submitFormId', mail, pass1)
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
            {InscriptionList.map((index2) => (
                <TextField
                    key={index2.key}
                    label={index2.titre}
                    name={index2.name}
                    type={index2.type}
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
                value={alignment}
                name='toggle'
                exclusive
                onChange={(e) => handleChange(e)}
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