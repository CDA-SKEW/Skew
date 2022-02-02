import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function MoteurRechercheOffres() {
    return (
        <Stack
            sx={{
                width: '80%',
                display: { sx: 'block', md: 'flex' }
            }}
        >
            <Autocomplete
                multiple
                options={top100Films.map((option) => option.job)}
                freeSolo
                sx={{
                    width: 250
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Job"
                    />
                )}
            />
            <Autocomplete
                multiple
                options={top100Films.map((option) => option.type)}
                freeSolo
                sx={{
                    width: 250
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Type"
                    />
                )}
            />
            <Autocomplete
                multiple
                options={top100Films.map((option) => option.lieu)}
                freeSolo
                sx={{
                    width: 250
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Localisation"
                    />
                )}
            />
        </Stack>
    )
}


const top100Films = [
    { job: 'Developpeur', lieu: 'Lyon', type: 'CDD' },
    { job: 'Maçon', lieu: 'Paris', type: 'CDI' },
    { job: 'Peintre', lieu: 'Marseille', type: 'Interim' },
];
