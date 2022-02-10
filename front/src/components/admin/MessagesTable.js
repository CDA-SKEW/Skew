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
import MailIcon from "@mui/icons-material/Mail";

/*------------Export function + table header-------------*/

export default function MessagesTable(props) {
  const { listMessages } = props;

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
      field: "fullName",
      headerName: "Nom complet",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Téléphone",
      editable: true,
      minWidth: 200,
      flex: 1,
    },
    {
      field: "email",
      editable: true,
      minWidth: 200,
      flex: 1,
    },
    {
      field: "subject",
      headerName: "Objet",
      editable: true,
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
