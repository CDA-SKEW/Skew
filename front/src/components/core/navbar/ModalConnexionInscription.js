import React from 'react'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

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

    const ConnexionList = [
        { key: 1, titre: 'Mail', type: 'text' },
        { key: 2, titre: 'Mot de passe', type: 'password' },
    ]

    const InscriptionList = [
        { key: 1, titre: 'Prénom', type: 'text' },
        { key: 2, titre: 'Nom', type: 'text' },
        { key: 3, titre: 'Mail', type: 'text' },
        { key: 4, titre: 'Mot de passe', type: 'password' },
        { key: 5, titre: 'Confirmation mot de passe', type: 'password' },
    ]

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
                    display: 'flex'
                }}
            >
                <Box
                    sx={{
                        display: 'block',
                        width: 400,
                        pr: 2,
                        borderRight: 2
                    }}
                >
                    <Typography
                        variant='h4'
                    >
                        Connexion
                    </Typography>
                    {ConnexionList.map((index1) => (
                        <TextField
                            key={index1.key}
                            label={index1.titre}
                            type={index1.type}
                            variant="outlined"
                            fullWidth
                            sx={{
                                my: 1
                            }}
                        />
                    ))}
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        sx={{
                            color: '#0099FF'
                        }}
                    >
                        Mot de passe oublié
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: 'block',
                        width: 400,
                        ml: 2,
                    }}>
                    <Typography
                        variant='h4'
                    >
                        Inscription
                    </Typography>
                    {InscriptionList.map((index2) => (
                        <TextField
                            key={index2.key}
                            label={index2.titre}
                            type={index2.type}
                            variant="outlined"
                            fullWidth
                            sx={{
                                my: 1
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Modal>
    )
}