import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function StatBarHome() {

    const StatList = [
        { key: 1, nombre: "2500", titre: "Candidats" },
        { key: 2, nombre: "500", titre: "Entreprises" },
        { key: 3, nombre: "25000", titre: "Offres" }
    ]

    return (
        <Box
            sx={{
                maxWidth: '800px',
                bgcolor: "#FFD9B8",
                mx: 'auto',
                mb: "30px",
                height: 100,
                borderRadius: 50
            }}>
            <Stack direction="row" spacing={2} sx={{
                mx: "75px",
            }}>
                {StatList.map((index) => (
                    <Typography
                        variant='h5'
                        key={index.key}
                        align='center'
                        sx={{
                            bgcolor: "#FFD9B8",
                            color: '#000000',
                            boxShadow: "none",
                            pt: 2,
                            width: '33%'
                        }}>
                        {index.nombre}
                        <br />
                        {index.titre}
                    </Typography>
                ))}
            </Stack>
        </Box>
    );
}