import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { themeEmployer } from "configs/theme";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import RowTableCandidateOffer from "./RowTableCandidateOffer";
import ModalConfimation from "components/ModalConfimation";
import { useNavigate } from "react-router-dom";

export default function CardTableOffer(props) {
  const { offer, dataProfilUser } = props;
  const navigate = useNavigate();

  //constante pour le modal contact
  const [openModalConfirmation, setOpenModalConfirmation] = useState(false);
  const handleClickOpenModalConfirmation = () => {
    setOpenModalConfirmation(true);
  };
  const handleCloseModalConfirmation = () => {
    setOpenModalConfirmation(false);
  };

  // console.log("offer", offer)

  return (
    <Box
      borderRadius={3}
      paddingTop={3}
      paddingBottom={3}
      marginBottom={3}
      bgcolor={themeEmployer.palette.bgBox.main}
    >
      <Typography textAlign={"center"} marginBottom={2} variant="h6">
        <Button
          sx={{ fontWeight: "bold", fontSize: "18px" }}
          variant="string"
          onClick={(e) =>
            navigate("/Employer/offer/" + offer.offer_id, {
              state: { offer: offer },
            })
          }
        >
          Offres n°{offer.offer_id} - {offer.title}
        </Button>
      </Typography>

      <Box
        paddingX={2}
        display={"flex"}
        sx={{ justifyContent: { xs: "center", sm: "end" } }}
      >
        {/* bouton offree id */}
        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: "#5501FF",
            opacity: "60%",
            color: "white",
            m: 1,
            fontSize: { xs: "65%", sm: "100%" },
          }}
          startIcon={
            <VisibilityIcon sx={{ display: { xs: "none", sm: "block" } }} />
          }
          onClick={(e) =>
            navigate("/Employer/offer/" + offer.offer_id, {
              state: { offer: offer },
            })
          }
        >
          Voir l'offre
        </Button>

        {/* bouton offree id */}
        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: "#5501FF",
            opacity: "60%",
            color: "white",
            m: 1,
            fontSize: { xs: "65%", sm: "100%" },
          }}
          startIcon={
            <DeleteIcon sx={{ display: { xs: "none", sm: "block" } }} />
          }
          onClick={handleClickOpenModalConfirmation}
        >
          Supprimer l'offre
        </Button>

        <ModalConfimation
          keepMounted
          open={openModalConfirmation}
          onClose={handleCloseModalConfirmation}
          titleModal="Suppression d'une offre"
          textModal="Êtes-vous sûr de vouloir supprimer cet offre ?"
          colorBgModal="#ABC4FF"
          colorTextModal="#000000"
          action="deleteOffer"
          param={offer.offer_id}
        />
      </Box>

      <Box paddingX={2} paddingTop={1}>
        <TableContainer sx={{ borderRadius: 2 }}>
          <Table aria-label="collapsible table">
            <TableHead sx={{ bgcolor: "#FF7F50" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }} align="center">
                  Nb de candidat
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  Nom
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  Prénom
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  Email
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  Telephone
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  Statut
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  Plus
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {console.log(offer.profilCandidate)} */}
              {offer &&
                offer.profilCandidate.map((row, index) => (
                  // console.log("row",row)
                  <RowTableCandidateOffer
                    key={index}
                    numberCandidat={index}
                    row={row}
                    offer={offer}
                    dataProfilUser={dataProfilUser}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
