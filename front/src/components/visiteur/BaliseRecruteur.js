import { Box } from '@mui/system'
import React from 'react';
import Typography from '@mui/material/Typography';

export default function BaliseRecruteur({ index }) {
    return (
        <Box
            sx={{
                bgcolor: "#FFD9B8"
            }}>
            <Typography variant="body1" color="initial">
                {index.titre}
            </Typography>
        </Box>
    )
}
