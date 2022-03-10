import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
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


// const columns = [
//   { field: 'id_document', headerName: 'id-CV', width: 250 },
//   { field: 'title', headerName: 'Title', width: 250 }
// ];



export default function DataTable(props) {

  const { listCv } = props
  // console.log("listCV", listCv);
  const dispatch = useDispatch();

  const [document, setDocument] = useState({});


  const handleDocChange = (e) => {
    // console.log("fct changeImage");
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    if (file) {
      reader.onloadend = () => {
        setDocument(file);
        // console.log("File DOC", file)
        // console.log('doc', document);
      };
      reader.readAsDataURL(file);
    }

  };

  const handleSubmitDoc = async (e) => {
    // console.log("Form waitsend");
    //empeche le formunliare d'etre submiter
    // console.log("e", e)
    e.preventDefault();


    const id = jwt_decode(localStorage["user_token"]).id
    // console.log("token id ", id)
    // const id_document = document.id_document

    const formData = new FormData();
    formData.append('user_id', id);

    formData.append('title', document.name);
    formData.append('document', document);
    // console.log('formData', formData);

    await dispatch(postFormDocument(formData));

  }

  function Row(props) {
    const { row, str } = props
    const dispatch = useDispatch()
    const handleDelete = () => {
      console.log('id Button Trigger ROW', row);
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
      <Box>
        <Button
          variant="contained"
          component="label"
          size="small"
          sx={{ bgcolor: "#2B2E30" }}
        >
          <Typography>Choisir un document</Typography>
          <TextField
            sx={{ display: "none" }}
            size="small"
            type="file"
            inputProps={{ accept: ".pdf" }}
            onChange={(e) => handleDocChange(e)}
          />
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: "#DC143C",
            color: "white",
            m: 1,

          }}
          // startIcon={
          //   <TaskAltIcon
          //     sx={{ display: { xs: "none", sm: "block" } }}
          //   />
          // }
          type="submit"
          onClick={(e) => handleSubmitDoc(e)}
        >
          Ajouter
        </Button>

      </Box>
      <Box style={{ height: 300, width: '100%' }}>
        <TableContainer sx={{ px: "50px" }} component={Paper}>
          <Table sx={{ width: "100%" }}>
            <TableHead sx={{ bgcolor: "#FF7F50" }}>
              <TableRow>
                <TableCell align='center'>Cv N°</TableCell>
                <TableCell align='center' >Title</TableCell>
                <TableCell align='center' >Action</TableCell>
                {/* {checkViewAction()} */}
                {/* {checkViewAction()} = <TableCell align='left'>Action</TableCell>
              but appear only if mode edit is trigger */}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* <CheckModeAdd status={openAdd} /> */}
              {listCv.length > 0 &&
                listCv.map((row, index) => <Row key={index} row={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box >

  );
}


