import React, { useState } from 'react'
import Box from "@mui/material/Box";
import { List, MenuItem, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ModalConnexionInscription from './ModalConnexionInscription';
import { useNavigate } from 'react-router-dom';

export default function MenuList({ pages }) {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Box
            sx={{
                display: { xs: "none", md: "block" },
            }}
        >
            <List
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: 'center',
                }}>
                {pages.map((page) => (
                    <MenuItem
                        key={page.titre}
                        onClick={() => navigate({ pathname: `/${page.lien}` })}
                        sx={{ width: 400 }}
                    >
                        <Typography textAlign="center">{page.titre}</Typography>
                    </MenuItem>

                ))}
                <Button
                    variant="contained"
                    onClick={handleOpen}
                    sx={{
                        bgcolor: 'secondary.main',
                        width: { md: 250, lg: 300, xl: 400 },
                        fontSize: 17,
                    }}
                >
                    Log in / Sign in
                </Button>

                <ModalConnexionInscription setOpen={setOpen} open={open} />

            </List>
        </Box>
    )
}