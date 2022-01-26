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
                    my: 0,
                    minWidth:"100vw"
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


                <Box sx={{ bgcolor: "#FFFFFF", height: "20vh", display: "flex", justifyContent: "center", }} >
                      <Box
                        sx={{
                            display: "flex",
                            backgroundColor: "orange",
                            justifyContent: "space-around",
                            position: "absolute",
                            mt: 3,
                           width:"75%"
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

                      <Box
                        sx={{
                            display: "flex",
                            
                            justifyContent: "space-around",
                            position: "absolute",
                            mt: 10,
                           width:"75%"
                        }}>
                        <Typography>
                            10 rue du Skew 
                            72000 le mans
                        </Typography>
                        <Typography>
                           06 00 00 00 00

                        </Typography>
                        <Typography>
                            Skew@skew.fr
                        </Typography>
                      </Box>

                </Box>







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
                       Expérience
                    </Typography>
                </Box>

                <Box sx={{ bgcolor: "#FFFFFF", height: "20vh", display: "flex", justifyContent: "center", }} >
                      <Box
                        sx={{
                            display: "flex",
                            backgroundColor: "orange",
                            justifyContent: "space-around",
                            position: "absolute",
                            mt: 3,
                           width:"75%"
                        }}>
                        <Typography>
                            Entreprise
                        </Typography>

                        <Typography>
                            Poste
                        </Typography>

                        <Typography>
                            Date de debut
                        </Typography>

                        <Typography>
                            Date de fin
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                            display: "flex",
                            
                            justifyContent: "space-around",
                            position: "absolute",
                            mt: 10,
                           width:"75%"
                        }}>
                        <Typography>
                            Arinfo
                        </Typography>
                        <Typography>
                           Stagiaire

                        </Typography>
                        <Typography>
                           10/02/2021
                        </Typography>
                        <Typography>
                           10/02/2022
                        </Typography>
                      </Box>

                </Box>






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
                       Expérience
                    </Typography>
                </Box>

                <Box sx={{ bgcolor: "#FFFFFF", height: "20vh", width:"50%", display: "flex", justifyContent: "center", }} >
                      
                      
                      
                      <Box
                        sx={{
                            display: "flex",
                            backgroundColor: "orange",
                            justifyContent: "space-around",
                            position: "absolute",
                            mt: 3,
                           width:"50%"
                        }}>
                        <Typography>
                            Entreprise
                        </Typography>

                        <Typography>
                            Poste
                        </Typography>

                        <Typography>
                            Date de debut
                        </Typography>

                        <Typography>
                            Date de fin
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                            display: "flex",
                            
                            justifyContent: "space-around",
                            position: "absolute",
                            mt: 10,
                           width:"75%"
                        }}>
                        <Typography>
                            Arinfo
                        </Typography>
                        <Typography>
                           Stagiaire

                        </Typography>
                        <Typography>
                           10/02/2021
                        </Typography>
                        <Typography>
                           10/02/2022
                        </Typography>
                      </Box>

                </Box>




                




            </Container>
        </React.Fragment>

    );
}



export default CandidatProfil;
