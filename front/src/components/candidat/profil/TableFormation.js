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


    function ModeText() {
        return (
            <TableBody>

                {ListCertificate.map((certificate, index) => (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                        <TableCell component="th" scope="row" sx={{ display: "none" }}>{index}</TableCell>
                        <TableCell>{certificate.school}</TableCell>
                        <TableCell>{certificate.title}</TableCell>
                        <TableCell>{certificate.year}</TableCell>
                        <TableCell>{certificate.validate}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

        );
    }
    function ModeEdit() {
        return (
            <Stack direction="row" spacing={2} marginTop={2}>
                <TextField
                    required
                    size="small"
                    id="outlined-required"
                    label="address"
                    defaultValue={school}
                />
                <TextField
                    required
                    size="small"
                    id="outlined-required"
                    label="zipCode"
                    defaultValue={title}
                />
                <TextField
                    required
                    size="small"
                    id="outlined-required"
                    label="Town"
                    defaultValue={year}
                />
                <TextField
                    required
                    size="small"
                    id="outlined-required"
                    label="phone"
                    defaultValue={validate}
                />
                <Button >
                    VALID
                </Button>
                <Button >
                    ANNULER
                </Button>
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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                }}>


                <Button onClick={(e) => setEdit(edit === true ? false : true)}>
                    <DeleteIcon />
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

            <TableContainer sx={{ display: "flex", justifyContent: "center" }} component={Paper}>
                <Table sx={{ width: "75%" }} size="small" aria-label="a dense table">
                    <TableHead sx={{ bgcolor: "#FF7F50" }}>
                        <TableRow>
                            <TableCell>Centre/Ecole</TableCell>
                            <TableCell >Intitulé</TableCell>
                            <TableCell>Année</TableCell>
                            <TableCell>Obtention</TableCell>
                        </TableRow>
                    </TableHead>
                    {checkEdit()}
                </Table>
            </TableContainer>
        </Box>
    );
}




























































