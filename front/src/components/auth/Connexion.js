import React, { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import { changePass, login } from "store/actions/AuthActions";

export default function Connexion(props) {
    const { dispatch,
        successLostMdp,
        setSuccessLostMdp,
        errorConnexion,
        setErrorInscription,
        setErrorConnexion,
        setSuccessInscription,
        isAdmin,
        isRecruteur,
        isCandidat,
        errorChamps,
        setErrorChamps,
        flashCon
    } = props

    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [mailLostPass, setMailLostPass] = useState('');
    const [openChildModal, setOpenChildModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [certificate, setCertificate] = useState(false);

    const handleClickShowPassword = () => { setShowPassword(!showPassword) };
    const handleMouseDownPassword = (event) => { event.preventDefault(); };
    const handleCloseChildModal = () => { setOpenChildModal(false); };
    const handleSubmitChildModal = () => {
        if (mailLostPass.length > 0) {
            dispatch(changePass({ mailLostPass }));
            setSuccessLostMdp('Un mail vient de vous être envoyé!');
            setErrorChamps('');
            setErrorConnexion('');
        }
    }

    const SubmitFormId = (e) => {
        if (mail && pass) {
            dispatch(login({ mail, pass }));
            setPass('');
            setCertificate(true);
            setErrorChamps('');
        } else {
            setErrorChamps('Tous les champs doivent être remplis!');
            setErrorConnexion('');
            setSuccessInscription('');
            setErrorInscription('');
            setSuccessLostMdp(flashCon);
        }
    };

    useEffect(() => {
        if (certificate === true) {
            if (isAdmin === 1) {
                navigate("/admin");
                setCertificate(false)
            }
            else if (isCandidat === 1) {
                navigate("/candidat/dashboard");
                setCertificate(false)
            }
            else if (isRecruteur === 1) {
                navigate("/employer/dashboard");
                setCertificate(false)
            }
        }
    }, [certificate, isAdmin, isCandidat, isRecruteur, navigate]);

    return (
        <Box sx={{ display: 'block', width: 300, mx: { xs: 'auto' }, mr: { md: 2 }, mt: { xs: 5, md: 0 } }}>
            <Typography variant='h4' sx={{ display: { xs: 'none', md: 'block' } }}>Connexion</Typography>
            <TextField label='Mail' name='mail' variant="outlined" fullWidth
                onChange={(e) => setMail(e.target.value)} sx={{ my: 1 }} />
            <FormControl sx={{ my: 1 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
                <OutlinedInput name='pass' type={showPassword ? 'text' : 'password'}
                    value={pass} onChange={(e) => setPass(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link
                    component="button" variant="body2"
                    onClick={() => setOpenChildModal(true)}
                    sx={{ color: '#0099FF', fontSize: 17, my: 3 }}>
                    Mot de passe oublié
                </Link>
            </Box>
            <Modal
                hideBackdrop
                open={openChildModal}
                onClose={handleCloseChildModal}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300, bgcolor: '#fff',
                    pt: 2, px: 4, pb: 3, borderRadius: 2,
                    display: 'block', textAlign: 'center', border: 1
                }}>
                    <h2 id="child-modal-title">Mot de passe oublié</h2>
                    <p id="child-modal-description">Entrez votre adresse mail:</p>
                    <TextField
                        label='Mail' name='mailLostmdp' variant="outlined" fullWidth
                        onChange={(e) => setMailLostPass(e.target.value)}
                        sx={{ my: 1 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3 }}>
                        <Button
                            variant='contained'
                            onClick={() => handleSubmitChildModal()}
                            sx={{ bgcolor: "secondary.main", width: 100 }}>
                            Envoyer
                        </Button>
                        <Button
                            variant='contained'
                            onClick={() => setOpenChildModal(false)}
                            sx={{ bgcolor: "secondary.main", width: 100 }}>
                            Fermer
                        </Button>
                    </Box>
                    {successLostMdp &&
                        <Box sx={{ my: 3, color: '#1E90FF' }} >
                            <Typography variant='body1' align='center' >{successLostMdp}</Typography>
                        </Box>
                    }
                </Box>
            </Modal>
            <Button variant="contained" fullWidth onClick={() => SubmitFormId()}
                sx={{ bgcolor: '#ABC4FF', fontWeight: 'bold', my: 1, py: 1 }}>
                Envoyer
            </Button>
            {errorChamps.length > 0 &&
                <Box sx={{ my: 3, color: '#ff0000' }} >
                    <Typography variant='body1' align='center' >{errorChamps}</Typography>
                </Box>
            }
            {errorConnexion.length > 0 &&
                <Box sx={{ my: 3, color: '#ff0000' }} >
                    <Typography variant='body1' align='center' >{errorConnexion}</Typography>
                </Box>
            }
        </Box>
    );
};