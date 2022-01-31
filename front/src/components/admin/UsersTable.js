/*------------MUI Imports-------------*/

import React from "react";
import IconChips from "components/admin/tables/Chips";
import { Typography } from "@mui/material";
import Avatars from "components/admin/tables/Avatars";
import Actions from "components/admin/tables/Actions";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
// import { DataGrid, GridExpandMoreIcon } from "@mui/x-data-grid";
import Dates from "components/admin/tables/Dates";
import { DataGrid } from "@mui/x-data-grid";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";

/*------------Export function + table header-------------*/

export default function UsersTable() {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "date",
      headerName: "Dates",
      width: 130,
      // type: "date",
      renderCell: () => {
        return <Dates />;
      },
      editable: false,
    },
    {
      field: "avatar",
      headerName: "Avatars",
      width: 80,
      renderCell: () => {
        return <Avatars />;
      },
    },
    {
      field: "lastName",
      headerName: "Noms",
      width: 150,
      editable: false,
    },
    {
      field: "firstName",
      headerName: "Prénoms",
      width: 150,
      editable: false,
    },
    {
      field: "fullName",
      headerName: "Nom complet",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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
      field: "action",
      headerName: "Actions",
      renderCell: () => {
        return <Actions />;
      },
      width: 190,
      editable: false,
    },
  ];

  /*------------Table Users-------------*/

  const listUsers = useSelector((state) => state.admin.listUsers);

  /*--------------Components------------*/

  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Admin gestion des utilisateurs | Skew.com
      </Typography>

      <br />

      {/* <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        ></AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: "center" }}>
            <DataGrid
              autoHeight
              // rows={listUsers}
              columns={columns}
              // pageSize={10}
              // rowsPerPageOptions={[5]}
              // checkboxSelection
            />
          </Typography>
        </AccordionDetails>
      </Accordion> */}

      <DataGrid
        autoHeight
        rows={listUsers}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
}
