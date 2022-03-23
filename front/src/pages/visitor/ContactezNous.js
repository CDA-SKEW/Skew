import React, { useState } from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';

import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useDispatch } from "react-redux";
import { PostContactUs } from "store/actions/ContactActions";

export default function ContactezNous() {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [tel, setTel] = useState('');
    const [mail, setMail] = useState('');
    const [sujet, setSujet] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const InputList = [
        { label: "Nom", multiline: false, rows: '1', value: nom },
        { label: "Prenom", multiline: false, rows: '1', value: prenom },
        { label: "Tel", multiline: false, rows: '1', value: tel },
        { label: "Mail", multiline: false, rows: '1', value: mail },
        { label: "Sujet", multiline: false, rows: '1', value: sujet },
        { label: "Message", multiline: true, rows: '10', value: message }
    ]

    const handleForm = (e) => {
        switch (e.target.name) {
            case 'Nom': setNom(e.target.value);
                break;
            case 'Prenom': setPrenom(e.target.value);
                break;
            case 'Tel': setTel(e.target.value);
                break;
            case 'Mail': setMail(e.target.value);
                break;
            case 'Sujet': setSujet(e.target.value);
                break;
            case 'Message': setMessage(e.target.value);
                break;
            default:
        }
    }

    const submitForm = async (e) => {
        if (nom && prenom && tel && mail && sujet && message) {
            await dispatch(PostContactUs({ nom, prenom, tel, mail, message, sujet }));
            setNom('');
            setPrenom('');
            setTel('');
            setMail('');
            setSujet('');
            setMessage('');
            setSuccess('Votre message a bien été envoyé !');
            setError('');
        } else {
            setError('Les champs n\'ont pas été remplis correctement !');
            setSuccess('');
        }
    }

    return (
        <VisiteurLayout>
            <Box sx={{ px: 5 }}>
                <Typography
                    align='center'
                    variant="h2"
                    sx={{
                        fontSize: { xs: 30, md: 55 },
                        fontFamily: "'Indie Flower', cursive"
                    }}
                >
                    Contactez-nous
                </Typography>
                <Box sx={{ maxWidth: 620, mx: 'auto' }}>
                    {InputList.map((input, index) => (
                        <TextField
                            key={index}
                            label={input.label}
                            name={input.label}
                            multiline={input.multiline}
                            rows={input.rows}
                            value={input.value}
                            color='secondary'
                            variant="outlined"
                            fullWidth
                            onChange={(e) => handleForm(e)}
                            sx={{ display: "block", my: 2, }} />
                    ))}
                    {error.length > 0 &&
                        <Box sx={{ my: 3, color: '#ff0000' }} >
                            <Typography variant='body1' >{error}</Typography>
                        </Box>
                    }
                    {success.length > 0 &&
                        <Box sx={{ my: 3, color: '#1e90ff' }} >
                            <Typography variant='body1' >{success}</Typography>
                        </Box>
                    }
                    <Button
                        variant="contained"
                        color='secondary'
                        fullWidth
                        size='large'
                        onClick={() => submitForm()}
                        sx={{ display: "block", width: '100%', mt: 2, mb: 10, fontSize: '20px', py: { xs: 1, md: 2 } }}>
                        Envoyer
                    </Button>
                </Box>
            </Box>
        </VisiteurLayout>
    );
};