import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'cv', headerName: 'CV', width: 300 },
  { field: 'Nom', headerName: 'Nom', width: 300 },
  { field: 'Intitulé', headerName: 'Intitulé', width: 300 },

  ,
  {
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `
      ${params.getValue(params.id, 'Cv') || ''} 
      ${params.getValue(params.id, 'Nom') || ''}`,
  },
];

const rows = [
  { id: 1, Cv: 'Dev-Web', Nom: 'Cv-1' },
  { id: 2, Cv: 'Designer-web', Nom: 'Cv-2' },
  { id: 3, Cv: 'Cuisinier', Nom: 'Cv-3' },

];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[3]}
        checkboxSelection
      />
    </div>
  );
}