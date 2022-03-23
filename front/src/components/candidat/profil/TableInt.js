import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button, Stack, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { getProfilCandidate, deleteFormProfilCandidateInterest, postFormProfilCandidateInterest } from "store/actions/CandidateActions";

import { useDispatch } from "react-redux"



export default function ResponsiveGrid(props) {
    const { ListInterest } = props
    const [edit, setEdit] = React.useState(false);
    // const [interest, setInterest] = useState("");
    const dispatch = useDispatch()





    const handleDelete = (id) => {
        dispatch(deleteFormProfilCandidateInterest(id))
        setTimeout(() => dispatch(getProfilCandidate()), 777)
    }

    const BtnDelete = (id) => {
        if (edit === true) return <Button sx={{ color: "red" }} onClick={() => handleDelete(id)} >
            <DeleteIcon />
        </Button>
        else return;
    };

    // ##################################################
    // Bouton ADD Interest ,Open textfield on click
    const [addInterest, setAddInterest] = useState("");

    const BtnAddInterest = () => {
        if (addInterest === true) return <AddInterest />
        else return;
    }

    function AddInterest() {
        const dispatch = useDispatch()
        const [form, setForm] = useState({})

        const changeForm = (prop) => (event) => {
            setForm({ ...form, [prop]: event.target.value })
        }

        const submitForm = async () => {
            await dispatch(postFormProfilCandidateInterest({ ...form }))
            setAddInterest("");
            setTimeout(() => dispatch(getProfilCandidate()), 777)
            setEdit(false) // close editMode
        }
        return (
            <Box>
                <Box>
                    <TextField

                        size="small"
                        required
                        id="outlined-required"
                        label="Add Interest"
                        onChange={changeForm('interest')}
                    />
                    <Button sx={{ color: "black" }} >
                        <CheckCircleOutlineIcon />
                    </Button>
                </Box>
                <Box>
                    <Button sx={{ color: "green" }} onClick={() => submitForm()} >
                        <CheckCircleOutlineIcon />
                        Submit
                    </Button>
                    <Button sx={{ color: "red" }}>
                        < KeyboardReturnIcon />
                        Cancel
                    </Button>

                </Box>
            </Box>
        )
    }
    // ####################################


    function ModeText(props) {
        return (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 8 }}>
                {ListInterest.map((el, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Typography>{el.interest}</Typography>
                    </Grid>
                ))}
            </Grid>

        );
    }

    function ModeEdit(props) {
        return (
            <Stack direction="column" spacing={2}>
                {ListInterest.map((el, index) => (
                    <Box>
                        <TextField
                            key={index}
                            size="small"
                            required
                            id="outlined-required"
                            label="Interest"
                            defaultValue={el.interest}
                        />
                        {BtnDelete(el.id)}
                    </Box>
                ))}
                <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                    <Button onClick={(e) => setAddInterest(addInterest === true ? false : true)} sx={{ color: "#004F98", px: 4 }} >
                        <AddCircleOutlineIcon /><Typography>Add Interest</Typography>
                    </Button>
                </Box>
                <Box>
                    {BtnAddInterest()}
                </Box>
            </Stack>


        );
    }

    const checkEdit = () => {
        if (edit === true) return <ModeEdit />;
        else return <ModeText />;
    };
    return (
        <Box
            sx={{
                bgcolor: "#FFFFFF",
                height: "auto",
                borderRadius: 1,
                my: 4,

            }}
        >
            {/* TITLE SECTION INTEREST */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                }}
            >
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{
                        px: 1,
                        bgcolor: "#004F98",
                        color: "#FFFFFF",
                        borderRadius: 1,
                        position: "relative",
                        top: -15,
                    }}
                >
                    Interet
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                }}>
                <Button sx={{ m: 2, mr: 6 }} variant="outlined" size="small" onClick={(e) => setEdit(edit === true ? false : true)}>
                    Mode edit
                </Button>
            </Box>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                {checkEdit()}
            </Box>
        </Box>
    );
}



