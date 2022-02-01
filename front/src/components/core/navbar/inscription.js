import React from 'react'
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';

export default function Inscription() {

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const InscriptionList = [
        { key: 1, titre: 'Prénom', type: 'text' },
        { key: 2, titre: 'Nom', type: 'text' },
        { key: 3, titre: 'Mail', type: 'text' },
        { key: 4, titre: 'Mot de passe', type: 'password' },
        { key: 5, titre: 'Confirmation mot de passe', type: 'password' },
    ]

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
                    type={index2.type}
                    variant="outlined"
                    fullWidth
                    sx={{
                        my: 1
                    }}
                />
            ))}
            <ToggleButtonGroup
                color="info"
                value={alignment}
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