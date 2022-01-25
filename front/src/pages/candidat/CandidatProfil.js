import { Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import Sidebar from "components/core/Sidebar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";



const CandidatProfil = () => {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container
                sx={{
                    bgcolor: "#E5E5E5",
                    minHeight: "100vh",
                    my: 0
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{
                            display: "inline-flex",
                            px: 1,
                            mt: 2,
                            bgcolor: "#004F98",
                            borderRadius: 1,
                            position: "relative",
                            top: 15,
                            color: "white"
                        }}
                    >
                        Contact
                    </Typography>
                </Box>







                <Box sx={{ bgcolor: "#FFFFFF", height: "40vh", display: "flex", justifyContent: "center", }} >
                    <Box
                        sx={{
                            display: "flex",
                            backgroundColor: "orange",
                            justifyContent: "space-around",
                            position: "relative",
                            mt: 3,
                            width: { md: '75%', xs: '100%' }
                        }}>
                        <Typography>
                            Adresse Postal
                        </Typography>
                        <Typography>
                            Téléphone

                        </Typography>
                        <Typography>
                            Email
                        </Typography>
                    </Box>

                </Box>




                <Box
                    sx={{
                        display: "flex",
                        position: "relative"
                    }}>
                    <Typography variant="p" color="black">
                        10 rue du Skew
                        Skewland 00000
                    </Typography>
                    <Typography>
                        06 00 00 00 00
                    </Typography>
                    <Typography>
                        skew@skew.fr
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>

    );
}



export default CandidatProfil;
