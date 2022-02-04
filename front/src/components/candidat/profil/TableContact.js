import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';





export default function TableContact(props) {
  const { ListUser,
    dataProfilCandidate } = props
  const [edit, setEdit] = React.useState(false);
  // const data = {

  //   address: ListUser.address,
  //   phone: "truc",
  //   mail: "",
  // };

  // Declaration des constantes pour le formulaire

  const [address, setAddress] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [town, setTown] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const setUseState = () => {

    setAddress(ListUser.address);
    setzipCode(ListUser.zipCode);
    setTown(ListUser.town);
    setPhone(ListUser.phone);
    setMail(ListUser.mail);

  };
  useEffect(() => {
    // console.log("effect for useState form employer");
    setUseState();
  }, [dataProfilCandidate]);


  function ModeText(props) {
    return (
      <TableBody>

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell>{ListUser.address}<br />{ListUser.zipCode}<br />{ListUser.town}</TableCell>
          <TableCell>{ListUser.phone}</TableCell>
          <TableCell>{ListUser.mail}</TableCell>
        </TableRow>

      </TableBody>

    );
  }
  function ModeEdit(props) {
    return (
      <Stack direction="row" spacing={2} marginTop={2}>
        <Stack direction="column" spacing={2}>
          <TextField
            required
            size="small"
            id="outlined-required"
            label="address"
            defaultValue={address}
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="zipCode"
            defaultValue={zipCode}
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Town"
            defaultValue={town}
          />
        </Stack>
        <TextField
          required
          size="small"
          id="outlined-required"
          label="phone"
          defaultValue={phone}
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="mail"
          defaultValue={mail}
        />
      </Stack>
    );
  }
  const checkEdit = () => {
    if (edit === true) return <ModeEdit />;
    else return <ModeText />;
  };
  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        height: "auto",
        borderRadius: 1,
        my: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}>


        <Button onClick={(e) => setEdit(edit === true ? false : true)}>
          <DeleteIcon />
        </Button>
      </Box>
      {/* Titre section Contact */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{
            px: 1,
            bgcolor: "#004F98",
            color: "#FFFFFF",
            borderRadius: 1,
            position: "relative",
            top: -15,
          }}
        >
          Contact
        </Typography>
      </Box>

      <TableContainer sx={{ display: "flex", justifyContent: "center" }} component={Paper}>
        <Table sx={{ width: "75%" }} size="small" aria-label="a dense table">
          <TableHead sx={{ bgcolor: "#FF7F50" }}>
            <TableRow>
              <TableCell>Adresse postal</TableCell>
              <TableCell >Téléphone</TableCell>
              <TableCell>Mail</TableCell>
            </TableRow>
          </TableHead>
          {checkEdit()}
        </Table>
      </TableContainer>
    </Box>
  );
}


