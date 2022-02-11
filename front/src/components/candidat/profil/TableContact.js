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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useDispatch } from "react-redux";
import { getProfilCandidate, postFormProfilCandidate } from "store/actions/CandidateActions";



export default function TableContact(props) {

  const { ListUser, dataProfilCandidate } = props

  const dispatch = useDispatch();
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

        {/* {ListUser.map((ListUser, index) => ( */}

        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

          <TableCell align='center' component="th" scope="row" sx={{ display: "none" }}>{ListUser.id}</TableCell>
          <TableCell align='center'  >{ListUser.address}<br />{ListUser.zipCode}<br />{ListUser.town}</TableCell>
          <TableCell align='center'  >{ListUser.phone}</TableCell>
          <TableCell align='center'  >{ListUser.mail}</TableCell>
        </TableRow>
        {/* ))} */}
      </TableBody>
    );
  };



  function ModeEdit() {
    const [form, setForm] = useState({ ...ListUser })

    const handleChange = (prop) => (event) => {
      // console.log('change form', prop, event.target.value)
      setForm({ ...form, [prop]: event.target.value })
      // console.log('end form', form)
    }

    const submitForm = () => {
      // console.log('SUBMIT', form)
      dispatch(postFormProfilCandidate({ ...form }))
      setTimeout(() => dispatch(getProfilCandidate()), 777)
      setEdit(false) // close editMode
    }

    return (
      <TableBody>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell align='center' sx={{ display: 'flex', flexDirection: 'column', minWidth: 200 }} >
            <TextField
              required
              size="small"
              label="address"
              onChange={handleChange('address')}
              id="outlined-adornment-address"
              value={form['address']}
            />
            <TextField
              required
              size="small"
              label="zipCode"
              onChange={handleChange('zipCode')}
              id="outlined-adornment-zipCode"
              value={form['zipCode']}
            />
            <TextField
              required
              size="small"
              label="town"
              onChange={handleChange('town')}
              id="outlined-adornment-town"
              value={form['town']}
            />
          </TableCell >
          <TableCell align='center' sx={{ minWidth: 140 }} >
            <TextField
              required
              size="small"
              label="phone"
              onChange={handleChange('phone')}
              id="outlined-adornment-phone"
              value={form['phone']}
            />
          </TableCell>
          <TableCell align='center' sx={{ minWidth: 200 }} >
            <TextField
              required
              size="small"
              label="mail"
              onChange={handleChange('mail')}
              id="outlined-adornment-mail"
              value={form['mail']}
            />
          </TableCell>
          <TableCell align='center' scope="column" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Button sx={{ color: "green", m: 2 }}
              onClick={() => submitForm()}
            >
              <CheckCircleOutlineIcon />
            </Button>
            <Button sx={{ color: "red", m: 2 }}>
              < KeyboardReturnIcon />
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
      // component="form" onSubmit={(e) => handleSendFormProfil(e)}
      sx={{
        bgcolor: "#FFFFFF",
        height: "auto",
        borderRadius: 1,
        my: 4,
      }}
    >

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}>


        <Button sx={{ m: 2, mr: 6 }} variant="outlined" size="small" onClick={(e) => setEdit(edit === true ? false : true)}>
          Mode Edit
        </Button>
      </Box>
      <TableContainer sx={{ px: "50px" }}>
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


      </TableContainer>
    </Box>
  );
}