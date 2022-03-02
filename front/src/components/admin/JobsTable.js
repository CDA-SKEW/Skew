/*------------MUI Imports-------------*/

import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Dates from "components/admin/tables/Dates";
import Actions from "components/admin/tables/Actions";
import Status from "components/admin/tables/Status";
import Badges from "components/admin/tables/Badges";
import WorkIcon from "@mui/icons-material/Work";
import AdminJobs from "pages/admin/AdminJobs";
import PropTypes from "prop-types";

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
      renderCell: () => {
        return <Dates />;
      },
      editable: false,
    },
    {
      field: "title",
      headerName: "Titre",
      minWidth: 200,
      editable: true,
      flex: 1,
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
      flex: 1,
    },
    {
      field: "profil",
      headerName: "Profil",
      minWidth: 300,
      editable: true,
      flex: 1,
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (id) => {
        return <Actions columnsDeleteJob={true} key={id} id={id} />;
      },
      minWidth: 100,
      editable: false,
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
        <WorkIcon /> Admin gestion des offres d'emploi | Skew.com
      </Typography>
      <DataGrid
        sx={{ width: "100%" }}
        autoHeight
        rowHeight={80}
        enableCellSelect={false}
        rows={job}
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
