import { Container, Divider, List } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CandidatureList from "components/candidat/CandidatureList";
import { useSelector } from "react-redux";

const CandidatCandidature = () => {
  const candidatures = useSelector((state) => state.candidate.candidatures.postul)
  console.log('candidature', candidatures);
  return (
    <Container
      sx={{
        bgcolor: "#E5E5E5",
        p: 2,
        height: "auto",
        mt: 2,
      }}>
      {candidatures && candidatures.map((ListCandidature, index) => (
        <CandidatureList ListCandidature={ListCandidature} key={index} />
      ))}
    </Container>

  );
};

export default CandidatCandidature;