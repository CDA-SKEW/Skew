/*------------MUI Imports-------------*/

import React from "react";
import IconChips from "components/admin/tables/Chips";
import { Typography } from "@mui/material";
import Avatars from "components/admin/tables/Avatars";
import Actions from "components/admin/tables/Actions";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Dates from "components/admin/tables/Dates";
// import Status from "components/admin/tables/Status";
import PeopleIcon from "@mui/icons-material/People";
// import Badges from "../admin/tables/Badges";

/*------------Export function + table header-------------*/

export default function UsersTable(props) {
  const { user } = props;

  // Table Head
  const columns = [
    { field: "id", headerName: "ID", editable: true },
    {
      field: "date",
      headerName: "Dates",
      width: 150,
      renderCell: () => {
        return <Dates />;
      },
      editable: false,
    },
    {
      field: "avatar",
      headerName: "Avatars",
      width: 100,
      renderCell: (cell) => {
        return <Avatars avatar={cell} />;
      },
    },
    {
      field: "name",
      headerName: "Noms",
      editable: true,
      minWidth: 100,
      flex: 1,
    },
    {
      field: "lastname",
      headerName: "Prénoms",
      editable: true,
      minWidth: 100,
      flex: 1,
    },
    {
      field: "fullName",
      headerName: "Nom complet",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      minWidth: 200,
      flex: 1,
      valueGetter: (params) =>
        `${params.row.lastname || ""} ${params.row.name || ""}`,
    },
    {
      field: "mail",
      editable: false,
      minWidth: 200,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (cell) => {
        return <IconChips user={cell} />;
      },
      editable: false,
      minWidth: 200,
      flex: 1,
    },
    {
      field: "checking",
      headerName: "Vérifié",
      renderCell: (id) => {
        return <Actions  columnsVerif={true} id={id} key={id} />;
      },
      editable: false,
      minWidth: 200,
      flex: 1,
    },
    {
      field: "badge",
      headerName: "Certifié",
      renderCell: (id) => {
        return <Actions columnsBadge={true} id={id} key={id} />;
      },
      editable: false,
      minWidth: 200,
      flex: 1,
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (id) => {
        return (
          <Actions
            columnsBan={true}
            columnsDeleteUser={true}
            key={id}
            id={id}
          />
        );
      },
      editable: false,
      minWidth: 200,
      flex: 1,
    },
  ];

  /*--------------Components------------*/

  return (
    <Box sx={{ pb: 5 }}>
      <Typography
        variant="h4"
        color="primary"
        sx={{
          textAlign: "center",
          mb: "50px",
          background: "linear-gradient(to right bottom, #E8FFEF, #C1F8D2)",
          borderRadius: 2,
        }}
      >
        <PeopleIcon /> Admin gestion des utilisateurs | Skew.com
      </Typography>
      <DataGrid
        autoHeight
        rowHeight={80}
        rows={user}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        // Filtre
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
}
