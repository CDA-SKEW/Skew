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

// function createData(name, lastName, email, tel, statut) {
//     return {
//         name,
//         lastName,
//         email,
//         tel,
//         statut,
//         profilCandidat: [
//             {
//                 entreprise: "Arinfo",
//                 job: "stagière",
//                 dateStart: "30/011/2021",
//                 descriptif: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
//                 dateEnd: "30/04/2022",
//             },
//             {
//                 entreprise: "Arinfo",
//                 job: "stagière",
//                 dateStart: "30/011/2021",
//                 descriptif: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
//                 dateEnd: "30/04/2022",
//             },
//         ],
//     };
// }



// const rows = [
//     createData("Tassin", "jean", "jean.tassin@orange.fr", "02 32 32 32 45", "retenu"),
//     createData("Tassin", "jean", "jean.tassin@orange.fr", "02 32 32 32 45", "retenu"),
//     createData("Tassin", "jean", "jean.tassin@orange.fr", "02 32 32 32 45", "retenu"),
//     createData("Tassin", "jean", "jean.tassin@orange.fr", "02 32 32 32 45", "retenu"),
//     createData("Tassin", "jean", "jean.tassin@orange.fr", "02 32 32 32 45", "retenu"),
// ];

const rows = [
    {
        name: "tassin",
        lastName: "jean",
        email: "jean.tassin@orange.fr",
        tel: "02 32 32 32 45",
        address:"rue de bidule",
        zipcCode:"72400",
        town: "Allonnes",
        statut: "retenu",
        profilCandidat: [
            {
                entreprise: "Arinfo",
                job: "stagière",
                dateStart: "30/011/2021",
                descriptif: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
                dateEnd: "30/04/2022",
            },
            {
                entreprise: "Arinfo",
                job: "stagière",
                dateStart: "30/011/2021",
                descriptif: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
                dateEnd: "30/04/2022",
            },
        ],
    },
    {
        name: "tassin",
        lastName: "jean",
        email: "jean.tassin@orange.fr",
        tel: "02 32 32 32 45",
        address:"rue paoo",
        zipcCode:"72900",
        town: "Le Mans",
        statut: "retenu",
        profilCandidat: [
            {
                entreprise: "Arinfo",
                job: "stagière",
                dateStart: "30/011/2021",
                descriptif: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
                dateEnd: "30/04/2022",
            },
            {
                entreprise: "Arinfo",
                job: "stagière",
                dateStart: "30/011/2021",
                descriptif: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
                dateEnd: "30/04/2022",
            },
        ],
        skill: [    
        ],
    }
]

function Row(props) {

    // console.log(props)
    const { numberCandidat, row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>

            <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell align="center" >{numberCandidat + 1}</TableCell>
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
                                    <Typography paddingLeft={1}>{row.zipcCode}</Typography>
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

                            <Box
                                border={1} marginBottom={2}>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Entreprise</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Poste</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Date de début</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Description</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Date de fin</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.profilCandidat.map((candidatRow, index) => (
                                            <TableRow hover key={index}>
                                                <TableCell align="center">{candidatRow.entreprise}</TableCell>
                                                <TableCell align="center">{candidatRow.job}</TableCell>
                                                <TableCell align="center">{candidatRow.dateStart}</TableCell>
                                                <TableCell sx={{ minWidth: { xs: "500px", sm: "500px" } }} align="center">{candidatRow.descriptif}</TableCell>
                                                <TableCell align="center">{candidatRow.dateEnd}</TableCell>
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
                                        display: { xs: "none", sm: "none", md: "block" }
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
                                        display: { xs: "none", sm: "none", md: "block" }
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
                                        display: { xs: "none", sm: "none", md: "block" }
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
                                        display: { xs: "none", sm: "none", md: "block" }
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
                                    // console.log("index, row", row, index)
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