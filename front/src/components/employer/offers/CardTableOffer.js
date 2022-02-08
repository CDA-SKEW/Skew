import { Button, Collapse, Divider, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { themeUser } from "configs/theme";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";



function Row(props) {
  // console.log(props)
  const { numberCandidat, row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="center">{numberCandidat + 1}</TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.lastName}</TableCell>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.tel}</TableCell>
        <TableCell align="center">{row.statut}</TableCell>
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <KeyboardArrowUpIcon sx={{ bgcolor: "#DCDCDC" }} />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                border={1}
                marginBottom={2}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { sm: "flex-start", md: "center" },
                  }}
                >
                  <Typography>Adresse: </Typography>
                  <Typography paddingLeft={1}>{row.address}</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { sm: "flex-start", md: "center" },
                  }}
                >
                  <Typography>Code Postal: </Typography>
                  <Typography paddingLeft={1}>{row.zipcCode}</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { sm: "flex-start", md: "center" },
                  }}
                >
                  <Typography>Commune: </Typography>
                  <Typography paddingLeft={1}>{row.town}</Typography>
                </Box>
              </Box>

              <Box border={1} marginBottom={2}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" sx={{ fontWeight: "bold" }}>
                        Entreprise
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "bold" }}>
                        Poste
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "bold" }}>
                        Date de début
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "bold" }}>
                        Description
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "bold" }}>
                        Date de fin
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.cvCandidat.experience.map((candidatRow, index) => (
                      <TableRow hover key={index}>
                        <TableCell align="center">
                          {candidatRow.entreprise}
                        </TableCell>
                        <TableCell align="center">{candidatRow.job}</TableCell>
                        <TableCell align="center">
                          {candidatRow.dateStart}
                        </TableCell>
                        <TableCell
                          sx={{ minWidth: { xs: "500px", sm: "500px" } }}
                          align="center"
                        >
                          {candidatRow.descriptif}
                        </TableCell>
                        <TableCell align="center">
                          {candidatRow.dateEnd}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>

              <Box border={1} marginBottom={2}>
                <Typography textAlign={"center"} fontWeight={"bold"}>
                  Skill(s)
                </Typography>
                <Divider sx={{ mx: 2 }} />

                <Box display={"flex"} justifyContent={"space-around"}>
                  {row.skill.map((skilltable, index) => (
                    // console.log(skilltable, index)
                    <Typography padding={1} key={index}>
                      {skilltable}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Box border={1} marginBottom={2}>
                <Typography textAlign={"center"} fontWeight={"bold"}>
                  Document(s)
                </Typography>
                <Divider sx={{ mx: 2 }} />

                <Box display={"flex"} justifyContent={"space-around"}>
                  {row.document.map((doctable, index) => (
                    //   console.log("value",{doctable})
                    <Button
                      key={index}
                      href={doctable.url}
                      target="_blank"
                      rel="noreferrer"
                      sx={{ color: "black" }}
                    >
                      <PictureAsPdfIcon sx={{ pr: 1 }} />
                      {doctable.name}
                    </Button>
                  ))}
                </Box>
              </Box>

              <Box
                paddingX={2}
                display={"flex"}
                sx={{ justifyContent: { xs: "center", sm: "end" } }}
              >
                {/* bouton contactez */}
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    bgcolor: "#E6C3A5",
                    color: "black",
                    m: 1,
                    fontSize: { xs: "65%", sm: "75%", md: "100%" },
                  }}
                  startIcon={
                    <ForwardToInboxIcon
                      sx={{
                        display: { xs: "none", sm: "none", md: "block" },
                      }}
                    />
                  }
                >
                  Contacter
                </Button>

                {/* vor candidat */}
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    bgcolor: "#ABC4FF",
                    color: "black",
                    m: 1,
                    fontSize: { xs: "65%", sm: "75%", md: "100%" },
                  }}
                  startIcon={
                    <VisibilityIcon
                      sx={{
                        display: { xs: "none", sm: "none", md: "block" },
                      }}
                    />
                  }
                >
                  Voir candidat
                </Button>

                {/* non retenu */}
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    bgcolor: "#FF000A",
                    color: "black",
                    m: 1,
                    fontSize: { xs: "65%", sm: "75%", md: "100%" },
                  }}
                  startIcon={
                    <DoDisturbIcon
                      sx={{
                        display: { xs: "none", sm: "none", md: "block" },
                      }}
                    />
                  }
                >
                  Non retenu
                </Button>

                {/* Retenu */}
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    bgcolor: "#16B84E",
                    color: "black",
                    m: 1,
                    fontSize: { xs: "65%", sm: "75%", md: "100%" },
                  }}
                  startIcon={
                    <CheckCircleOutlineIcon
                      sx={{
                        display: { xs: "none", sm: "none", md: "block" },
                      }}
                    />
                  }
                >
                  Retenu
                </Button>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CardTableOffer(props) {
  const { offer } = props

  // console.log("offer", offer)
  
 return (
  <Box
  borderRadius={3}
  paddingTop={2}
  paddingBottom={2}
  marginBottom={2}
  bgcolor={themeUser.palette.text.primary}

  // bgcolor: themeUser.palette.text.primary,
>
  <Typography textAlign={"center"} marginBottom={2} variant="h5">
    Offres n° {offer.number} - {offer.title}
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
                console.log("row",row)
              // <Row key={index} numberCandidat={index} row={row} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
</Box>

 )

}
