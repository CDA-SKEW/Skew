import { Box, Button, Container, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { themeUser } from 'configs/theme';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

function createData(name, lastName, email, tel, statut) {
    return {
        name,
        lastName,
        email,
        tel,
        statut,
        profilCandidat: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row(props) {

    // console.log(props)
    const { numberCandidat,row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>

            <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell align="center" >{numberCandidat+1}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.tel}</TableCell>
                <TableCell align="center">{row.statut}</TableCell>
                <TableCell align="center">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon sx={{ bgcolor: "#DCDCDC" }} /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Box display={"flex"}
                                justifyContent={"space-around"}
                                border={1}
                                marginBottom={2}>


                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: { sm: "flex-start", md: "center" },
                                    }}
                                >
                                    <Typography>N° de siret: </Typography>
                                    <Typography paddingLeft={1}>{ }</Typography>
                                </Box>


                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: { sm: "flex-start", md: "center" },
                                    }}
                                >
                                    <Typography>N° de siret: </Typography>
                                    <Typography paddingLeft={1}>{ }</Typography>
                                </Box>


                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: { sm: "flex-start", md: "center" },
                                    }}
                                >
                                    <Typography>N° de siret: </Typography>
                                    <Typography paddingLeft={1}>{ }</Typography>
                                </Box>

                            </Box>

                            <Box
                                border={1} marginBottom={2}>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Date</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Customer</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Amount</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Total price ($)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.profilCandidat.map((candidatRow) => (
                                            <TableRow hover key={candidatRow.date}>
                                                <TableCell component="th" scope="row" align="center">
                                                    {candidatRow.date}
                                                </TableCell>
                                                <TableCell align="center">{candidatRow.customerId}</TableCell>
                                                <TableCell align="center">{candidatRow.amount}</TableCell>
                                                <TableCell align="center">
                                                    {candidatRow.amount}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>


                            <Box
                                border={1} marginBottom={2}>

                                <Typography textAlign={"center"}>
                                    Skill
                                </Typography>
                                <Divider />

                            </Box>


                            <Box
                                border={1} marginBottom={2}>

                                <Typography textAlign={"center"}>
                                    Document(s)
                                </Typography>
                                <Divider />

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
                                        fontSize: { xs: "65%", sm: "75%", md: "100%" }
                                    }}
                                    startIcon={<ForwardToInboxIcon sx={{
                                        display: { xs: "none", sm: "none",md: "block" } 
                                    }} />}
                                >
                                    Contacter
                                </Button>


                                {/* vor candidat */}
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        bgcolor: "#ABC4FF",
                                        color: "black",
                                        m: 1,
                                        fontSize: { xs: "65%", sm: "75%", md: "100%" }
                                    }}
                                    startIcon={<VisibilityIcon sx={{
                                        display: { xs: "none", sm: "none",md: "block" }
                                    }} />}
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
                                        fontSize: { xs: "65%", sm: "75%", md: "100%" }
                                    }}
                                    startIcon={<DoDisturbIcon sx={{
                                        display: { xs: "none", sm: "none",md: "block" }
                                    }} />}
                                >
                                    Non retenu
                                </Button>

                                {/* Retenu */}
                                <Button
                                    variant="contained"
                                    size="small"
                                     sx={{
                                        bgcolor: "#16B84E",
                                        color: "black",
                                        m: 1,
                                        fontSize: { xs: "65%", sm: "75%", md: "100%" }
                                    }}
                                    startIcon={<CheckCircleOutlineIcon sx={{
                                        display: { xs: "none", sm: "none",md: "block" }
                                    }} />}
                                >
                                    Retenu
                                </Button>


                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment >
    );
}


const rows = [
   createData("Tassin", "jean", "jean.tassin@orange.fr", "02 32 32 32 45", "retenu"),
   createData("Tassin", "jean", "jean.tassin@orange.fr", "02 32 32 32 45", "retenu"),
   createData("Tassin", "jean", "jean.tassin@orange.fr", "02 32 32 32 45", "retenu"),
   createData("Tassin", "jean", "jean.tassin@orange.fr", "02 32 32 32 45", "retenu"),
   createData("Tassin", "jean", "jean.tassin@orange.fr", "02 32 32 32 45", "retenu"),
];

const EmployerOffer = () => {
    return (
        <Container
            sx={{
                bgcolor: themeUser.palette.background.default,
                p: 2,
            }}
        >

            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Typography
                    variant="h4"
                    paddingX={1}
                    bgcolor={themeUser.palette.primary.main}
                    color={themeUser.palette.text.primary}
                    borderRadius={1}
                    position={"relative"}
                    top={"15px"}
                    textAlign={"center"}
                >
                    Mes offfres
                </Typography>
            </Box>
            {/* {/* partie mes offres/} */}
            <Box borderRadius={3}
                paddingTop={2}
                paddingBottom={2}
                marginBottom={2}
                bgcolor={themeUser.palette.text.primary}

            // bgcolor: themeUser.palette.text.primary,
            >
                <Typography
                    textAlign={"center"}
                    marginBottom={2}
                    variant="h5"
                >
                    Offres n°4554 - developpeur web
                </Typography>


                <Box
                    paddingX={2}
                    display={"flex"}
                    sx={{ justifyContent: { xs: "center", sm: "end" } }}

                >
                    {/* bouton offree id */}
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            bgcolor: "#5501FF",
                            opacity: "60%",
                            color: "white",
                            m: 1,
                            fontSize: { xs: "65%", sm: "100%" }
                        }}
                        startIcon={<VisibilityIcon sx={{ display: { xs: "none", sm: "block" } }} />}
                    >
                        Voir l'offre
                    </Button>


                    {/* bouton offree id */}
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            bgcolor: "#5501FF",
                            opacity: "60%",
                            color: "white",
                            m: 1,
                            fontSize: { xs: "65%", sm: "100%" }
                        }}
                        startIcon={<DeleteIcon sx={{ display: { xs: "none", sm: "block" } }} />}
                    >
                        Supprimer l'offre
                    </Button>

                </Box>

                <Box paddingX={2} paddingTop={1}>
                    <TableContainer sx={{ borderRadius: 2 }} >
                        <Table aria-label="collapsible table">
                            <TableHead sx={{ bgcolor: "#FF7F50" }}>
                                <TableRow>
                                    <TableCell sx={{ color: "white" }} align="center">Nb de candidat</TableCell>
                                    <TableCell sx={{ color: "white" }} align="center">Nom</TableCell>
                                    <TableCell sx={{ color: "white" }} align="center">Prénom</TableCell>
                                    <TableCell sx={{ color: "white" }} align="center">Email</TableCell>
                                    <TableCell sx={{ color: "white" }} align="center">Telephone</TableCell>
                                    <TableCell sx={{ color: "white" }} align="center">Statut</TableCell>
                                    <TableCell sx={{ color: "white" }} align="center">Plus</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {rows.map((row, index) => (
                                    <Row key={index} numberCandidat={index} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Container >
    );
};

export default EmployerOffer;