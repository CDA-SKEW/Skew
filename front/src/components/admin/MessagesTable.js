/*------------MUI Imports-------------*/

import React from "react";
import { Typography } from "@mui/material";
import Actions from "components/admin/tables/Actions";
import { Box } from "@mui/system";
import {
  DataGrid,
  GridToolbar,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Dates from "components/admin/tables/Dates";
import Pagination from "@mui/material/Pagination";
import { number } from "prop-types";
import MailIcon from "@mui/icons-material/Mail";

/*------------Export function + table header-------------*/

// Pagination
function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="secondary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

// Data Messages
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
      width: 160,
      valueGetter: (params) =>
        `${params.row.name || ""} ${params.row.firstname || ""}`,
    },
    {
      field: "tel",
      headerName: "Téléphone",
      editable: true,
      type: number,
      width: 160,
    },
    {
      field: "mail",
      editable: true,
      width: 200,
    },
    {
      field: "sujet",
      headerName: "Objet",
      editable: true,
      width: 200,
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
      width: 200,
    },
  ];

  /*--------------Components------------*/

  return (
    <Box style={{ height: 400, width: "100%" }}>
      <Box style={{ display: "flex", height: "100%" }}>
        <Box style={{ flexGrow: 1 }}>
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
           rowHeight={80}
            enableCellSelect={false}
            rows={messages}
            columns={columns}
            checkboxSelection
            disableSelectionOnClick
            // Filtre + pagination
            components={{
              Toolbar: GridToolbar,
              Pagination: CustomPagination,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
