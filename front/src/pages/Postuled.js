import React, { useEffect } from 'react';
import VisiteurLayout from 'layouts/VisiteurLayout';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

// import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getOffreVisiteurId } from "../store/actions/OffreVisiteurActions";
import { useParams } from 'react-router-dom';



export default function Postuled() {

    const dispatch = useDispatch();
    const id = useParams()
    useEffect(() => {
        dispatch(getOffreVisiteurId(id.id));
    }, [dispatch, id]);


    const offre = useSelector(state => state.offreVisiteur.offer);

    // const navigate = useNavigate();
    const handleChangeCv = () => {

    }

    const handleClickPostuled = () => {

    }

    return (
        <VisiteurLayout>
            <Box sx={{ px: 5 }}>
                <Typography
                    align='center' variant="h2"
                    sx={{ borderBottom: 2, mx: 'auto', my: 3, pb: 5, width: '50%', }}>
                    Postulé à l'offre {offre.title}
                </Typography>
                <Typography
                    align='center' variant="h3"
                    sx={{ mx: 'auto', my: 3, pb: 5, width: '50%', }}>
                    Chez {offre.lastname} {offre.name}
                </Typography>
                <Box sx={{ minWidth: 120, maxWidth: 400, mx: 'auto', mt: 10 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">CV</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={cv}
                            label="Age"
                            onChange={() => handleChangeCv()}
                        >
                            <MenuItem value={10}>a changer avec les cv importé</MenuItem>
                        </Select>
                    </FormControl>

                    <Button 
                    variant="contained"
                    fullWidth
                    onClick={() => handleClickPostuled()}
                    sx={{my: 10}}
                    >Envoyer</Button>
                </Box>
            </Box>
        </VisiteurLayout>
    );
};