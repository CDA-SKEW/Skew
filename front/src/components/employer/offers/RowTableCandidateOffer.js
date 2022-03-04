import { Button, Collapse, Divider, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Box, color } from "@mui/system";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ModalMessageCandidate from "./ModalMessageCandidate";
import ModalConfimation from "components/ModalConfimation";
import { useNavigate } from "react-router-dom";
import moment from "moment";


export default function RowTableCandidateOffer(props) {

    const navigate = useNavigate();

    // console.log(props)
    const { numberCandidat, row, offer, dataProfilUser } = props;
    const [open, setOpen] = useState(false);
    // console.log("offer", offer)
    //   console.log("row", row)

    //constante pour les modals confirmation
    const [openModalConfirmationRetain, setOpenModalConfirmationRetain] = useState(false);
    const handleClickOpenModalConfirmationRetain = () => {
        setOpenModalConfirmationRetain(true);
    };
    const handleCloseModalConfirmationRetain = () => {
        setOpenModalConfirmationRetain(false);
    };

    const [openModalConfirmationNoRetain, setOpenModalConfirmationNoRetain] = useState(false);
    const handleClickOpenModalConfirmationNoRetain = () => {
        setOpenModalConfirmationNoRetain(true);
    };
    const handleCloseModalConfirmationNoRetain = () => {
        setOpenModalConfirmationNoRetain(false);
    };


    //constante pour le modal contact
    const [openContact, setOpenContact] = useState(false);
    const handleClickModalContact = () => {
        setOpenContact(true);
    };
    const handleCloseContact = () => {
        setOpenContact(false);
    };



    return (
        <React.Fragment>
            <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell align="center">{numberCandidat + 1}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.mail}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                {row.statut === 0 ? <TableCell align="center" sx={{ color: "red" }}>Non retenu</TableCell> : row.statut === 1 ? <TableCell align="center" sx={{ color: "green" }}>Retenu</TableCell> : <TableCell align="center" sx={{ color: "orange" }}>En attente</TableCell>}
                <TableCell align="center">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon sx={{ bgcolor: "#DCDCDC" }} />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Box
                                display={"flex"}
                                justifyContent={"space-around"}
                                border={1}
                                marginBottom={2}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: { sm: "flex-start", md: "center" },
                                    }}
                                >
                                    <Typography>Adresse: </Typography>
                                    <Typography paddingLeft={1}>{row.address}</Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: { sm: "flex-start", md: "center" },
                                    }}
                                >
                                    <Typography>Code Postal: </Typography>
                                    <Typography paddingLeft={1}>{row.zipCode}</Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: { sm: "flex-start", md: "center" },
                                    }}
                                >
                                    <Typography>Commune: </Typography>
                                    <Typography paddingLeft={1}>{row.town}</Typography>
                                </Box>
                            </Box>

                            <Box border={1} marginBottom={2}>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                                Entreprise
                                            </TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                                Poste
                                            </TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                                Date de début
                                            </TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                                Description
                                            </TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                                Date de fin
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.cvCandidat.experience.map((candidatRow, index) => (
                                            <TableRow hover key={index}>
                                                <TableCell align="center">
                                                    {candidatRow.compagny}
                                                </TableCell>
                                                <TableCell align="center">{candidatRow.job}</TableCell>
                                                <TableCell align="center">
                                                    {moment.utc(candidatRow.dateStart).format('DD/MM/YYYY')}
                                                </TableCell>
                                                <TableCell
                                                    sx={{ minWidth: { xs: "500px", sm: "500px" } }}
                                                    align="center"
                                                >
                                                    {candidatRow.description}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {moment.utc(candidatRow.dateEnd).format('DD/MM/YYYY')}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>

                            <Box border={1} marginBottom={2}>
                                <Typography textAlign={"center"} fontWeight={"bold"}>
                                    Skill(s)
                                </Typography>
                                <Divider sx={{ mx: 2 }} />

                                <Box display={"flex"} justifyContent={"space-around"}>
                                    {row.cvCandidat.skill && row.cvCandidat.skill.map((skilltable, index) => (
                                        // console.log(skilltable, index)
                                        <Typography padding={1} key={index}>
                                            {skilltable}
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>

                            <Box border={1} marginBottom={2}>
                                <Typography textAlign={"center"} fontWeight={"bold"}>
                                    Document(s)
                                </Typography>
                                <Divider sx={{ mx: 2 }} />

                                <Box display={"flex"} justifyContent={"space-around"}>
                                    {row.cvCandidat.document && row.cvCandidat.document.map((doctable, index) => (
                                        //   console.log("value",{doctable})
                                        <Button
                                            key={index}
                                            href={doctable.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            sx={{ color: "black" }}
                                        >
                                            <PictureAsPdfIcon sx={{ pr: 1 }} />
                                            {doctable.name}
                                        </Button>
                                    ))}
                                </Box>
                            </Box>

                            <Box
                                paddingX={2}
                                display={"flex"}
                                sx={{ justifyContent: { xs: "center", sm: "end" } }}
                            >
                                {/* bouton contactez */}
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        bgcolor: "#E6C3A5",
                                        color: "black",
                                        m: 1,
                                        fontSize: { xs: "65%", sm: "75%", md: "100%" },
                                    }}
                                    startIcon={
                                        <ForwardToInboxIcon
                                            sx={{
                                                display: { xs: "none", sm: "none", md: "block" },
                                            }}
                                        />
                                    }
                                    onClick={handleClickModalContact}
                                >
                                    Contacter
                                </Button>

                                <ModalMessageCandidate
                                    id="ringtone-menu"
                                    keepMounted
                                    open={openContact}
                                    onClose={handleCloseContact}
                                    row={row}
                                    offer={offer}
                                    dataProfilUser={dataProfilUser}
                                />

                                {/* vor candidat */}
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        bgcolor: "#ABC4FF",
                                        color: "black",
                                        m: 1,
                                        fontSize: { xs: "65%", sm: "75%", md: "100%" },
                                    }}
                                    startIcon={
                                        <VisibilityIcon
                                            sx={{
                                                display: { xs: "none", sm: "none", md: "block" },
                                            }}
                                        />
                                    }
                                    onClick={e => navigate("/Employer/candidate/" + row.user_id, { state: { profilCandidate: row } })}

                                >
                                    Voir candidat
                                </Button>

                                {/* non retenu */}
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        bgcolor: "#FF000A",
                                        color: "black",
                                        m: 1,
                                        fontSize: { xs: "65%", sm: "75%", md: "100%" },
                                    }}
                                    startIcon={
                                        <DoDisturbIcon
                                            sx={{
                                                display: { xs: "none", sm: "none", md: "block" },
                                            }}
                                        />
                                    }
                                    onClick={handleClickOpenModalConfirmationNoRetain}
                                >
                                    Non retenu
                                </Button>

                                <ModalConfimation
                                    keepMounted
                                    open={openModalConfirmationNoRetain}
                                    onClose={handleCloseModalConfirmationNoRetain}
                                    titleModal="Réponse au candidat"
                                    textModal="Êtes-vous sûr de ne pas vouloir retenir ce candidat?"
                                    colorBgModal="#ABC4FF"
                                    colorTextModal="#000000"
                                    action="candidateNoRetain"
                                    param={row.user_id}
                                    offer={offer}
                                />


                                {/* Retenu */}
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        bgcolor: "#16B84E",
                                        color: "black",
                                        m: 1,
                                        fontSize: { xs: "65%", sm: "75%", md: "100%" },
                                    }}
                                    startIcon={
                                        <CheckCircleOutlineIcon
                                            sx={{
                                                display: { xs: "none", sm: "none", md: "block" },
                                            }}
                                        />
                                    }
                                    onClick={handleClickOpenModalConfirmationRetain}
                                >
                                    Retenu
                                </Button>

                                <ModalConfimation
                                    keepMounted
                                    open={openModalConfirmationRetain}
                                    onClose={handleCloseModalConfirmationRetain}
                                    titleModal="Réponse au candidat"
                                    textModal="Êtes-vous sûr de vouloir retenir ce candidat?"
                                    colorBgModal="#ABC4FF"
                                    colorTextModal="#000000"
                                    action="candidateRetain"
                                    offer={offer}
                                    param={row.user_id}
                                />

                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );


}