import React from 'react'
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import Connexion from './Connexion';
import Inscription from './inscription';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function ModalConnexionInscription({ open, setOpen }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box
                sx={{
                    ...style,
                    width: 800,
                    bgcolor: '#fff',
                    borderRadius: 5,
                    display: 'flex',
                    textAlign: 'center'
                }}
            >
                <Connexion />
                <Inscription />
            </Box>
        </Modal>
    )
}