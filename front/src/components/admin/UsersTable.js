/*------------MUI Imports-------------*/

import React from "react";
import IconChips from "components/admin/tables/Chips";
import { Typography } from "@mui/material";
import Avatars from "components/admin/tables/Avatars";
import Actions from "components/admin/tables/Actions";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Dates from "components/admin/tables/Dates";
import Badges from "components/admin/tables/Badges";
import PeopleIcon from "@mui/icons-material/People";

/*------------Export function + table header-------------*/

export default function UsersTable(props) {
  const { listUsers } = props;

  // Table Head
  const columns = [
    { field: "id", headerName: "ID", width: 50, editable: true },
    {
      field: "date",
      headerName: "Dates",
      width: 130,
      renderCell: () => {
        return <Dates />;
      },
      editable: false,
    },
    {
      field: "avatar",
      headerName: "Avatars",
      width: 80,
      renderCell: (cell) => {
        return <Avatars avatar={cell} />;
      },
    },
    {
      field: "name",
      headerName: "Noms",
      width: 150,
      editable: true,
    },
    {
      field: "firstName",
      headerName: "Prénoms",
      width: 150,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Nom complet",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.name || ""}`,
    },
    {
      field: "email",
      width: 190,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (cell) => {
        return <IconChips user={cell} />;
      },
      width: 150,
      editable: false,
    },
    {
      field: "checking",
      headerName: "Vérifier",
      renderCell: (cell) => {
        // console.log(user);
        return <Badges user={cell} />;
      },
      width: 150,
      editable: false,
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (id) => {
        // console.log(id);
        return (
          <Actions
            columnsBan={true}
            columnsDeleteUser={true}
            key={id}
            id={id}
          />
        );
      },
      width: 190,
      editable: false,
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
        rows={listUsers}
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
