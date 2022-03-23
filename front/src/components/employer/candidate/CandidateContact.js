import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { themeEmployer} from 'configs/theme';


export default function CandidateContact(props) {
    const { profilCandidate } = props
    return (
        <Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Typography
                    variant="h5"
                    paddingX={1}
                    bgcolor={themeEmployer.palette.bgTitleItems.main}
                    color={themeEmployer.palette.textTitleItems.main}
                    borderRadius={1}
                    position={"relative"}
                    top={"15px"}
                    textAlign={"center"}
                >
                    Contact
                </Typography>
            </Box>

            <Box
                paddingX={2}
                borderRadius={3}
                paddingTop={3}
                paddingBottom={3}
                marginBottom={3}
                bgcolor={themeEmployer.palette.bgBox.main}>
                <TableContainer sx={{ borderRadius: 2 }}>
                    <Table >
                        <TableHead sx={{ bgcolor: "#FF7F50" }}>
                            <TableRow>
                                <TableCell sx={{ color: "white" }} align="center">
                                    Nom
                                </TableCell>
                                <TableCell sx={{ color: "white" }} align="center">
                                    Prénom
                                </TableCell>
                                <TableCell sx={{ color: "white" }} align="center">
                                    Adresse postale
                                </TableCell>
                                <TableCell sx={{ color: "white" }} align="center">
                                    Telephone
                                </TableCell>
                                <TableCell sx={{ color: "white" }} align="center">
                                    E-mail
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
                                <TableCell align="center">{profilCandidate.name}</TableCell>
                                <TableCell align="center">{profilCandidate.lastName}</TableCell>
                                <TableCell sx={{ minWidth: { xs: "150px", sm: "150px" } }} align="center">{profilCandidate.address + " " + profilCandidate.zipCode + " " + profilCandidate.town}</TableCell>
                                <TableCell align="center">{profilCandidate.phone}</TableCell>
                                <TableCell align="center">{profilCandidate.mail}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};