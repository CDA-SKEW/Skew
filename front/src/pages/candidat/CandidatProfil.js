import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ChekboxCV from "../../components/candidat/ChekboxCV";
import Masonry from '@mui/lab/Masonry';
import TableContact from "components/candidat/TableContact";
import TableExperience from "components/candidat/TableExperience";
import TableComp from "components/candidat/TableComp";
import TableInt from "components/candidat/TableInt"


const CandidatProfilTest = () => {


  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          bgcolor: "#E5E5E5",
          p: 2,
          height: "auto",
          mt: 2,
        }}
      >
        {/*   {/* BOX CONTACT*/}
        <TableContact />

        {/* BOX Expérience*/}
        <TableExperience />

        {/* BOX COMPETENCE & INTERET */}
        <Masonry columns={2} spacing={2}>
          <TableComp />
          <TableInt />
        </Masonry>

        {/* BOX FORMATION*/}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              bgcolor: "#FF7F50",

            }}>
            <Typography>
              Ecole/Centre
            </Typography>
            <Typography>
              Intilulé
            </Typography>
            <Typography>
              Année
            </Typography>
            <Typography>
              Obtention
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mt: 2
            }}>
            <Typography>
              Arinfo
            </Typography>
            <Typography>
              Titre Pro DWWM
            </Typography>
            <Typography>
              2020
            </Typography>
            <Typography>
              Oui
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mt: 2
            }}>
            <Typography>
              Arinfo
            </Typography>
            <Typography>
              Designer Web
            </Typography>
            <Typography>
              2020
            </Typography>
            <Typography>
              Oui
            </Typography>
          </Box>

        </Box>
        {/* Mes CV */}
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            height: "auto",
            borderRadius: 1,
            my: 4,
            width: "auto"
          }}
        >
          {/* Titre section CV */}
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
              Mes CV
            </Typography>
          </Box>
          <Box>
            <ChekboxCV />
          </Box>

        </Box>

      </Container>
    </React.Fragment>
  );
};

export default CandidatProfilTest;
