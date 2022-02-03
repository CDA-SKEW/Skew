import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";





export default function TableContact(props) {
  const { ListUser } = props
  const [edit, setEdit] = React.useState(false);
  const data = {
    address: "",
    phone: "",
    mail: "",
  };

  function ModeText(props) {
    return (
      <TableBody>
      {ListUser.map((user, index) => (
        <TableRow
          key={index}

          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row" sx={{ display: "none" }}>{index}</TableCell>
          <TableCell  >{user.address}<br />{user.zipCode}<br />{user.town}</TableCell>
          <TableCell >{user.phone}</TableCell>
          <TableCell >{user.mail}</TableCell>
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
          label="address"
          defaultValue={data.address}
        />
        <TextField
          required
          id="outlined-required"
          label="phone"
          defaultValue={data.phone}
        />
        <TextField
          required
          id="outlined-required"
          label="mail"
          defaultValue={data.mail}
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
         {/* <ModeText/> */}
         {checkEdit()}
        </Table>
      </TableContainer>
      <Button onClick={(e) => setEdit(edit === true ? false : true)}>
        Edit
      </Button>

      {/* <p> {edit}</p> */}

      


    </Box>

  );
}


