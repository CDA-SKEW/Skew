import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { postFormDocument } from "store/actions/CandidateActions";
import jwt_decode from 'jwt-decode'

const columns = [
  { field: 'id', headerName: 'ID', width: 250 },
  { field: 'title', headerName: 'Name', width: 250 }
];


export default function DataTable(props) {
  const { listCv } = props
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
    console.log("token id ", id)
    // const id_document = { id_document }

    const formData = new FormData();
    formData.append('user_id', id);
    // formData.append('id_document', id_document)
    formData.append('title', document.name);
    formData.append('document', document);
    console.log('formData', formData);

    await dispatch(postFormDocument(formData));

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
        <DataGrid rows={listCv} columns={columns} checkboxSelection />
      </Box>
    </Box >

  );
}
