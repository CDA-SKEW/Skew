/*------------MUI Imports-------------*/

import React from "react";
import IconChips from "components/admin/tables/Chips";
import { Typography } from "@mui/material";
import Avatars from "components/admin/tables/Avatars";
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
import PeopleIcon from "@mui/icons-material/People";
import Pagination from "@mui/material/Pagination";

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

// Data Users
export default function UsersTable(props) {
  const { user } = props;

  // Table Head
  const columns = [
    { field: "id", headerName: "ID", editable: true },
    {
      field: "date",
      headerName: "Dates",
      type: "date",
      width: 150,
      renderCell: (cell) => {
        return <Dates user={cell} />;
      },
      editable: false,
    },
    {
      field: "avatar",
      headerName: "Avatars",
      width: 100,
      renderCell: (cell) => {
        return <Avatars contactProfil={cell} />;
      },
    },
    {
      field: "name",
      headerName: "Noms",
      editable: true,
      width: 150,
    },
    {
      field: "lastname",
      headerName: "Prénoms",
      editable: true,
      width: 150,
    },
    {
      field: "fullName",
      headerName: "Nom complet",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.lastname || ""} ${params.row.name || ""}`,
    },
    {
      field: "mail",
      editable: false,
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (cell) => {
        return <IconChips user={cell} />;
      },
      editable: false,
      width: 200,
    },
    {
      field: "checking",
      headerName: "Vérifié",
      renderCell: (id) => {
        return <Actions columnsVerif={true} id={id} key={id} />;
      },
      editable: false,
      width: 200,
    },
    {
      field: "badge",
      headerName: "Certifié",
      renderCell: (id) => {
        return <Actions columnsBadge={true} id={id} key={id} />;
      },
      editable: false,
      width: 200,
    },
    {
      field: "action",
      headerName: "Ban or delete user",
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
      width: 200,
    },
  ];

  /*--------------Components------------*/

  return (
    <Box style={{ height: 520, width: "100%" }}>
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
            <PeopleIcon /> Admin gestion des utilisateurs | Skew.com
          </Typography>
          <DataGrid
            rowHeight={80}
            enableCellSelect={false}
            rows={user}
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
