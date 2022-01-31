import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CandidatureList from "components/candidat/CandidatureList";

const CandidatCandidature = () => {
  return (
      <Container
      sx={{
        bgcolor: "#E5E5E5",
        p: 2,
        height: "auto",
        mt: 2,
      }}>
       <Box>
        <CandidatureList/>
       </Box>
      </Container>
   
  );
};

export default CandidatCandidature;