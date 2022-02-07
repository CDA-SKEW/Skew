import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BorderColorIcon from '@mui/icons-material/BorderColor';




export default function TableContact(props) {
  const { ListUser,
    dataProfilCandidate
  } = props
  const [edit, setEdit] = React.useState(false);


  // Declaration des constantes pour le formulaire

  const [address, setAdress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [town, setTown] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");



  const setUseState = () => {

    setAdress(ListUser.address);
    setZipCode(ListUser.zipCode);
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

            <TableCell align='center' component="th" scope="row" sx={{ display: "none" }}>{index}</TableCell>
            <TableCell align='center' >{ListUser.address}<br />{ListUser.zipCode}<br />{ListUser.town}</TableCell>
            <TableCell align='center' >{ListUser.phone}</TableCell>
            <TableCell align='center' >{ListUser.mail}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };



  function ModeEdit() {
    return (
      <TableBody>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell align='center' sx={{ display: 'flex', flexDirection: 'column' }} >
            <TextField
              required
              size="small"
              id="outlined-required"
              label="address"
              defaultValue={ListUser[0].address}
            />
            <TextField
              required
              size="small"
              id="outlined-required"
              label="zipCode"
              defaultValue={ListUser[0].zipCode}
            />
            <TextField
              required
              size="small"
              id="outlined-required"
              label="Town"
              defaultValue={ListUser[0].town}
            />
          </TableCell>
          <TableCell align='center' >
            <TextField
              required
              size="small"
              id="outlined-required"
              label="phone"
              defaultValue={ListUser[0].phone}
            />
          </TableCell>
          <TableCell align='center' >
            <TextField
              required
              size="small"
              id="outlined-required"
              label="mail"
              defaultValue={ListUser[0].mail}
            />
          </TableCell>
          <TableCell align='center' scope="column" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Button sx={{ bgcolor: "green", color: "white", m: 2 }} >
              VALID
            </Button>
            <Button sx={{ bgcolor: "red", color: "white", }}>
              ANNULER
            </Button>
          </TableCell>

        </TableRow>


      </TableBody>
    )

  };

  //     Constante pour check si le mode edit est actif 
  const checkEdit = () => {
    if (edit === true) return [<ModeText />, <ModeEdit />]
    else return <ModeText />;
  }
  // Constante pour check si le mode edit est actif afficher la colonne action
  const checkViewAction = () => {
    if (edit === true) return <TableCell align='center' >Actions</TableCell>
    else return;
  }

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
          <BorderColorIcon />
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

      <TableContainer sx={{ px: "50px" }} component={Paper}>
        <Table sx={{ width: "100%" }} >
          <TableHead sx={{ bgcolor: "#FF7F50" }}>
            <TableRow>
              <TableCell align='center'>Address</TableCell>
              <TableCell align='center' >Phone</TableCell>
              <TableCell align='center' >Mail</TableCell>
              {checkViewAction()}

            </TableRow>
          </TableHead>
          {checkEdit()}

        </Table>

        {/* <SimpleAccordion /> */}
      </TableContainer>
    </Box>
  );
}