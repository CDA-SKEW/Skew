import { Container } from "@mui/material";
import React from "react";
import CandidatureRow from "components/candidat/listOffer/CandidatureRow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import List from '@mui/material/List';

import { getOffreCandidate } from "store/actions/CandidateActions";
import withCandidat from "components/auth/withCandidat";

const CandidatCandidature = () => {

  const ListCandidature = useSelector(state => state.candidate.candidaturesProfil)
  const dispatch = useDispatch()
  console.log(ListCandidature);
  useEffect(() => {
    dispatch(getOffreCandidate())
  }, [])

  return (
    <Container
      sx={{
        bgcolor: "#E5E5E5",
        p: 2,
        height: "auto",
        mt: 2,
      }}>
      {/* Liste des candidature UserID */}
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {ListCandidature && ListCandidature.map((candidature, index) => (
          <CandidatureRow key={index} candidature={candidature} />
        ))}
      </List>
    </Container>

  );
};

export default withCandidat(CandidatCandidature);
// export default CandidatCandidature;