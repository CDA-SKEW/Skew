import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography,Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";


export default function TableExperience(props) {
  const { ListExp } = props
  const [edit, setEdit] = React.useState(false);
  const data = {
    company: "",
    post: "",
    start: "",
    end:"",
  };
  function ModeText(props) {
    return (
      <TableBody>
            {ListExp.map((exp, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ display: "none" }}>{index}</TableCell>
                <TableCell >{exp.company}</TableCell>
                <TableCell >{exp.post}</TableCell>
                <TableCell >{exp.start}</TableCell>
                <TableCell >{exp.end}</TableCell>
              </TableRow>
            ))}
          </TableBody>
     
      
    );
  }
  function ModeEdit(props) {
    return (
      <Stack direction="row" spacing={2}>
        <TextField
          required
          id="outlined-required"
          label="compagny"
          defaultValue={data.company}
        />
        <TextField
          required
          id="outlined-required"
          label="phone"
          defaultValue={data.post}
        />
        <TextField
          required
          id="outlined-required"
          label="mail"
          defaultValue={data.start}
        />
        <TextField
          required
          id="outlined-required"
          label="mail"
          defaultValue={data.end}
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
      {/* Titre section Expériences */}
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
          Expériences
        </Typography>
      </Box>
      <TableContainer sx={{ display: "flex", justifyContent: "center" }} component={Paper}>
        <Table sx={{ width: "75%" }} size="small" aria-label="a dense table">
          <TableHead sx={{ bgcolor: "#FF7F50" }}>
            <TableRow>
              <TableCell sx={{ display: "none" }}>key</TableCell>
              <TableCell>Entreprise</TableCell>
              <TableCell >Poste</TableCell>
              <TableCell>Date de Début</TableCell>
              <TableCell>Date de Fin</TableCell>
            </TableRow>
          </TableHead>
          {checkEdit()}
        </Table>
      </TableContainer>
      <Button onClick={(e) => setEdit(edit === true ? false : true)}>
        Edit
      </Button>


    </Box>

  );
}


