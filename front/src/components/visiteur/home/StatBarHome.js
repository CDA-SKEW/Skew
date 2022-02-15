import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function StatBarHome() {

    const StatList = [
        { nombre: "2500", titre: "Candidats" },
        { nombre: "500", titre: "Entreprises" },
        { nombre: "25000", titre: "Offres" }
    ]

    return (
        <Box
            maxWidth='xl'
            sx={{
                bgcolor: "primary.main",
                mx: 'auto',
                my: 10,
                borderRadius: {sx: 0, md: 50}
            }}>
            <Stack direction="row" spacing={2} sx={{
                mx: {xs: 0, xl: "75px"},
            }}>
                {StatList.map((stat, index) => (
                    <Typography
                        variant='h3'
                        key={index}
                        align='center'
                        sx={{
                            boxShadow: "none",
                            py: 3,
                            width: '33%',
                            fontSize: { xs: 17, md: 35 }
                        }}>
                        {stat.nombre}
                        <br />
                        {stat.titre}
                    </Typography>
                ))}
            </Stack>
        </Box>
    );
}