import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Adresse,Téléphone,Mail) {
  return { Adresse,Téléphone,Mail};
}

const rows = [
  createData('10 rue du Skew 72000 Le Mans', '06 00 00 00 00','skew@skew.fr',)
];

export default function DenseTable() {
  return (
    <TableContainer sx={{display:"flex" , justifyContent:"center"}} component={Paper}>
      <Table sx={{ width:"75%" }} size="small" aria-label="a dense table">
        <TableHead sx={{bgcolor:"#FF7F50"}}>
          <TableRow>
            <TableCell>Adresse postal</TableCell>
            <TableCell >Téléphone</TableCell>
            <TableCell>Mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Adresse}
              </TableCell>
              <TableCell >{row.Téléphone}</TableCell>
              <TableCell >{row.Mail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}