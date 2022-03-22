/*------------MUI Imports-------------*/

import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Dates from "components/admin/tables/Dates";
import Actions from "components/admin/tables/Actions";
import WorkIcon from "@mui/icons-material/Work";

/*------------Export function + table header-------------*/

export default function JobsTable(props) {
  // console.log("job1 table + props", props);
  const { job } = props;
  // console.log("job2 table + job", job);

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
      minWidth: 200,
      editable: true,
    },
    {
      field: "type",
      headerName: "Type",
      wminWidth: 200,
      editable: true,
    },
    {
      field: "period",
      headerName: "Période",
      minWidth: 200,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 300,
      editable: true,
    },
    {
      field: "profil",
      headerName: "Profil",
      minWidth: 300,
      editable: true,
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (id) => {
        return <Actions columnsDeleteJob={true} key={id} id={id} />;
      },
      minWidth: 100,
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
            sx={{ width: "100%" }}
            autoHeight
            rowHeight={80}
            enableCellSelect={false}
            rows={job}
            columns={columns}
            // Pagination
            initialState={{
              ...job.initialState,
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
      </Box>
    </Box>
  );
}
