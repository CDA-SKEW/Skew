import { Container, CssBaseline } from "@mui/material";
import React from "react";
import ChekboxCV from "../../components/candidat/ChekboxCV";
import Masonry from '@mui/lab/Masonry';
import TableContact from "components/candidat/TableContact";
import TableExperience from "components/candidat/TableExperience";
import TableComp from "components/candidat/TableComp";
import TableInt from "components/candidat/TableInt";
import TableFormation from "components/candidat/TableFormation";
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const CandidatProfilTest = () => {
  const user = useSelector((state) => state.candidate.user)
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
        <Box
          sx={{ position: "relative", display: "flex", justifyContent: "right" }}>
          <Button
            sx={{ color: "white", bgcolor: "red" }}>
            Edit All
          </Button>
        </Box>
        {/*   {/* BOX CONTACT*/}
        <TableContact ListUser={user.coord} />

        {/* BOX Expérience*/}
        <TableExperience ListExp={user.exp} />


        {/* BOX COMPETENCE & INTERET */}
        <Masonry columns={2} spacing={2}>
          <TableComp ListSkill={user.skill} />
          <TableInt ListInterest={user.interest} />
        </Masonry>

        {/* BOX FORMATION*/}
        <TableFormation ListCertificate={user.certificate} />
        {/* CV Checkbox*/}
        <ChekboxCV listCv={user.cv} />

      </Container>
    </React.Fragment >
  );
};

export default CandidatProfilTest;
