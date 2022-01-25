import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function StatBarHome() {

const StatList = [
    {key: 1, nombre: "2500", titre: "Candidats"},
    {key: 2, nombre: "500", titre: "Entreprises"},
    {key: 3, nombre: "25000", titre: "Offres"}
]

    return (
        <Box sx={{
            bgcolor: "#FFD9B8",
            width: 600,
            mx: 'auto',
            mb: "30px",
            borderRadius: 50
        }}>
            <Stack direction="row" spacing={2} sx = {{
                mx: "75px",
            }}>
                {StatList.map((index) => (
                <Item key={index.key} sx={{
                    bgcolor: "#FFD9B8",
                    color: '#000000',
                    boxShadow: "none",
                    width: 150
                }}>
                    {index.nombre}
                    <br/>
                    {index.titre}
                </Item>
                ))}
            </Stack>
        </Box>
    );
}