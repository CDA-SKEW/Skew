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
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';

import { register } from "store/actions/AuthActions";

function PassInput({ values, handleFormIdInscription }) {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => { setShowPassword(!showPassword) };
    const handleMouseDownPassword = (event) => { event.preventDefault(); };

    return (
        <FormControl sx={{ my: 1 }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">{values.titre}</InputLabel>
            <OutlinedInput
                name={values.name}
                type={showPassword ? 'text' : 'password'}
                value={values.value}
                onChange={(e) => handleFormIdInscription(e)}
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
    )
}

export default function Inscription(props) {

    const { dispatch, setErrorInscription, setSuccessInscription, setSuccess, setError, errorInscription, successInscription } = props

    const [passInscription, setPassInscription] = useState('');
    const [pass2, setPass2] = useState('');
    const [mailInscription, setMailInscription] = useState('');
    const [candidat, setCandidat] = useState(0);
    const [recruteur, setRecruteur] = useState(0);
    const [toggle, setToggle] = useState('');

    const passList = [
        { titre: 'Mot de passe', name: 'pass', value: passInscription },
        { titre: 'Confirmer mot de passe', name: 'pass2', value: pass2 }
    ];

    const handleChange = (e, newToggle) => { setToggle(newToggle) };

    const handleFormIdInscription = (e) => {
        switch (e.target.name) {
            case 'mail': setMailInscription(e.target.value);
                break;
            case 'pass': setPassInscription(e.target.value);
                break;
            case 'pass2': setPass2(e.target.value);
                break;
            default:
        }
    }
    const SubmitFormIdInscription = async (e) => {
        if (mailInscription && toggle && passInscription && pass2) {
            if (passInscription === pass2) {
                await dispatch(register({ mailInscription, passInscription, candidat, recruteur }));
                setMailInscription("");
                setPassInscription("");
                setPass2("");
                setToggle("");
                setCandidat(0);
                setRecruteur(0);
            } else {
                setErrorInscription('Les mots de passe ne coîncident pas!');
                setSuccessInscription('');
                setSuccess('');
                setError('');
            }
        } else {
            setErrorInscription('Entrez tous les champs requis!');
            setSuccessInscription('');
            setSuccess('');
            setError('');
        }
    };

    useEffect(() => {
        if (toggle === 'candidat') {
            setCandidat(1);
            setRecruteur(0);
        };
        if (toggle === 'recruteur') {
            setCandidat(0);
            setRecruteur(1);
        };
    }, [toggle]);

    return (
        <Box sx={{ display: 'block', width: 350, mx: { xs: 'auto' }, ml: { md: 2 }, mt: { xs: 5, md: 0 } }}>
            <Typography variant='h4' sx={{ display: { xs: 'none', md: 'block' } }}>Inscription</Typography>
            <TextField label='Mail' name='mail' fullWidth
                value={mailInscription} variant="outlined"
                onChange={(e) => handleFormIdInscription(e)}
                sx={{ my: 1 }} />

            {passList.map((values, index) => (
                <PassInput key={index} values={values} handleFormIdInscription={handleFormIdInscription} />
            ))}
            <ToggleButtonGroup
                color="info" exclusive fullWidth value={toggle}
                onChange={handleChange} sx={{ my: 1 }} >
                <ToggleButton value="candidat">Candidat</ToggleButton>
                <ToggleButton value="recruteur">Recruteur</ToggleButton>
            </ToggleButtonGroup>
            {errorInscription.length > 0 &&
                <Box sx={{ my: 3, color: '#ff0000' }} >
                    <Typography variant='body1' align='center' >{errorInscription}</Typography>
                </Box>
            }
            {successInscription.length > 0 && successInscription.length < 30 &&
                <Box sx={{ my: 3, color: '#ff0000' }} >
                    <Typography variant='body1' align='center' >{successInscription}</Typography>
                </Box>
            }

            {successInscription.length > 31 &&
                <Box sx={{ my: 3, color: '#1e90ff' }} >
                    <Typography variant='body1' align='center' >{successInscription}</Typography>
                </Box>
            }
            <Button
                variant="contained" fullWidth onClick={() => SubmitFormIdInscription()}
                sx={{ bgcolor: '#ABC4FF', fontWeight: 'bold', my: 1, py: 1 }}>
                Envoyer
            </Button>
        </Box>
    );
};