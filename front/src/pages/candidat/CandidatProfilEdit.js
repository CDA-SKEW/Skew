import { Container, CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChekboxCV from "../../components/candidat/profil/ChekboxCV";
import Masonry from '@mui/lab/Masonry';
import TableContact from "components/candidat/profilEdit/TableContact";
import TableExperience from "components/candidat/profilEdit/TableExperience";
import TableComp from "components/candidat/profilEdit/TableComp";
import TableInt from "components/candidat/profilEdit/TableInt";
import TableFormation from "components/candidat/profilEdit/TableFormation";
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getProfilCandidate } from "store/actions/CandidateActions";



const CandidatProfilEdit = () => {

  // const dispatch = useDispatch();

  // // useEffect(() => {
  // //   console.log("effect getDataProfilCandidate");
  // dispatch(getProfilCandidate());
  // // }, []);


  // const [editProfilCandidate, setEditProfilCandidate] = useState("none");

  // const handleEditProfilCandidate = (e) => {
  //   // console.log("fct EditProfilPersonal");
  //   setEditProfilCandidate("block")
  // };
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
        <Box
          sx={{ position: "relative", display: "flex", justifyContent: "right" }}>
          <Button
            sx={{ color: "white", bgcolor: "red" }}>
            Edit All
          </Button>
        </Box>
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
        <TableFormation />
        {/* CV Checkbox*/}
        <ChekboxCV />

      </Container>
    </React.Fragment >

  );
};

export default CandidatProfilEdit;
