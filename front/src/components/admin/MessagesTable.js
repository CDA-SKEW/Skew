/*------------MUI Imports-------------*/

import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Dates from "components/admin/tables/Dates";
import Actions from "components/admin/tables/Actions";
import MailIcon from "@mui/icons-material/Mail";

/*------------Export function + table header-------------*/

export default function MessagesTable(props) {
  const { messages } = props;

  // Table Head
  const columns = [
    // { field: "id", headerName: "ID", editable: true },
    {
      field: "date",
      headerName: "Dates",
      width: 150,
      renderCell: (cell) => {
        return <Dates user={cell} />;
      },
      editable: false,
    },
    {
      field: "fullName",
      headerName: "Nom complet",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      minWidth: 200,
      flex: 1,
      valueGetter: (params) =>
        `${params.row.name || ""} ${params.row.firstname || ""}`,
    },
    {
      field: "tel",
      headerName: "Téléphone",
      editable: true,
      minWidth: 200,
      flex: 1,
    },
    {
      field: "mail",
      editable: true,
      minWidth: 200,
      flex: 1,
    },
    {
      field: "sujet",
      headerName: "Objet",
      editable: true,
      minWidth: 200,
      flex: 1,
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
      editable: false,
      minWidth: 200,
      flex: 1,
    },
  ];

  /*--------------Components------------*/

  return (
    <Box>
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
        <MailIcon /> Admin gestion de la messagerie | Skew.com
      </Typography>
      <DataGrid
        sx={{ width: "100%" }}
        autoHeight
        rowHeight={80}
        enableCellSelect={false}
        rows={messages}
        columns={columns}
        // Pagination
        initialState={{
          ...messages.initialState,
          pagination: {
            pageSize: 25,
          },
        }}
        checkboxSelection
        disableSelectionOnClick
        // Filtre
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
}
