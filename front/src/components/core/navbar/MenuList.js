import React from 'react'
import Box from "@mui/material/Box";
import { List } from "@mui/material";
import Button from '@mui/material/Button';
import ModalConnexionInscription from './ModalConnexionInscription';

export default function MenuList({ pages, ListItemLink }) {

    const [open, setOpen] = React.useState(false);

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
                    <ListItemLink
                        key={page.titre}
                        primary={page.titre}
                        to={page.lien}
                    />
                ))}
                <Button
                    variant="contained"
                    onClick={handleOpen}
                    sx={{
                        bgcolor: '#ABC4FF',
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