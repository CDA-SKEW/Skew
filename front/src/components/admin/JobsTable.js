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
import WorkIcon from "@mui/icons-material/Work";

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

export default function JobsTable(props) {
  const { job } = props;

  // Table Head
  const columns = [
    { field: "offer_id", headerName: "ID", editable: true },
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
      field: "title",
      headerName: "Titre",
      width: 150,
      editable: true,
    },
    {
      field: "type",
      headerName: "Type",
      width: 150,
      editable: true,
    },
    {
      field: "period",
      headerName: "Période",
      width: 200,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 300,
      editable: true,
    },
    {
      field: "profil",
      headerName: "Profil",
      width: 150,
      editable: true,
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (id) => {
        return <Actions columnsDeleteJob={true} key={id} id={id} />;
      },
      width: 200,
      editable: false,
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
            <WorkIcon /> Admin gestion des offres d'emploi | Skew.com
          </Typography>
          <DataGrid
           rowHeight={80}
            enableCellSelect={false}
            rows={job}
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
