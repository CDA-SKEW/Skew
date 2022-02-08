import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { themeUser } from "configs/theme";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import RowTableCandidateOffer from "./RowTableCandidateOffer";


export default function CardTableOffer(props) {
  const { offer } = props

  // console.log("offer", offer)

  return (
    <Box
      borderRadius={3}
      paddingTop={3}
      paddingBottom={3}
      marginBottom={3}
      bgcolor={themeUser.palette.text.primary}

    // bgcolor: themeUser.palette.text.primary,
    >
      <Typography textAlign={"center"} marginBottom={2} variant="h5">
        Offres n°{offer.number} - {offer.title}
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
        >
          Supprimer l'offre
        </Button>
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
                  <RowTableCandidateOffer key={index} numberCandidat={index} row={row} offer={offer}/>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}
