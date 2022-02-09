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
  dispatch(getProfilCandidate());
  // dispatch(postFormProfilCandidate());
  // dispatch(putFormProfilCandidate());
  // dispatch(deleteFormProfilCandidate());

  const dataProfilCandidate = useSelector((state) => state.candidate.dataProfilCandidate)
  console.log("store dataProfil page profil", dataProfilCandidate);

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
        {/* <Box
          sx={{ position: "relative", display: "flex", justifyContent: "right" }}>
          <Button
            sx={{ color: "white", bgcolor: "red" }}>
            Edit All
          </Button>
        </Box> */}
        {/*   {/* BOX CONTACT*/}
        <TableContact ListUser={dataProfilCandidate.coord} />

        {/* BOX Expérience*/}
        <TableExperience ListExp={dataProfilCandidate.exp} />


        {/* BOX COMPETENCE & INTERET */}
        <Masonry columns={2} spacing={2} >
          <TableComp ListSkill={dataProfilCandidate.skill} />
          <TableInt ListInterest={dataProfilCandidate.interest} />
        </Masonry>

        {/* BOX FORMATION*/}
        <TableFormation ListCertificate={dataProfilCandidate.certificate} />
        {/* CV Checkbox*/}
        <ChekboxCV listCv={dataProfilCandidate.cv} />

      </Container>
    </React.Fragment >

  );
};

export default CandidatProfil;
