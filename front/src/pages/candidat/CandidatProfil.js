import { Typography } from "@mui/material";
import { Box } from "@mui/system";
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
                    height: "100vh",
                    my: 2
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
                            color: "white",
                            borderRadius: 1,
                            position: "relative",
                            top: 15
                        }}
                    >
                        Contact
                    </Typography>

                </Box>
                <Typography
                    variant="h7"
                    component="h7"
                    sx={{
                        display: "inline-flex",
                        bgcolor: "orange",
                        position: "absolute",
                        color: "white",
                        mt: "50"
                    }}>
                    Adresse Postale Téléphone Email
                </Typography>

                <Box sx={{ bgcolor: "#FFFFFF", height: "40vh" }} />

            </Container>
        </React.Fragment>
    );
}



export default CandidatProfil;
