import React from 'react'
import Box from "@mui/material/Box";
import { List } from "@mui/material";
import ListItemLink from "components/core/navbar/ListItemLink";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

<ListItemLink />

ListItemLink.propTypes = {
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function MenuList({ pages }) {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: { xs: "none", md: "block" } }}>
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
                        fontWeight: 'bold'
                    }}
                >
                    Log in / Sign in
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <h2 id="parent-modal-title">Connexion</h2>
                        <p id="parent-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
                    </Box>
                </Modal>
            </List>
        </Box>
    )
}