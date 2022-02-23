import React, { useState, useEffect } from 'react'

import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

import { useDispatch } from "react-redux";
import { register } from 'store/actions/AuthActions';

function PassInput({ values, handleFormId }) {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl sx={{ my: 1 }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">{values.titre}</InputLabel>
            <OutlinedInput
                name={values.name}
                type={showPassword ? 'text' : 'password'}
                value={values.value}
                onChange={(e) => handleFormId(e)}
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

export default function Inscription() {

    const [mailInscription, setMailInscription] = useState('');
    const [passInscription, setPassInscription] = useState('');
    const [pass2, setPass2] = useState('');
    const [toggle, setToggle] = useState('');
    const [errorInscription, setErrorInscription] = useState('');
    const [successInscription, setSuccessInscription] = useState('');
    const [candidat, setCandidat] = useState(0);
    const [recruteur, setRecruteur] = useState(0);
    const dispatch = useDispatch();

    const passList = [
        { titre: 'Mot de passe', name: 'pass', value: passInscription },
        { titre: 'Confirmer mot de passe', name: 'pass2', value: pass2 },
    ]

    const handleChange = (e, newToggle) => {
        setToggle(newToggle)
    };

    useEffect(() => {
        if (toggle === 'candidat') {
            setCandidat(1)
            setRecruteur(0)
        }
        if (toggle === 'recruteur') {
            setCandidat(0)
            setRecruteur(1)
        }
    }, [toggle]);

    const handleFormId = (e) => {
        switch (e.target.name) {
            case 'mail':
                setMailInscription(e.target.value)
                break;
            case 'pass':
                setPassInscription(e.target.value)
                break;
            case 'pass2':
                setPass2(e.target.value)
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
                setSuccessInscription('L\'utilisateur a bien été créé. veuillez valider par mail pour pouvoir vous connecter!');
                setErrorInscription('')
            } else {
                setErrorInscription('Les mots de passe ne coîncident pas!')
                setSuccessInscription('')
            }
        } else {
            setErrorInscription('Entrez tous les champs requis!')
            setSuccessInscription('')
        }

    };

    return (
        <Box
            sx={{ display: 'block', width: 400, ml: 2, }}>
            <Typography
                variant='h4'
            >
                Inscription
            </Typography>

            <TextField
                label='Mail'
                name='mail'
                value={mailInscription}
                variant="outlined"
                fullWidth
                onChange={(e) => handleFormId(e)}
                sx={{ my: 1 }} />

            {passList.map((values, index) => (
                <PassInput key={index} values={values} handleFormId={handleFormId} />
            ))}
            <ToggleButtonGroup
                color="info"
                value={toggle}
                exclusive
                onChange={handleChange}
                fullWidth
                sx={{ my: 1 }}
            >
                <ToggleButton value="candidat">Candidat</ToggleButton>
                <ToggleButton value="recruteur">Recruteur</ToggleButton>
            </ToggleButtonGroup>
            {errorInscription.length > 0 &&
                <Box sx={{ my: 3, color: '#ff0000' }} >
                    <Typography variant='body1' >
                        {errorInscription}
                    </Typography>
                </Box>
            }
            {successInscription.length > 0 &&
                <Box sx={{ my: 3, color: '#1e90ff' }} >
                    <Typography variant='body1' >
                        {successInscription}
                    </Typography>
                </Box>
            }
            <Button
                variant="contained"
                fullWidth
                onClick={() => SubmitFormIdInscription()}
                sx={{
                    bgcolor: '#ABC4FF',
                    fontWeight: 'bold',
                    my: 1,
                    py: 1
                }}
            >
                Envoyer
            </Button>
        </Box>
    )
}