import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

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
                borderRadius: '35px'
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
                    <InputBase
                        {...params}
                        sx={{
                            pl: 1
                        }}
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
                    <InputBase
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
                    <InputBase
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
                    // bgcolor: '#ABC4FF',
                    borderRadius: "0 35px 35px 0",
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
