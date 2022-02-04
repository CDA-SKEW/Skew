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
            <TableCell>{exp.company}</TableCell>
            <TableCell>{exp.post}</TableCell>
            <TableCell>{exp.start}</TableCell>
            <TableCell>{exp.end}</TableCell>
          </TableRow>
        ))}
      </TableBody>

    );
  }
  function ModeEdit() {
    return (
      <Stack direction="row" spacing={2} marginTop={2}>
        <TextField
          required
          size="small"
          id="outlined-required"
          label="address"
          defaultValue={company}
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="zipCode"
          defaultValue={post}
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Town"
          defaultValue={start}
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="phone"
          defaultValue={end}
        />
        <Button >
          VALID
        </Button>
        <Button >
          ANNULER
        </Button>
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
          Experience
        </Typography>
      </Box>

      <TableContainer sx={{ display: "flex", justifyContent: "center" }} component={Paper}>
        <Table sx={{ width: "75%" }} size="small" aria-label="a dense table">
          <TableHead sx={{ bgcolor: "#FF7F50" }}>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell >Job</TableCell>
              <TableCell>Start-Year</TableCell>
              <TableCell>End-Year</TableCell>
            </TableRow>
          </TableHead>
          {checkEdit()}
        </Table>
      </TableContainer>
    </Box>
  );
}