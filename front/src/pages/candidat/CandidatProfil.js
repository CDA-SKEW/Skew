import { Container, CssBaseline } from "@mui/material";
import React from "react";
import ChekboxCV from "../../components/candidat/profil/ChekboxCV";
import Masonry from '@mui/lab/Masonry';
import TableContact from "components/candidat/profil/TableContact";
import TableExperience from "components/candidat/profil/TableExperience";
import TableComp from "components/candidat/profil/TableComp";
import TableInt from "components/candidat/profil/TableInt";
import TableFormation from "components/candidat/profil/TableFormation";
import { useSelector } from "react-redux";
import withCandidat from "components/auth/withCandidat";
const CandidatProfil = () => {


  const User = useSelector((state) => state.candidate.userProfil)



  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          bgcolor: "#E5E5E5",
          height: "auto"
        }}
      >
        {/*   {/* BOX CONTACT*/}
        <TableContact User={User.coord} />

        {/* BOX Expérience*/}
        <TableExperience ListExp={User.experience} />

        {/* BOX COMPETENCE & INTERET */}
        <Masonry columns={2} spacing={2} >
          <TableComp ListSkill={User.skill} />
          <TableInt ListInterest={User.interest} />
        </Masonry>

        {/* BOX FORMATION*/}
        <TableFormation ListCertificate={User.certificate} />
        {/* CV Checkbox */}
        <ChekboxCV listCv={User.document} />

      </Container>
    </React.Fragment >

  );
};

// export default CandidatProfil;
export default withCandidat(CandidatProfil);