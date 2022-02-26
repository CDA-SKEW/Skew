/*
 * Import - Module
 * *************** */
import { apiSiret, api } from "configs/axios";
import {
  DELETE_OFFER,
  GET_API_SIRET,
  GET_OFFER,
  GET_PROFIL_EMPLOYER,
  GET_PROFIL_USER,
  POST_MESSAGE_CANDIDATE,
  POST_OFFER,
  POST_PROFIL_EMPLOYER,
  PUT_ACTION_CANDIDATE,
  PUT_PROFIL_EMPLOYER,
  PUT_PROFIL_USER,
  PUT_PROFIL_USER_PW,
} from "./ActionTypes";

// import image en static mais à voir pour aller chercher l'image dans le back plus tard
import imageEmployer from "assets/images/imageEmployor.png";
// import document en static mais à voir pour aller chercher le doc dans le back plus tard
import pdf1 from "assets/documents/Cours_SQL.pdf";
import pdf2 from "assets/documents/Conception_base_de_donnees.pdf";


const id = 4

// const dataDefault = {
//   user_id: 1,
//   name: "Buno & Co",
//   zipCode: "85600",
//   siren: "356454356",
//   siret: "40976852000135",
//   address: "21 fze fzefjzpej",
//   category: "fvevfeqrg",
//   town: "Bonnetable",
//   avatar: imageEmployer,
// };
// const dataDefault = {
// }
const message = "Votre offre a bien été publiée !"
const messagePostCandidate = "Votre mail a bien été envoyé !"

const dataDefaultID = {
  user_id: 1,
  mail: "wilfried.cda@gmail.com",
};

const offers = [
  {
    offer_id: 1,
    title: "developpeur web",
    type: "CDI",
    period: "",
    description: "ddsvdvsdvsdvsd fzefzefzefze  zefzefzef sdvsv sdvsvs",
    profil: "vverveververv evrvever reerer erverererere ",
    nameEmployor: "arinfo",
    dateOfferDays: "10",
    badgeEmployor: true,
    image: imageEmployer,
    profilCandidate: [
      {
        user_id: 1,
        name: "tassin",
        lastName: "jean",
        mail: "jean.tassin@orange.fr",
        phone: "02 32 32 32 45",
        address: "rue de bidule",
        zipCode: "72400",
        town: "Allonnes",
        statut: "non retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "ST elec",
              job: "CDI",
              dateStart: "30/01/2016",
              description:
                "zdzdzdzdzd ezfzefzefzefzef efzefzefzefefzefzefzefezfzef but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2218",
            },
            {
              compagny: "SAgem",
              job: "Qualité",
              dateStart: "12/05/1996",
              description:
                "csdcsdcsdc dvsdvaaaaaaaaaaaaaaaaaaaaaaaa edffffffffffffffff to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "12/05/1999",
            },
          ],
          skill: ["NODEJS", "MongoDB", "Quasar", "WordPress", "CAN"],
          interest: ['Foot', 'cerveau lent', 'bricolage', 'Pillier de comptoir'],
          certificate: [
            { id: 1, school: 'Arinfo', title: 'Developpeur web et web mobile', year: 2021, validate: 1 },
            { id: 2, school: 'Lycée Estournelle de constant', title: 'BTS électronique', year: 2022, validate: 1 },
            { id: 3, school: 'Arinfo', title: "Concepteur développeur d'application", year: 2023, validate: 0 },],
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      },
      {
        user_id: 2,
        name: "wilou",
        lastName: "polo",
        mail: "ess@gmail.fr",
        phone: "02 32 32 32 45",
        address: "rue de zaza",
        zipCode: "92300",
        town: "Allonnes",
        statut: "non retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
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
      },
      {
        user_id: 5,
        name: "tassin",
        lastName: "jean",
        mail: "jean.tassin@orange.fr",
        phone: "02 32 32 32 45",
        address: "rue de bidule",
        zipCode: "72400",
        town: "Allonnes",
        statut: "retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
          ],
          skill: ["HTML", "CSS", "VUEJS", "REACTJS", "FAIRE LE CAFE"],
          interest: ['Planche à voile', 'cerveau lent', 'Foot', 'Pillier de comptoir'],
          certificate: [
            { id: 1, school: 'Arinfo', title: 'Developpeur web et web mobile', year: 2021, validate: 1 },
            { id: 2, school: 'Lycée Estournelle de constant', title: 'BTS électronique', year: 2022, validate: 1 },
            { id: 3, school: 'Arinfo', title: "Concepteur développeur d'application", year: 2023, validate: 0 }
          ],
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      }
    ]
  },
  {
    offer_id: 2,
    title: "Cuisinier",
    type: "CDD",
    period: 12,
    description: "ddsvdvsdvsdvsd fzefzefzefze  zefzefzef sdvsv sdvsvs",
    profil: "vverveververv evrvever reerer erverererere ",
    nameEmployor: "arinfo",
    dateOfferDays: "2",
    badgeEmployor: true,
    image: imageEmployer,
    profilCandidate: [
      {
        user_id: 3,
        name: "tassin",
        lastName: "jean",
        mail: "jean.tassin@orange.fr",
        phone: "02 32 32 32 45",
        address: "rue de bidule",
        zipCode: "72400",
        town: "Allonnes",
        statut: "retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
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
      },
      {
        user_id: 4,
        name: "tassin",
        lastName: "jean",
        mail: "jean.tassin@orange.fr",
        phone: "02 32 32 32 45",
        address: "rue de bidule",
        zipCode: "72400",
        town: "Allonnes",
        statut: "retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
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
      },
      {
        user_id: 3,
        name: "tassin",
        lastName: "jean",
        mail: "jean.tassin@orange.fr",
        phone: "02 32 32 32 45",
        address: "rue de bidule",
        zipCode: "72400",
        town: "Allonnes",
        statut: "retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
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
      },
    ],
  },
  {
    offer_id: 3,
    title: "developpeur web",
    type: "CDI",
    period: "",
    description: "ddsvdvsdvsdvsd fzefzefzefze  zefzefzef sdvsv sdvsvs",
    profil: "vverveververv evrvever reerer erverererere ",
    nameEmployor: "arinfo",
    dateOfferDays: "30",
    badgeEmployor: true,
    image: imageEmployer,
    profilCandidate: [
      {
        user_id: 1,
        name: "tassin",
        lastName: "jean",
        mail: "jean.tassin@orange.fr",
        phone: "02 32 32 32 45",
        address: "rue de bidule",
        zipCode: "72400",
        town: "Allonnes",
        statut: "non retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "ST elec",
              job: "CDI",
              dateStart: "30/01/2016",
              description:
                "zdzdzdzdzd ezfzefzefzefzef efzefzefzefefzefzefzefezfzef but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2218",
            },
            {
              compagny: "SAgem",
              job: "Qualité",
              dateStart: "12/05/1996",
              description:
                "csdcsdcsdc dvsdvaaaaaaaaaaaaaaaaaaaaaaaa edffffffffffffffff to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "12/05/1999",
            },
          ],
          skill: ["NODEJS", "MongoDB", "Quasar", "WordPress", "CAN"],
          interest: ['Foot', 'cerveau lent', 'bricolage', 'Pillier de comptoir'],
          certificate: [
            { id: 1, school: 'Arinfo', title: 'Developpeur web et web mobile', year: 2021, validate: 1 },
            { id: 2, school: 'Lycée Estournelle de constant', title: 'BTS électronique', year: 2022, validate: 1 },
            { id: 3, school: 'Arinfo', title: "Concepteur développeur d'application", year: 2023, validate: 0 },],
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      },
      {
        user_id: 2,
        name: "wilou",
        lastName: "polo",
        mail: "ess@gmail.fr",
        phone: "02 32 32 32 45",
        address: "rue de zaza",
        zipCode: "92300",
        town: "Allonnes",
        statut: "non retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
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
      },
      {
        user_id: 5,
        name: "tassin",
        lastName: "jean",
        mail: "jean.tassin@orange.fr",
        phone: "02 32 32 32 45",
        address: "rue de bidule",
        zipCode: "72400",
        town: "Allonnes",
        statut: "retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
          ],
          skill: ["HTML", "CSS", "VUEJS", "REACTJS", "FAIRE LE CAFE"],
          interest: ['Planche à voile', 'cerveau lent', 'Foot', 'Pillier de comptoir'],
          certificate: [
            { id: 1, school: 'Arinfo', title: 'Developpeur web et web mobile', year: 2021, validate: 1 },
            { id: 2, school: 'Lycée Estournelle de constant', title: 'BTS électronique', year: 2022, validate: 1 },
            { id: 3, school: 'Arinfo', title: "Concepteur développeur d'application", year: 2023, validate: 0 }
          ],
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      }
    ]
  },
  {
    offer_id: 4,
    title: "developpeur web",
    type: "CDI",
    period: "",
    description: "ddsvdvsdvsdvsd fzefzefzefze  zefzefzef sdvsv sdvsvs",
    profil: "vverveververv evrvever reerer erverererere ",
    nameEmployor: "arinfo",
    dateOfferDays: "50",
    badgeEmployor: true,
    image: imageEmployer,
    profilCandidate: [
      {
        user_id: 1,
        name: "tassin",
        lastName: "jean",
        mail: "jean.tassin@orange.fr",
        phone: "02 32 32 32 45",
        address: "rue de bidule",
        zipCode: "72400",
        town: "Allonnes",
        statut: "non retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "ST elec",
              job: "CDI",
              dateStart: "30/01/2016",
              description:
                "zdzdzdzdzd ezfzefzefzefzef efzefzefzefefzefzefzefezfzef but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2218",
            },
            {
              compagny: "SAgem",
              job: "Qualité",
              dateStart: "12/05/1996",
              description:
                "csdcsdcsdc dvsdvaaaaaaaaaaaaaaaaaaaaaaaa edffffffffffffffff to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "12/05/1999",
            },
          ],
          skill: ["NODEJS", "MongoDB", "Quasar", "WordPress", "CAN"],
          interest: ['Foot', 'cerveau lent', 'bricolage', 'Pillier de comptoir'],
          certificate: [
            { id: 1, school: 'Arinfo', title: 'Developpeur web et web mobile', year: 2021, validate: 1 },
            { id: 2, school: 'Lycée Estournelle de constant', title: 'BTS électronique', year: 2022, validate: 1 },
            { id: 3, school: 'Arinfo', title: "Concepteur développeur d'application", year: 2023, validate: 0 },],
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      },
      {
        user_id: 2,
        name: "wilou",
        lastName: "polo",
        mail: "ess@gmail.fr",
        phone: "02 32 32 32 45",
        address: "rue de zaza",
        zipCode: "92300",
        town: "Allonnes",
        statut: "non retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
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
      },
      {
        user_id: 5,
        name: "tassin",
        lastName: "jean",
        mail: "jean.tassin@orange.fr",
        phone: "02 32 32 32 45",
        address: "rue de bidule",
        zipCode: "72400",
        town: "Allonnes",
        statut: "retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
          ],
          skill: ["HTML", "CSS", "VUEJS", "REACTJS", "FAIRE LE CAFE"],
          interest: ['Planche à voile', 'cerveau lent', 'Foot', 'Pillier de comptoir'],
          certificate: [
            { id: 1, school: 'Arinfo', title: 'Developpeur web et web mobile', year: 2021, validate: 1 },
            { id: 2, school: 'Lycée Estournelle de constant', title: 'BTS électronique', year: 2022, validate: 1 },
            { id: 3, school: 'Arinfo', title: "Concepteur développeur d'application", year: 2023, validate: 0 }
          ],
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      }
    ]
  },
  {
    offer_id: 5,
    title: "developpeur web",
    type: "CDI",
    period: "",
    description: "ddsvdvsdvsdvsd fzefzefzefze  zefzefzef sdvsv sdvsvs",
    profil: "vverveververv evrvever reerer erverererere ",
    dateOfferDays: "2",
    nameEmployor: "arinfo",
    badgeEmployor: true,
    image: imageEmployer,
    profilCandidate: [
      {
        user_id: 1,
        name: "tassin",
        lastName: "jean",
        mail: "jean.tassin@orange.fr",
        phone: "02 32 32 32 45",
        address: "rue de bidule",
        zipCode: "72400",
        town: "Allonnes",
        statut: "non retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "ST elec",
              job: "CDI",
              dateStart: "30/01/2016",
              description:
                "zdzdzdzdzd ezfzefzefzefzef efzefzefzefefzefzefzefezfzef but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2218",
            },
            {
              compagny: "SAgem",
              job: "Qualité",
              dateStart: "12/05/1996",
              description:
                "csdcsdcsdc dvsdvaaaaaaaaaaaaaaaaaaaaaaaa edffffffffffffffff to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "12/05/1999",
            },
          ],
          skill: ["NODEJS", "MongoDB", "Quasar", "WordPress", "CAN"],
          interest: ['Foot', 'cerveau lent', 'bricolage', 'Pillier de comptoir'],
          certificate: [
            { id: 1, school: 'Arinfo', title: 'Developpeur web et web mobile', year: 2021, validate: 1 },
            { id: 2, school: 'Lycée Estournelle de constant', title: 'BTS électronique', year: 2022, validate: 1 },
            { id: 3, school: 'Arinfo', title: "Concepteur développeur d'application", year: 2023, validate: 0 },],
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      },
      {
        user_id: 2,
        name: "wilou",
        lastName: "polo",
        mail: "ess@gmail.fr",
        phone: "02 32 32 32 45",
        address: "rue de zaza",
        zipCode: "92300",
        town: "Allonnes",
        statut: "non retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
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
      },
      {
        user_id: 5,
        name: "tassin",
        lastName: "jean",
        mail: "jean.tassin@orange.fr",
        phone: "02 32 32 32 45",
        address: "rue de bidule",
        zipCode: "72400",
        town: "Allonnes",
        statut: "retenu",
        cvCandidat: {
          experience: [
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
            {
              compagny: "Arinfo",
              job: "stagière",
              dateStart: "30/011/2021",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.hy do we use it.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik",
              dateEnd: "30/04/2022",
            },
          ],
          skill: ["HTML", "CSS", "VUEJS", "REACTJS", "FAIRE LE CAFE"],
          interest: ['Planche à voile', 'cerveau lent', 'Foot', 'Pillier de comptoir'],
          certificate: [
            { id: 1, school: 'Arinfo', title: 'Developpeur web et web mobile', year: 2021, validate: 1 },
            { id: 2, school: 'Lycée Estournelle de constant', title: 'BTS électronique', year: 2022, validate: 1 },
            { id: 3, school: 'Arinfo', title: "Concepteur développeur d'application", year: 2023, validate: 0 }
          ],
          document: [
            { name: "cv", url: pdf1 },
            { name: "lettre motivation", url: pdf2 },
          ],
        },
      }
    ]
  },
];

// const offers = []

/*
 * Actions
 * ******* */

// Get Api siret employer
export const getApiSiret = (siretNumber) => {
  return (dispatch) => {
    return apiSiret
      .get(siretNumber)
      .then((res) => {
        // console.log("resApi action store", res.data.etablissement);
        dispatch({ type: GET_API_SIRET, payload: res.data.etablissement });
      })
      .catch((err) => console.log(err));
  };
};

// get profil employer
export const getProfilEmployer = () => {
  console.log("getProfilEmployer action store ");
  return (dispatch) => {
    return api
      .get(`/employer/profil/${ id }`)
      .then((res) => {
        console.log("return api getProfilEmployer action store", res.data);
        dispatch({ type: GET_PROFIL_EMPLOYER, payload: res.data});
      })
      .catch((err) => console.log(err));
  };
};

// Post profil employer
export const postFormProfilEmployer = (data) => {
  return (dispatch) => {
    // console.log("POST_PROFIL_EMPLOYER action", data);
    dispatch({ type: POST_PROFIL_EMPLOYER, payload: data });
  };
};

// Put profil employer
export const putFormProfilEmployer = (data) => {
  return (dispatch) => {
    // console.log("PUT_PROFIL_EMPLOYER action", data);
    dispatch({ type: PUT_PROFIL_EMPLOYER, payload: data });
  };
};

export const getProfilUser = () => {
  return (dispatch) => {
    // console.log("GET_PROFIL_USER action");
    dispatch({ type: GET_PROFIL_USER, payload: dataDefaultID });
  };
};
// Put profil User
export const putFormProfilUser = (data) => {
  return (dispatch) => {
    // console.log("PUT_PROFIL_USER action", data);
    dispatch({ type: PUT_PROFIL_USER, payload: data });
  };
};

// Put profil User password
export const putFormProfilUserPw = (data) => {
  return (dispatch) => {
    // console.log("PUT_PROFIL_USER PW action", data);
    dispatch({ type: PUT_PROFIL_USER_PW, payload: data });
  };
};

// get offer
export const getOffer = () => {
  return (dispatch) => {
    // console.log("GET_OFFER action", offers)
    dispatch({ type: GET_OFFER, payload: offers });
  };
};

// Post add offer
export const postFormAddOffer = (data) => {
  return (dispatch) => {
    // console.log("POST_OFFER action", data, message);
    dispatch({ type: POST_OFFER, payload: { data, message } });
  };
};

//  Delete offer
export const deleteOffer = (id) => {
  return (dispatch) => {
    console.log("DELETE_OFFER action", id);
    // dispatch({ type: DELETE_OFFER, payload: {data, messagePostCandidate}});
  };
};

//  Action candidate
export const putActionCandidate = (data) => {
  return (dispatch) => {
    // console.log("PUT_ACTION_CANDIDATE", data);
    dispatch({ type: PUT_ACTION_CANDIDATE, payload: { data, messagePostCandidate } });
  };
};

// Post message candidate
export const postMessageCandidate = (data) => {
  return (dispatch) => {
    // console.log("POST_MESSAGE_CANDIDATE action", data, messagePostCandidate);
    dispatch({ type: POST_MESSAGE_CANDIDATE, payload: { data, messagePostCandidate } });
  };
};
