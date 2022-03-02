import { Box, Button, Container } from '@mui/material';
import React from 'react';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CandidateContact from "components/employer/candidate/CandidateContact"
import CandidateExperience from "components/employer/candidate/CandidateExperience"
import CandidateSkill from "components/employer/candidate/CandidateSkill"
import CandidateInterest from "components/employer/candidate/CandidateInterest"
import CandidateCertificate from "components/employer/candidate/CandidateCertificate"
import { useLocation, useNavigate } from 'react-router-dom';
import withRecruteur from "components/auth/withRecruteur";

const EmployerCandidateId = () => {

    const { state } = useLocation();
    const navigate = useNavigate();

    // console.log("state", state)

    return (
        <Container  >
            <Box
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
                // bgcolor={"#FF7F50"}
                // color={"white"}
                px={2}
            >

                <Button onClick={e => navigate(-1)}>
                    <CancelTwoToneIcon sx={{
                        fontSize: 50, color: "white", p: 1
                    }}
                    />
                </Button>
            </Box>

            {/* {/* partie contact/} */}
            {state && (
                <CandidateContact profilCandidate={state.profilCandidate} />
            )}


            {/* {/* partie Experience/} */}
            {state && (
                <CandidateExperience profilCandidate={state.profilCandidate} />
            )}


            {/* {/* partie Compétence/} */}
            {state && (
                <CandidateSkill profilCandidate={state.profilCandidate} />
            )}


            {/* {/* partie Interet} */}
            {state && (
                <CandidateInterest profilCandidate={state.profilCandidate} />
            )}

            {/* {/* partie diplome et formation} */}
            {state && (
                <CandidateCertificate profilCandidate={state.profilCandidate} />
            )}




        </Container >






    );
};

export default withRecruteur(EmployerCandidateId);