import React, { useEffect, useState } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import { getOffreCandidate, getProfilCandidate, postFormPostuled } from 'store/actions/CandidateActions';



export default function Postuled(props) {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const id = useParams()

    useEffect(() => {
        dispatch(getOffreVisiteurId(id.id));
    }, [dispatch, id]);


    useEffect(() => {
        dispatch(getProfilCandidate());
        dispatch(getOffreCandidate())
    }, [dispatch]);

    const offre = useSelector(state => state.offreVisiteur.offer)
    const Cv = useSelector((state) => state.candidate.userProfil.document)
    // const ListCandidature = useSelector(state => state.candidate.candidaturesProfil)
    const user = useSelector(state => state.candidate.userProfil.coord)

    // const [idCv, setIdCv] = useState("");
    // const [userId, setUserId] = useState("");
    const [titleCV, setTitleCV] = useState("");
    const [form, setForm] = useState({});

    useEffect(() => {
        console.log('offreeeeee', offre.offer_id)
        setForm({ ...form, offre_id: offre.offer_id, user_id: user.id });
    }, [offre])

    const handleChangeCv = (prop) => (event) => {
        console.log('handleChangeCV1', event.target.value)
        console.log('handleChangeCV2', event.target.name)
        setTitleCV(event.target.value)
        setForm({ ...form, [prop]: event.target.value });
    }

    const handleClickPostuled = async () => {
        console.log('Postuled send', form)
        await dispatch(postFormPostuled(form))
        setForm({})
        dispatch(getOffreCandidate())
        navigate("/candidat/candidatures")
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
                            value={titleCV}
                            label="Cv"
                            onChange={handleChangeCv('document_id')}
                        >
                            {Cv.map((option, index) => {
                                // console.log('loop select', option)
                                return (
                                    <MenuItem key={index} value={option.id_document}>
                                        {option.title}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>

                    {/* {ListCandidature.length > 0 && (
                        (Number(ListCandidature[0].offre_id) === Number(offre.offer_id) ?
                        <Typography textAlign={"center"} color={"red"} p={2}>Vous avez déjà postulé à cette offre </Typography>
                            :  */}
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleClickPostuled()}
                        sx={{ my: 10 }}
                    >Envoyer</Button>
                    {/* )
                    )} */}


                </Box>
            </Box>
        </VisiteurLayout>
    );
};