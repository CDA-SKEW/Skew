import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { TextField } from '@material-ui/core';

export default function MoteurRechercheOffres() {
    return (

        <Paper
            component="form"
            sx={{
                display: "flex",
                alignItems: "center",
                width: 800,
                height: 75,
                bgcolor: '#fff',
                border: 3,
                mb: 10,
                mx: "auto",
                borderRadius: '25px'
            }}
        >
            <Autocomplete
                multiple
                options={Job.map((option) => option.job)}
                freeSolo
                sx={{
                    width: 250,
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Job"
                    />
                )}
            />
            <Divider
                variant='fullWidth'
                sx={{
                    m: 0.5,
                }}
                orientation="vertical"
            />
            <Autocomplete
                multiple
                options={Job.map((option) => option.job)}
                freeSolo
                sx={{
                    width: 250,
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Type"
                    />
                )}
            />
            <Divider
                variant='fullWidth'
                sx={{
                    m: 0.5
                }}
                orientation="vertical"
            />
            <Autocomplete
                multiple
                options={Job.map((option) => option.job)}
                freeSolo
                sx={{
                    width: 250,
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Localisation"
                    />
                )}
            />
            <Divider
                variant='fullWidth'
                sx={{
                    ml: 0.5
                }}
                orientation="vertical"
            />
            <IconButton
                type="submit"
                sx={{
                    borderRadius: "0 25px 25px 0",
                    height: '100%',
                    width: 75,
                }}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}


const Job = [
    { job: 'Developpeur', lieu: 'Lyon', type: 'CDD' },
    { job: 'Maçon', lieu: 'Paris', type: 'CDI' },
    { job: 'Peintre', lieu: 'Marseille', type: 'Interim' },
];
