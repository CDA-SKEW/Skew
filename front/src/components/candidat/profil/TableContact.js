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
import { Column } from "devextreme-react/data-grid";
import { Mode } from "@mui/icons-material";



export default function TableContact(props) {
  const { ListUser,
    dataProfilCandidate
  } = props
  const [edit, setEdit] = React.useState(false);


  // Declaration des constantes pour le formulaire

  const [address, setAdress] = useState("");
  const [codeZip, setCodeZip] = useState("");
  const [town, setTown] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");



  const setUseState = () => {

    setAdress(ListUser.address);
    setCodeZip(ListUser.zipCode);
    setTown(ListUser.town);
    setPhone(ListUser.phone);
    setMail(ListUser.mail)
  };
  useEffect(() => {
    // console.log("effect for useState form employer");
    setUseState();
  }, [dataProfilCandidate]);


  function ModeText() {
    return (
      <TableBody>
        {ListUser.map((ListUser, index) => (
          <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row" sx={{ display: "none" }}>{index}</TableCell>
            <TableCell >{ListUser.address}<br />{ListUser.zipCode}<br />{ListUser.town}</TableCell>
            <TableCell>{ListUser.phone}</TableCell>
            <TableCell>{ListUser.mail}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  }
  function ModeEdit() {
    return (

      <Stack direction="row" spacing={2} marginTop={2}>
        <TableBody>
          <TableRow>
            <Stack direction="column" spacing={2} >
              <TableCell>

                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="address"
                  defaultValue={ModeText(ListUser)}
                />
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="zipCode"
                  defaultValue={codeZip}
                />
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Town"
                  defaultValue={town}
                />
              </TableCell>
            </Stack>

            <TableCell>

              <TextField
                required
                size="small"
                id="outlined-required"
                label="phone"
                defaultValue={phone}
              />
            </TableCell>
            <TableCell>

              <TextField
                required
                size="small"
                id="outlined-required"
                label="mail"
                defaultValue={mail}
              />
            </TableCell>
          </TableRow>
        </TableBody>
        <Box direction="column">
          <Button >
            VALID
          </Button>
          <Button >
            ANNULER
          </Button>
        </Box>
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
      {/* Titre section Formation */}
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
              <TableCell>Address</TableCell>
              <TableCell >Phone</TableCell>
              <TableCell>Mail</TableCell>
            </TableRow>
          </TableHead>
          {checkEdit()}
        </Table>
      </TableContainer>
    </Box>
  );
}