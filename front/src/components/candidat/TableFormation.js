import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function createData(centre, intitule, date, obtention) {
    return { centre, intitule, date, obtention };
}

const rows = [
    createData('Arinfo', 'Desinger Web', '2020', 'Oui'),
    createData('Arinfo', 'Développeur web', '2020', 'Oui'),
    createData('Arinfo', `Concepteur développeur d'applcation`, '2022', '')
];

export default function TableFormation() {
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
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{ display: "none" }} > {index}</TableCell>
                                <TableCell >{row.centre}</TableCell>
                                <TableCell >{row.intitule}</TableCell>
                                <TableCell >{row.date}</TableCell>
                                <TableCell >{row.obtention}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </Box>
    );
}




























































