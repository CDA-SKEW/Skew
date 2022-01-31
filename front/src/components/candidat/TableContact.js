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



function createData(key, Adresse, Téléphone, Mail) {
  return { key, Adresse, Téléphone, Mail };
}

const rows = [
  createData('', '10 rue du Skew 72000 Le Mans', '06 00 00 00 00', 'skew@skew.fr',)

];

export default function TableContact() {
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
            {rows.map((row, index) => (
              <TableRow
                key={index}

                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ display: "none" }}>{index}</TableCell>
                <TableCell >{row.Adresse}</TableCell>
                <TableCell >{row.Téléphone}</TableCell>
                <TableCell >{row.Mail}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Box>

  );
}


