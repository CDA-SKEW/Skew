import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';

export default function VerifAuth() {
    
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/");
    }, 3000);

    return (
        <Box>
            <Typography variant='body1' align='center' sx={{ mt: 20 }}>
                Votre compte est vérifié, vous allez être redirigé vers la page d'accueil pour vous connecter.
            </Typography>
            <Box sx={{ mt: 10, mx: 'auto', width: 50 }}>
                <CircularProgress />
            </Box>
        </Box>
    );
};