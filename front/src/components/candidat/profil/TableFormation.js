import React, { useEffect, useState } from "react";
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
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';



export default function TableFormation(props) {
    const { ListCertificate,
        dataProfilCandidate
    } = props
    const [edit, setEdit] = React.useState(false);
    // const data = {

    //   address: ListUser.address,
    //   phone: "truc",
    //   mail: "",
    // };

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
    }, [dataProfilCandidate]);


    //Constante de Condition

    const checkEdit = () => {
        if (edit === true) return [<ModeText />, <ModeEdit />]
        else return <ModeText />;
    }

    // Constante pour check si le mode edit est actif afficher la colonne action
    const checkViewAction = () => {
        if (edit === true) return <TableCell align='center' >Actions </TableCell>
        else return;
    }
    const BtnDelete = () => {
        if (edit === true) return <Button sx={{ color: "red", }} >
            <DeleteIcon />
        </Button>
        else return;
    }

    // Function  Component MUI Select and DatePicker "Year Only"//

    // Date Picker Year Only//
    function ViewsDatePicker() {
        const [value, setValue] = React.useState(new Date());

        return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <DatePicker

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

    // Function Text and Edit Mode //
    function ModeText() {
        return (
            <TableBody>

                {ListCertificate.map((certificate, index) => (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                        <TableCell component="th" scope="row" sx={{ display: "none" }}>{index}</TableCell>
                        <TableCell align='center'>{certificate.school}</TableCell>
                        <TableCell align='center'>{certificate.title}</TableCell>
                        <TableCell align='center' >{certificate.year}</TableCell>
                        <TableCell align='center'>{certificate.validate}</TableCell>
                        {BtnDelete()}
                    </TableRow>
                ))}
            </TableBody>

        );
    }
    function ModeEdit() {
        return (
            <TableBody>
                {ListCertificate.map((certificate, index) => (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align='center' sx={{ minWidth: 140 }}>
                            <TextField

                                required
                                size="small"
                                id="outlined-required"
                                label="School"
                                defaultValue={certificate.school}
                            />
                        </TableCell>
                        <TableCell align='center' sx={{ minWidth: 140 }} >
                            <TextField

                                required
                                size="small"
                                id="outlined-required"
                                label="Title"
                                defaultValue={certificate.title}
                            />
                        </TableCell>

                        <TableCell align='center' sx={{ minWidth: 140 }} >
                            <ViewsDatePicker />
                        </TableCell>

                        <TableCell align='center' sx={{ minWidth: 140 }} >
                            <BasicSelect />
                        </TableCell>


                        <TableCell align='center' sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Button sx={{ color: "green", m: 2 }} >
                                <CheckCircleOutlineIcon />
                            </Button>
                            <Button sx={{ color: "red", m: 2 }}>
                                < KeyboardReturnIcon />
                            </Button>
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        );
    }


    return (
        <Box
            sx={{
                bgcolor: "#FFFFFF",
                height: "auto",
                borderRadius: 1,
                my: 4,
            }}
        >
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
                    {checkEdit()}
                </Table>
            </TableContainer>
        </Box>
    );
}




























































