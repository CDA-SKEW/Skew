import React from 'react'
import Box from "@mui/material/Box";
import { List } from "@mui/material";
import ListItemLink from "components/core/navbar/ListItemLink";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ModalConnexionInscription from './ModalConnexionInscription';

<ListItemLink />

ListItemLink.propTypes = {
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default function MenuList({ pages }) {

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