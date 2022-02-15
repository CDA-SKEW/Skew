import * as React from 'react';
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import TextField from '@mui/material/TextField';

export default function MoteurRechercheOffres({ handleSearchJob, handleSearchType, handleSearchLocation }) {

    return (

        <Paper
            component="form"
            sx={{
                display: { xs: 'block', md: "flex" },
                alignItems: "center",
                width: { xs: 350, md: 600, lg: 900 },
                height: { md: 75 },
                bgcolor: '#fff',
                mb: 10,
                mx: "auto",
                p: 3,
                boxShadow: '0 0 25px #1e90ff',
            }}
        >
            <TextField
                placeholder="Job"
                name='job'
                fullWidth
                variant='standard'
                onChange={(e) => handleSearchJob(e.target.value)}
                sx={{
                    width: 300,
                }}
            />
            <Divider
                variant='fullWidth'
                sx={{
                    m: 0.5,
                }}
                orientation="vertical"
            />
            <TextField
                placeholder="Type"
                name='type'
                fullWidth
                variant='standard'
                onChange={(e) => handleSearchType(e.target.value)}
                sx={{
                    width: 300,
                }}
            />
            <Divider
                variant='fullWidth'
                sx={{
                    m: 0.5
                }}
                orientation="vertical"
            />
            <TextField
                placeholder="Localisation"
                name='location'
                fullWidth
                variant='standard'
                onChange={(e) => handleSearchLocation(e.target.value)}
                sx={{
                    width: 300,
                }}
            />
        </Paper>
    )
}