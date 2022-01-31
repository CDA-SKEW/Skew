import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/system";
import { Checkbox, Typography } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';



const rows = [
  { id: 1, Cv: 'Dev-Web' },
  { id: 2, Cv: 'Designer-web' },
  { id: 3, Cv: 'Cuisinier' },


];
const columns = [
  { field: 'id', headerName: 'ID', width: 250 },
  { field: 'Cv', headerName: 'CV', width: 250 }
];

export default function DataTable() {
  return (
    <Box
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

      </Box>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} checkboxSelection />
      </div>
    </Box >

  );
}
