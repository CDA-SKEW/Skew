import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FormContact() {

    const InputList = [
        { key: 1, label: "Nom" },
        { key: 2, label: "Prenom" },
        { key: 3, label: "Tel" },
        { key: 4, label: "Mail" },
        { key: 5, label: "Sujet" },
    ]

    return (
        <Box sx={{ px: 5 }}>
            <Typography
            align='center'
                variant="h3"
                sx={{
                    borderBottom: 2,
                    mx: 'auto',
                    mb: 3,
                    pb: 5,
                    width: '50%',
                }}
            >
                Contactez-nous
            </Typography>
            <Box>
                {InputList.map((index) => (
                    <TextField
                        key={index.key}
                        label={index.label}
                        color='info'
                        variant="outlined"
                        fullWidth
                        sx={{
                            display: "block",
                            width: '100%',
                            maxWidth: 620,
                            mx: 'auto',
                            my: 2
                        }}
                    />
                ))}
                <TextField
                    label='Message'
                    color='info'
                    variant="outlined"
                    fullWidth
                    multiline
                    rows='10'
                    sx={{
                        display: "block",
                        width: '100%',
                        maxWidth: 620,
                        mx: 'auto',
                        my: 2
                    }}
                />
                <Button
                    variant="contained"
                    color='info'
                    fullWidth
                    size='large'
                    sx={{
                        display: "block",
                        width: '100%',
                        maxWidth: 620,
                        mx: 'auto',
                        my: 2,
                        fontSize: '20px'
                    }}
                >
                    Envoyer
                </Button>
            </Box>
        </Box>
    );
};