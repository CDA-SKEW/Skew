import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';





export default function TableContact(props) {
  const { ListUser } = props
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


          <TableBody>

            <TableRow


              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell >
                <TextField id="outlined-basic" label="Adress" variant="outlined" />
                <TextField id="outlined-basic" label="ZIP" variant="outlined" />
                <TextField id="outlined-basic" label="City" variant="outlined" /></TableCell>
              <TableCell ><TextField id="outlined-basic" label="Phone" variant="outlined" /></TableCell>
              <TableCell ><TextField id="outlined-basic" label="Mail" variant="outlined" /></TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>

    </Box>

  );
}


