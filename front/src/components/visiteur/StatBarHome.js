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
            maxWidth='xl'
            sx={{
                bgcolor: "#FFD9B8",
                mx: 'auto',
                my: 10,
                borderRadius: {sx: 0, md: 50}
            }}>
            <Stack direction="row" spacing={2} sx={{
                mx: {xs: 0, xl: "75px"},
            }}>
                {StatList.map((index) => (
                    <Typography
                        variant='h3'
                        key={index.key}
                        align='center'
                        sx={{
                            bgcolor: "#FFD9B8",
                            color: '#000000',
                            boxShadow: "none",
                            py: 3,
                            width: '33%',
                            fontSize: { xs: 17, md: 35 }
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