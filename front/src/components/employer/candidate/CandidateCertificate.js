import { Box, Collapse, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { themeUser } from 'configs/theme';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';



export default function CandidateCertificate(props) {
    const { profilCandidate } = props
    const [openCertificate, setOpenCertificate] = React.useState(false);
  
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
                    Diplomes et/ou formations
                </Typography>
            </Box>

            <Box
                paddingX={2}
                borderRadius={3}
                paddingTop={1}
                paddingBottom={3}
                marginBottom={3}
                bgcolor={themeUser.palette.text.primary}>

                {/* Bouton collpase */}
                <Box display={"flex"} justifyContent={"end"}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpenCertificate(!openCertificate)}
                        sx={{ color: themeUser.palette.primary.main }}
                    >{openCertificate ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </Box>

                <Collapse in={openCertificate} timeout="auto" unmountOnExit>

                    <TableContainer sx={{ borderRadius: 2 }}>

                        <Table aria-label="collapsible table">


                            <TableHead sx={{ bgcolor: "#FF7F50" }}>
                                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                                    <TableCell align="center" sx={{ color: "white" }}>Ecole/Centre</TableCell>
                                    <TableCell align="center" sx={{ color: "white" }}>Intitulé</TableCell>
                                    <TableCell align="center" sx={{ color: "white" }}>Année</TableCell>
                                    <TableCell align="center" sx={{ color: "white" }}>Obtention</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {profilCandidate.cvCandidat.certificate.map((certificate, index) => (
                                    <TableRow hover key={index}>
                                        <TableCell align="center">
                                            {certificate.school}
                                        </TableCell>
                                        <TableCell align="center">
                                            {certificate.title}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                        >{certificate.year}
                                        </TableCell>
                                        <TableCell align="center">{certificate.validate === 0 ? "Non" : "Oui"}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </TableContainer>
                </Collapse>

            </Box>
        </Box>
    )}