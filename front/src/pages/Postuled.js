import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Chip, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';

// import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getOffreVisiteurId } from "../store/actions/OffreVisiteurActions";
import { useNavigate, useParams } from 'react-router-dom';
import { getOffreCandidate, getProfilCandidate, postFormPostuled } from 'store/actions/CandidateActions';
import withCandidat from 'components/auth/withCandidat';
import CandidatLayout from 'layouts/CandidatLayout';

const Postuled = () => {

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
    const user = useSelector(state => state.candidate.userProfil.coord)
    const listCandidatureUser = useSelector(state => state.candidate.candidaturesProfil)
    // const offreId = { offre_id: offre.offer_id }
    // const userId = { user_id: user.user_id }
    // const alreadyPostuled = [{ offreId, userId }]
    const isPostuled = (arr, value) => {
        return arr.includes(arr.find(el => {
            return el.offre_id === value
        }))
    }

    const [titleCV, setTitleCV] = useState("");
    const [form, setForm] = useState({});


    useEffect(() => {
        setForm({ ...form, offre_id: offre.offer_id, user_id: user.id });
    }, [offre])

    const handleChangeCv = (prop) => (event) => {
        setTitleCV(event.target.value)
        setForm({ ...form, [prop]: event.target.value });
    }

    const handleClickPostuled = async () => {
        await dispatch(postFormPostuled(form))
        setForm({})
        dispatch(getOffreCandidate())
        navigate("/candidat/candidatures")
    }

    return (
        <CandidatLayout>
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


                {
                    (isPostuled(listCandidatureUser, offre.offer_id) !== true) ?
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
                                        return (
                                            <MenuItem key={index} value={option.id_document}>
                                                {option.title}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={() => handleClickPostuled()}
                                sx={{ my: 10 }}
                            >Envoyer</Button>
                        </Box>

                        : <Stack direction="row" spacing={1} display="flex" justifyContent="center" margin={5}>

                            <Chip label="Vous avez déja postuler a cette offre" color="success" />
                        </Stack>
                }



            </Box>
        </CandidatLayout>
    );
};

export default withCandidat(Postuled);