import * as React from 'react';
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { TextField } from '@material-ui/core';

export default function MoteurRechercheOffres({ handleSearchJob, handleSearchType, handleSearchLocation }) {

    return (

        <Paper
            component="form"
            sx={{
                display: "flex",
                alignItems: "center",
                width: '900px',
                height: 75,
                bgcolor: '#fff',
                border: 3,
                mb: 10,
                mx: "auto",
                borderRadius: '25px'
            }}
        >
            <TextField
                placeholder="Job"
                name='job'
                fullWidth
                onChange={(e) => handleSearchJob(e.target.value)}
                sx={{
                    width: '300px',
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
                onChange={(e) => handleSearchType(e.target.value)}
                sx={{
                    width: '300px',
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
                onChange={(e) => handleSearchLocation(e.target.value)}
                sx={{
                    width: '300px',
                }}
            />
        </Paper>
    )
}