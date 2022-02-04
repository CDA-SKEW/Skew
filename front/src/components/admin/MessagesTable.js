/*------------MUI Imports-------------*/

import React from "react";
// import IconChips from "components/admin/tables/Chips";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Dates from "components/admin/tables/Dates";
import Actions from "components/admin/tables/Actions";
import Avatars from "components/admin/tables/Avatars";
import IconChips from "./tables/Chips";

/*------------Export function + table header-------------*/

export default function MessagesTable(props) {
  const { listMessages } = props;

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
      field: "fullName",
      headerName: "Nom complet",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.name || ""}`,
    },
    {
      field: "phone",
      headerName: "Téléphone",
      width: 120,
      editable: true,
    },
    {
      field: "email",
      width: 150,
      editable: true,
    },
    {
      field: "subject",
      headerName: "Objet",
      width: 100,
      editable: true,
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
      field: "action",
      headerName: "Actions",
      renderCell: (id) => {
        return (
          <Actions
            columnsDeleteMessage={true}
            columnsAddMessage={true}
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
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center", mb: "50px" }}>
        Admin gestion de la messagerie | Skew.com
      </Typography>
      <DataGrid
        autoHeight
        rowHeight={80}
        enableCellSelect={false}
        rows={listMessages}
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
