import { Box, Collapse, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

import pdf1 from "assets/documents/Cours_SQL.pdf";
import pdf2 from "assets/documents/Conception_base_de_donnees.pdf";
import { themeUser } from 'configs/theme';
import CandidateContact from "components/employer/candidate/CandidateContact"
import CandidateExperience from "components/employer/candidate/CandidateExperience"
import CandidateSkill from "components/employer/candidate/CandidateSkill"
import CandidateInterest from "components/employer/candidate/CandidateInterest"
import CandidateCertificate from "components/employer/candidate/CandidateCertificate"


const EmployerCandidateId = () => {

    const profilCandidate = {
        name: "tassin",
        lastName: "jean",
        mail: "jean.tassin@orange.fr",
        tel: "02 32 32 32 45",
        address: "rue de bidule",
        zipCode: "72400",
        town: "Allonnes",
        statut: "retenu",
        cvCandidat: {
            experience: [
                {
                    entreprise: "Arinfo",
                    job: "stagière",
                    dateStart: "30/011/2021",
                    descriptif:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
                    dateEnd: "30/04/2022",
                },
                {
                    entreprise: "Arinfo",
                    job: "stagière",
                    dateStart: "30/011/2021",
                    descriptif:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
                    dateEnd: "30/04/2022",
                },
            ],
            skill: ["HTML", "CSS", "VUEJS", "REACTJS", "FAIRE LE CAFE"],
            interest: ['Planche à voile', 'cerveau lent', 'Foot', 'Pillier de comptoir'],
            certificate: [
                { id: 1, school: 'Arinfo', title: 'Developpeur web et web mobile', year: 2021, validate: 1 },
                { id: 2, school: 'Lycée Estournelle de constant', title: 'BTS électronique', year: 2022, validate: 1 },
                { id: 3, school: 'Arinfo', title: "Concepteur développeur d'application", year: 2023, validate: 0 },],
            document: [
                { name: "cv", url: pdf1 },
                { name: "lettre motivation", url: pdf2 },
            ],
        },
    };

    return (
        <Container
            sx={{
                bgcolor: themeUser.palette.background.default,
                p: 2,
            }}
        >

            {/* {/* partie contact/} */}
            <CandidateContact profilCandidate={profilCandidate} />

            {/* {/* partie Experience/} */}
            <CandidateExperience profilCandidate={profilCandidate} />

            {/* {/* partie Compétence/} */}
            <CandidateSkill profilCandidate={profilCandidate} />

            {/* {/* partie Interet} */}
            <CandidateInterest profilCandidate={profilCandidate} />

            {/* {/* partie diplome et formation} */}
            <CandidateCertificate profilCandidate={profilCandidate} />




        </Container >






    );
};

export default EmployerCandidateId;