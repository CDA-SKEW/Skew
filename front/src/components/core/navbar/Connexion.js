import React, { useState } from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { store } from 'store';
import { checkToken, login } from "store/actions/AuthActions";

store.dispatch(checkToken())

export default function Connexion() {

    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
        if (mail && pass) {
            // console.log('submit', mail, pass)
            await dispatch(login({ mail, pass }))
            setMail('')
            setPass('')
            setTimeout(() => {
                dispatch(checkToken())
            }, 777);
            if (dataUser.isAdmin === 1) {
                navigate("/Admin");
            }
            else if (dataUser.isRecruteur === 1) {
                navigate("/employer/dashboard");
            }
            else if (dataUser.isCandidat === 1) {
                navigate("/candidat/dashboard");
            }
            else {
                navigate("/");
            }
        } else {
            setError('Le mail ou le mot de passe est incorrect!');
        }
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
            <TextField
                label='Mail'
                name='mail'
                variant="outlined"
                fullWidth
                onChange={(e) => handleFormId(e)}
                sx={{
                    my: 1
                }}
            />
            <FormControl sx={{ my: 1 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
                <OutlinedInput
                    name='pass'
                    type={showPassword ? 'text' : 'password'}
                    value={pass}
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
            {error.length > 0 &&
                <Box sx={{ my: 3, color: '#ff0000' }} >
                    <Typography variant='body1' >
                        {error}
                    </Typography>
                </Box>
            }
        </Box>
    )
}