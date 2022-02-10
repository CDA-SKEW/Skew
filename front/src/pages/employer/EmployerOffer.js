import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

// import document en static mais à voir pour aller chercher le doc dans le back plus tard
import pdf1 from "assets/documents/Cours_SQL.pdf";
import pdf2 from "assets/documents/Conception_base_de_donnees.pdf";
import CardTableOffer from "components/employer/offers/CardTableOffer";
import { themeUser } from "configs/theme";

const offers = [
  {
    title: "developpeur web",
    number: 42524,
    profilCandidate: [
      {
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
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      },
      {
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
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      },
      {
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
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      },
    ]    
  },
  {
    title: "Cuisinier",
    number: 43523,
    profilCandidate: [
      {
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
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      },
      {
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
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      },
      {
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
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      },
    ],
  },
];

const EmployerOffer = () => {
  return (
    <Container
    sx={{ pb: 3 }}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Typography
          variant="h5"
          paddingX={1}
          bgcolor={themeUser.palette.primary.main}
          color={themeUser.palette.text.primary}
          borderRadius={1}
          position={"relative"}
          top={"25px"}
          textAlign={"center"}
        >
          Mes offres
        </Typography>
      </Box>
      {/* {/* partie mes offres/} */}
      {/* {console.log(offers)} */}
      {offers && offers.map((offer, index) => <CardTableOffer key={index} offer={offer}  />)}
    </Container>
  );
};

export default EmployerOffer;
