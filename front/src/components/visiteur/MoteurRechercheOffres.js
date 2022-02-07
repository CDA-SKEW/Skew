import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { TextField } from '@material-ui/core';

export default function MoteurRechercheOffres({ handleSearchJob, handleSearchType, handleSearchLocation }) {

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
            <TextField
                placeholder="Job"
                name='job'
                onChange={(e) => handleSearchJob(e.target.value)}
                sx={{
                    width: 250,
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
                onChange={(e) => handleSearchType(e.target.value)}
                sx={{
                    width: 250,
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
                onChange={(e) => handleSearchLocation(e.target.value)}
                sx={{
                    width: 250,
                }}
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
                // onClick={() => submitFormSearch()}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}