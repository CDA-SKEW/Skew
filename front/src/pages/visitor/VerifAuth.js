import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';

export default function VerifAuth() {
    
    // const navigate = useNavigate();

    // setTimeout(() => {
    //     navigate("/");
    // }, 5000);

    return (
        <Box>
            <Typography variant='body1' align='center' sx={{ mt: 20 }}>
                La vérification de votre compte est prise en compte, nous allons vous rediriger dans quelques secondes.
            </Typography>
            <Box sx={{ mt: 10, mx: 'auto', width: 50 }}>
                <CircularProgress />
            </Box>
        </Box>
    );
};