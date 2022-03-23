import React, { useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { postFormDocument, deleteFormProfilCandidateDocument, getProfilCandidate } from "store/actions/CandidateActions";
import jwt_decode from 'jwt-decode'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
// ###########################################

export default function DataTable(props) {

  const { listCv } = props
  const dispatch = useDispatch();

  const [document, setDocument] = useState({});


  const handleDocChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    if (file) {
      reader.onloadend = () => {
        setDocument(file);
      };
      reader.readAsDataURL(file);
    }

  };

  const handleSubmitDoc = async (e) => {
    //empeche le formunliare d'etre submiter 
    e.preventDefault();


    const id = jwt_decode(localStorage["user_token"]).id


    const formData = new FormData();
    formData.append('user_id', id);
    formData.append('title', document.name);
    formData.append('document', document);


    await dispatch(postFormDocument(formData));
    await dispatch(getProfilCandidate(id));

  }

  function Row(props) {
    const { row } = props
    const dispatch = useDispatch()
    const handleDelete = () => {
      dispatch(deleteFormProfilCandidateDocument(row.id_document))
      setTimeout(() => dispatch(getProfilCandidate()), 777)
    }

    /*const ActionBtn trigger only if mode edit is true & the btn open the edit row */



    /* *************************************************************************** */


    /* TableBody & the component <CheckModeEdit/> who's open if the btn in the ActionBtn is trigger*/

    return (
      <React.Fragment>
        <TableRow sx={{ "&:last-child td,&:last-child th": { border: 0 } }}>
          <TableCell component="th" scope="row" sx={{ display: "none" }}>0</TableCell>
          <TableCell align='center'>{row.id_document}</TableCell>
          <TableCell align='center'>{row.title}</TableCell>
          <TableCell align='center'>
            <Button sx={{ color: "red", m: 2 }} onClick={() => handleDelete()} >
              <DeleteIcon />
            </Button>
          </TableCell>
        </TableRow>
      </React.Fragment>

    )

  }


  return (
    <Box
      component="form"
      sx={{
        bgcolor: "#FFFFFF",
        height: "auto",
        borderRadius: 1,
        my: 4,
        width: "auto"
      }}
    >
      {/* Titre section CV */}
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
          Mes CV
        </Typography>
      </Box>
      {/* *************************************************************************** */}


      {/* Group of BTN Trigger each ModeEdit & ModeAdd */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",

        }}>


        <Button sx={{ m: 2 }} variant="outlined" size="small" component="label" >
          <Typography>Choisir un document</Typography>
          <TextField
            sx={{ display: "none" }}
            size="small"
            type="file"
            inputProps={{ accept: ".pdf" }}
            onChange={(e) => handleDocChange(e)}
          />
        </Button>
        <Button sx={{ mr: 6 }} variant="outlined" size="small" type="submit"
          onClick={(e) => handleSubmitDoc(e)}>

          Ajouter
        </Button>
      </Box>
      {/* *************************************************************************** */}
      <Box style={{ height: 300, width: '100%' }}>
        <TableContainer sx={{ px: "50px" }} component={Paper}>
          <Table sx={{ width: "100%" }}>
            <TableHead sx={{ bgcolor: "#FF7F50" }}>
              <TableRow>
                <TableCell align='center'>Cv N°</TableCell>
                <TableCell align='center' >Title</TableCell>
                <TableCell align='center' >Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listCv.length > 0 &&
                listCv.map((row, index) => <Row key={index} row={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box >

  );
}


