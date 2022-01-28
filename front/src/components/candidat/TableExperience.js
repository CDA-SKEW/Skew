import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Entreprise,Poste,Date_début,Date_fin) {
  return { Entreprise,Poste,Date_début,Date_fin};
}

const rows = [
  createData('Arinfo', 'Développeur','30/02/2021','31/02/2021')
];

export default function DenseTable() {
  return (
    <TableContainer sx={{display:"flex" , justifyContent:"center"}} component={Paper}>
      <Table sx={{ width:"75%" }} size="small" aria-label="a dense table">
        <TableHead sx={{bgcolor:"#FF7F50"}}>
          <TableRow>
            <TableCell>Entreprise</TableCell>
            <TableCell >Poste</TableCell>
            <TableCell>Date de Début</TableCell>
            <TableCell>Date de Fin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Entreprise}
              </TableCell>
              <TableCell >{row.Poste}</TableCell>
              <TableCell >{row.Date_début}</TableCell>
              <TableCell >{row.Date_fin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}