import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TempDirUser from './TempDirUser';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import Modal from '@mui/material/Modal';

import { store } from 'store';
import { checkToken, login } from "store/actions/AuthActions";
// import { getListUsers } from "store/actions/AdminActions";

store.dispatch(checkToken())

export default function Connexion() {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const ConnexionList = [
        { titre: 'Mail', name: 'mail', type: 'text' },
        { titre: 'Mot de passe', name: 'pass', type: 'password' },
    ]

    const dataUser = useSelector(state => state.auth.user)

    const handleFormId = (e) => {
        switch (e.target.name) {
            case 'mail':
                setMail(e.target.value)
                break;
            case 'pass':
                setPass(e.target.value)
                break;
            default:
        }
    }

    const SubmitFormId = async () => {
        console.log('submitFormId', mail, pass)
        if (mail && pass) {
            await dispatch(login({ mail, pass }))
            setOpen(true)
            setMail('')
            setPass('')
            dispatch(checkToken())
            if (dataUser.isAdmin === 1) {
                navigate("/Admin");
            }
            if (dataUser.isRecruteur === 1) {
                navigate("/employer/dashboard");
            }
            if (dataUser.isCandidat === 1) {
                navigate("/candidat/dashboard");
            }
        };
    };

    return (
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
            {ConnexionList.map((connexion, index) => (
                <TextField
                    key={index}
                    label={connexion.titre}
                    name={connexion.name}
                    type={connexion.type}
                    variant="outlined"
                    fullWidth
                    onChange={(e) => handleFormId(e)}
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
                    color: '#0099FF',
                    fontSize: 17,
                    my: 3
                }}
            >
                Mot de passe oublié
            </Link>
            <Button
                variant="contained"
                fullWidth
                onClick={() => SubmitFormId()}
                sx={{
                    bgcolor: '#ABC4FF',
                    fontWeight: 'bold',
                    my: 1,
                    py: 1
                }}
            >
                Envoyer
            </Button>

            <TempDirUser />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Hello
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {mail}
                    </Typography>
                </Box>
            </Modal>



        </Box>
    )
}