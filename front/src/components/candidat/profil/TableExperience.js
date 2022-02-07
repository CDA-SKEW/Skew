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
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Grid from '@mui/material/Grid';


export default function TableExperience(props) {
  const { ListExp,
    dataProfilCandidate
  } = props
  const [edit, setEdit] = React.useState(false);


  // Declaration des constantes pour le formulaire

  const [company, setCompany] = useState("");
  const [post, setPost] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");


  const setUseState = () => {

    setCompany(ListExp.company);
    setPost(ListExp.post);
    setStart(ListExp.start);
    setEnd(ListExp.end);


  };
  useEffect(() => {
    // console.log("effect for useState form employer");
    setUseState();
  }, [dataProfilCandidate]);


  function ModeText() {
    return (
      <TableBody>

        {ListExp.map((exp, index) => (
          <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

            <TableCell component="th" scope="row" sx={{ display: "none" }}>{index}</TableCell>
            <TableCell align='center'>{exp.company}</TableCell>
            <TableCell align='center'>{exp.post}</TableCell>
            <TableCell align='center' sx={{ minWidth: { xs: '500px', sm: '500px' } }}>{exp.desc}</TableCell>
            <TableCell align='center'>{exp.start}</TableCell>
            <TableCell align='center'>{exp.end}</TableCell>
            {BtnDelete()}
          </TableRow>
        ))}
      </TableBody>

    );
  }
  function ModeEdit() {
    return (
      <TableBody>
        {ListExp.map((exp) => (
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='center' >
              <TextField
                fullWidth
                required
                size="small"
                id="outlined-required"
                label="Comp"
                defaultValue={exp.company}
              />
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Post"
                defaultValue={exp.post}
              />
            </TableCell>
            <TableCell align='center' >
              {/* <TextField
                required
                size="small"
                id="outlined-required"
                label="Post"
                defaultValue={exp.post}
              /> */}
            </TableCell>
            <TableCell align='center' >
              <TextField
                fullWidth
                multiline
                maxRows={4}
                ma
                required
                size="small"
                id="outlined-required"
                label="Description"
                defaultValue={exp.desc}
              />
            </TableCell>
            <TableCell align='center' >
              <BasicDatePicker />
              <BasicDatePicker />
            </TableCell>
            <TableCell align='center' >
              {/* <BasicDatePicker /> */}
            </TableCell>

            <TableCell align='center' sx={{ display: 'flex', flexDirection: 'column' }}>
              <Button sx={{ bgcolor: "green", color: "white", m: 2 }} >
                VALID
              </Button>
              <Button sx={{ bgcolor: "red", color: "white", m: 2 }}>
                ANNULER
              </Button>
            </TableCell>
          </TableRow>
        ))}

      </TableBody>
    );
  };
  function BasicDatePicker() {
    const [value, setValue] = React.useState(null);

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label=""
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  }

  const checkEdit = () => {
    if (edit === true) return [<ModeText />, <ModeEdit />]
    else return <ModeText />;
  }
  // Constante pour check si le mode edit est actif afficher la colonne action
  const checkViewAction = () => {
    if (edit === true) return <TableCell align='center' >Actions </TableCell>
    else return;
  }
  const BtnDelete = () => {
    if (edit === true) return <Button sx={{ bgcolor: "red", color: "white", m: 2 }} >
      DELETE
    </Button>
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
          Experience
        </Typography>
      </Box>

      <TableContainer sx={{ px: "50px" }} component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableHead sx={{ bgcolor: "#FF7F50" }}>
            <TableRow>
              <TableCell align='center'>Company</TableCell>
              <TableCell align='center' >Job</TableCell>
              <TableCell align='center'>Description</TableCell>
              <TableCell align='center'>Start-Year</TableCell>
              <TableCell align='center'>End-Year</TableCell>
              {checkViewAction()}

            </TableRow>
          </TableHead>

          {checkEdit()}

        </Table>

      </TableContainer>
    </Box>
  );
}