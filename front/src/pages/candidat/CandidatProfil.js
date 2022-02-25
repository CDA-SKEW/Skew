import { Container, CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChekboxCV from "../../components/candidat/profil/ChekboxCV";
import Masonry from '@mui/lab/Masonry';
import TableContact from "components/candidat/profil/TableContact";
import TableExperience from "components/candidat/profil/TableExperience";
import TableComp from "components/candidat/profil/TableComp";
import TableInt from "components/candidat/profil/TableInt";
import TableFormation from "components/candidat/profil/TableFormation";
import { useDispatch, useSelector } from "react-redux";
import { getProfilCandidate, postFormProfilCandidate, putFormProfilCandidate, deleteFormProfilCandidate } from "store/actions/CandidateActions";




const CandidatProfil = () => {

  const dispatch = useDispatch();
  // dispatch(postFormProfilCandidate());
  // dispatch(putFormProfilCandidate());
  // dispatch(deleteFormProfilCandidate());

  // useEffect(() => dispatch(getProfilCandidate()), [])
  // dispatch(getProfilCandidate())
  const User = useSelector((state) => state.candidate.userProfil)
  // console.log('user page candidate profile', User)

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          bgcolor: "#E5E5E5",
          height: "auto"
        }}
      >
        {/* <Box
          sx={{ position: "relative", display: "flex", justifyContent: "right" }}>
          <Button
            sx={{ color: "white", bgcolor: "red" }}>
            Edit All
          </Button>
        </Box> */}
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
        {/* CV Checkbox*/}
        {/* <ChekboxCV listCv={User && User.cv} /> */}

      </Container>
    </React.Fragment >

  );
};

export default CandidatProfil;
