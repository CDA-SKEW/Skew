import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { getProfilCandidate, postFormProfilCandidateCertificate, putFormProfilCandidateCertificate, deleteFormProfilCandidateCertificate } from "store/actions/CandidateActions";
import { add } from "date-fns";



export default function TableFormation(props) {
    const { ListCertificate } = props
    const [edit, setEdit] = React.useState(false);
    const [openAdd, setOpenAdd] = React.useState(false);


    // Declaration des constantes pour le formulaire

    const [school, setSchool] = useState("");
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [validate, setValidate] = useState("");


    const setUseState = () => {

        setSchool(ListCertificate.school);
        setTitle(ListCertificate.title);
        setYear(ListCertificate.year);
        setValidate(ListCertificate.validate);


    };
    useEffect(() => {
        // console.log("effect for useState form employer");
        setUseState();
    }, []);



    // Date Picker Year Only//
    function ViewsDatePicker() {
        const [value, setValue] = React.useState(new Date());

        return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <DatePicker
                        size="small"
                        views={['year']}
                        label="Year only"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} helperText={null} />}
                    />
                </Stack>
            </LocalizationProvider>
        );
    }

    // Select Yes/No //
    function BasicSelect() {
        const [age, setAge] = React.useState('');

        const handleChange = (event) => {
            setAge(event.target.value);
        };

        return (
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="simple-select">Obtain</InputLabel>
                    <Select
                        labelId="Obtain"
                        id="simple-select"
                        onChange={handleChange}
                        size="small"
                    >
                        <MenuItem value={"Yes"}>Yes</MenuItem>
                        <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        );
    }


    /*MODE EDIT */

    //Condition Trigger mode edit 
    const CheckModeEdit = (props) => {
        const { status, row } = props
        // console.log('props mode edit', props)
        if (status === true) return <ModeEdit data={row} />
        return <div></div>
    }
    /* *************************************************************************** */

    //Mode edition Component

    function ModeEdit(props) {
        const { data } = props
        const dispatch = useDispatch()
        const [form, setForm] = useState({ ...data })

        const handleChange = (prop) => (event) => {
            setForm({ ...form, [prop]: event.target.value })
        }

        const submitForm = () => {
            console.log('SUBMIT Certificate UPDATE', form)
            dispatch(putFormProfilCandidateCertificate({ ...form }))
            setTimeout(() => dispatch(getProfilCandidate()), 777)
            setEdit(false) // close editMode
        }

        return (
            <TableRow>

                <TableCell align='center' sx={{ minWidth: 200 }} >

                    <TextField
                        fullWidth
                        required
                        size="small"
                        id="outlined-required"
                        label="School"
                        onChange={handleChange('school')}
                        defaultValue={data.school}
                    />
                </TableCell>

                <TableCell align='center' sx={{ minWidth: 200 }} >

                    <TextField
                        fullWidth
                        onChange={handleChange('title')}
                        maxRows={4}
                        required
                        size="small"
                        id="outlined-required"
                        label="Title"
                        defaultValue={data.title}
                    />
                </TableCell>

                <TableCell align='center' sx={{ minWidth: { xs: 150, sm: 150, md: 150 } }}>

                    <ViewsDatePicker />
                </TableCell>
                <TableCell align='center' sx={{ minWidth: { xs: 150, sm: 150, md: 150 } }}>

                    <BasicSelect />
                </TableCell>

                <TableCell align='center' sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Button sx={{ color: "green", m: 2 }} onClick={() => submitForm()}>
                        <CheckCircleOutlineIcon />
                        Submit
                    </Button>
                    <Button sx={{ color: "red", m: 2 }}>
                        <KeyboardReturnIcon />
                        Cancel
                    </Button>
                </TableCell>
            </TableRow >
        );
    };

    /* *************************************************************************** */

    /*MODE ADD  */

    //Condition Trigger mode Add 
    const CheckModeAdd = (props) => {
        const { status, row } = props
        // console.log('props mode edit', props)
        if (status === true) return <ModeAdd data={row} />
        return <div></div>
    }

    /* *************************************************************************** */


    //Mode add Experience Component

    function ModeAdd(props) {
        // const { data } = props
        const dispatch = useDispatch()
        const [form, setForm] = useState({ user_id: 5 })

        const changeForm = (prop) => (event) => {
            setForm({ ...form, [prop]: event.target.value })
        }

        const submitForm = async (data) => {
            await dispatch(postFormProfilCandidateCertificate({ ...form }))
            setSchool("");
            setTitle("");
            setYear("");
            setValidate("");
            setTimeout(() => dispatch(getProfilCandidate()), 777)
            setEdit(false) // close editMode
        }
        // console.log('mode edit comp', data)

        return (
            <TableRow>

                <TableCell align='center' sx={{ minWidth: 200 }} >

                    <TextField
                        fullWidth
                        required
                        size="small"
                        id="outlined-required"
                        label="School"
                        onChange={changeForm('school')}
                        defaultValue={""}
                    />

                </TableCell>

                <TableCell align='center' sx={{ minWidth: 200 }} >

                    <TextField
                        required
                        size="small"
                        id="outlined-required"
                        onChange={changeForm('title')}
                        label="Title"
                        defaultValue={""}
                    />

                </TableCell>


                <TableCell align='center' sx={{ minWidth: { xs: 150, sm: 150, md: 150 } }}>

                    <ViewsDatePicker />

                </TableCell>

                <TableCell align='center' sx={{ minWidth: { xs: 150, sm: 150, md: 150 } }}>

                    <BasicSelect />
                </TableCell>

                <TableCell align='center' sx={{ display: 'flex', flexDirection: 'column' }}>

                    <Button sx={{ color: "green", m: 2 }} onClick={() => submitForm()}>
                        <CheckCircleOutlineIcon />
                        Submit
                    </Button>
                    <Button sx={{ color: "red", m: 2 }}>
                        <KeyboardReturnIcon />
                        Cancel
                    </Button>

                </TableCell>
            </TableRow>
        );
    };

    /* *************************************************************************** */

    // #################################################################

    function Row(props) {
        const { row, str } = props
        const [open, setOpen] = React.useState(false);
        const dispatch = useDispatch()
        const handleDelete = () => {
            console.log('id Button Trigger ROW', row);
            dispatch(deleteFormProfilCandidateCertificate(row.id))
            setTimeout(() => dispatch(getProfilCandidate()), 777)
        }

        /*const ActionBtn trigger only if mode edit is true & the btn open the edit row */

        const ActionBTN = () => {
            // console.log('ACTION BTN', edit)
            if (edit === true) return <Box sx={{ display: "flex", flexDirection: 'column' }}><Button onClick={(e) => setOpen(open === true ? false : true)}>
                <BorderColorIcon />
            </Button>

                <Button sx={{ color: "red", }} onClick={() => handleDelete()}>
                    <DeleteIcon />
                </Button>
            </Box>
            else <div></div>
        }

        /* *************************************************************************** */


        /* TableBody & the component <CheckModeEdit/> who's open if the btn in the ActionBtn is trigger*/

        return (
            <React.Fragment>
                <TableRow sx={{ "&:last-child td,&:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row" sx={{ display: "none" }}>0</TableCell>
                    <TableCell align='center'>{row.school}</TableCell>
                    <TableCell align='center'>{row.title}</TableCell>
                    <TableCell align='center'>{row.year}</TableCell>
                    <TableCell align='center'>{row.validate}</TableCell>
                    {ActionBTN()}
                </TableRow>
                <CheckModeEdit status={open} row={row} />
            </React.Fragment>

        )

    }

    // condition check mode edit is activ add new column in tableHead "column action"
    // Constante pour check si le mode edit est actif afficher la colonne action
    const checkViewAction = () => {
        if (edit || openAdd === true) return <TableCell align='center'>Action
        </TableCell>
        else return <div></div>;
    }

    /* *************************************************************************** */

    return (
        <Box
            sx={{
                bgcolor: "#FFFFFF",
                height: "auto",
                borderRadius: 1,
                my: 4,
            }}
        >

            {/* Titre section Formation */}
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
                    Formation
                </Typography>
            </Box>

            {/* *************************************************************************** */}


            {/* Group of BTN Trigger each ModeEdit & ModeAdd */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",

                }}>


                <Button sx={{ m: 2 }} variant="outlined" size="small" onClick={(e) => setEdit(edit === true ? false : true)}>
                    Mode Edit
                </Button>
                <Button sx={{ mr: 6 }} variant="outlined" size="small" onClick={(e) => setOpenAdd(openAdd === true ? false : true)}>
                    <AddCircleOutlineIcon />
                    Add Formation
                </Button>
            </Box>

            {/* *************************************************************************** */}

            <TableContainer sx={{ px: "50px" }} component={Paper}>
                <Table sx={{ width: "100%" }} >
                    <TableHead sx={{ bgcolor: "#FF7F50" }}>
                        <TableRow>
                            <TableCell align='center'>Centre/Ecole</TableCell>
                            <TableCell align='center'>Intitulé</TableCell>
                            <TableCell align='center'>Année</TableCell>
                            <TableCell align='center'>Obtention</TableCell>
                            {checkViewAction()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <CheckModeAdd status={openAdd} />
                        {ListCertificate.length > 0 &&
                            ListCertificate.map((row, index) => <Row key={index} row={row} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}




























































