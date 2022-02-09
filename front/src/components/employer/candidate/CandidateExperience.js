import { Box, Collapse, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';

import { themeUser } from 'configs/theme';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';



export default function CandidateExperience(props) {
    const { profilCandidate } = props
    const [openExperience, setOpenExperience] = useState(false);

    return (
        <Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Typography
                    variant="h5"
                    paddingX={1}
                    bgcolor={themeUser.palette.primary.main}
                    color={themeUser.palette.text.primary}
                    borderRadius={1}
                    position={"relative"}
                    top={"15px"}
                    textAlign={"center"}
                >
                    Expériences
                </Typography>
            </Box>

            <Box
                paddingX={2}
                paddingTop={1}
                borderRadius={3}
                paddingBottom={3}
                marginBottom={3}
                bgcolor={themeUser.palette.text.primary}>

                {/* Bouton collpase */}
                <Box display={"flex"} justifyContent={"end"}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpenExperience(!openExperience)}
                        sx={{ color: themeUser.palette.primary.main }}
                    >{openExperience ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </Box>

                <Collapse in={openExperience} timeout="auto" unmountOnExit>

                    <TableContainer sx={{ borderRadius: 2 }}>

                        <Table aria-label="collapsible table">


                            <TableHead sx={{ bgcolor: "#FF7F50" }}>
                                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                                    <TableCell align="center" sx={{ color: "white" }}>Entreprise</TableCell>
                                    <TableCell align="center" sx={{ color: "white" }}>Poste</TableCell>
                                    <TableCell align="center" sx={{ color: "white" }}>Date de début</TableCell>
                                    <TableCell align="center" sx={{ color: "white" }}>Description</TableCell>
                                    <TableCell align="center" sx={{ color: "white" }}>Date de fin</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {profilCandidate.cvCandidat.experience.map((experience, index) => (
                                    <TableRow hover key={index}>
                                        <TableCell align="center">
                                            {experience.entreprise}
                                        </TableCell>
                                        <TableCell align="center">{experience.job}</TableCell>
                                        <TableCell align="center">
                                            {experience.dateStart}
                                        </TableCell>
                                        <TableCell
                                            sx={{ minWidth: { xs: "500px", sm: "500px" } }}
                                            align="center"
                                        >
                                            {experience.descriptif}
                                        </TableCell>
                                        <TableCell align="center">
                                            {experience.dateEnd}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </TableContainer>
                </Collapse>

            </Box>
        </Box>
    )
}