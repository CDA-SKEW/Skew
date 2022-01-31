/*------------MUI Imports-------------*/

import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconChips from "./tables/Chips";
import { Typography } from "@mui/material";
import Avatars from "components/admin/tables/Avatars";
import Actions from "components/admin/tables/Actions";

/*------------Export function-------------*/

export default function UsersTable() {
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "date",
      headerName: "Dates",
      width: 130,
      type: "date",
      editable: true,
    },
    {
      field: "avatar",
      headerName: "Avatars",
      width: 80,
      renderCell: () => {
        return (
          <>
            <Avatars />
          </>
        );
      },
    },
    {
      field: "lastName",
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
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "email",
      width: 190,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: () => {
        return (
          <>
            <IconChips />
          </>
        );
      },
      width: 150,
      editable: false,
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: () => {
        return (
          <>
            <Actions />
          </>
        );
      },
      width: 210,
      editable: false,
    },
  ];

  /*------------Table-------------*/

  const rows = [
    {
      id: 1,
      date: new Date(),
      firstName: "Jean",
      lastName: "Cuckstein",
      isEmployer: true,
      isCandidate: false,
      email: "jean@gmail.com",
    },
    {
      id: 2,
      date: new Date(),
      firstName: "Armong",
      lastName: "Arlert",
      isEmployer: false,
      isCandidate: true,
      email: "armong@gmail.com",
    },
    {
      id: 3,
      date: new Date(),
      firstName: "Cuckren",
      lastName: "Yoghurt",
      isEmployer: true,
      isCandidate: false,
      email: "cuckren@gmail.com",
    },
    {
      id: 4,
      date: new Date(),
      firstName: "Samy",
      lastName: "Lynn Jackson",
      isEmployer: true,
      isCandidate: false,
      email: "samy@gmail.com",
    },
    {
      id: 5,
      date: new Date(),
      firstName: "Dot",
      lastName: "Pixis",
      isEmployer: false,
      isCandidate: true,
      email: "dot@gmail.com",
    },
    {
      id: 6,
      date: new Date(),
      fistName: "Connie",
      lastName: "Springer",
      isEmployer: false,
      isCandidate: true,
      email: "springer@gmail.com",
    },
    {
      id: 7,
      date: new Date(),
      fistName: "Mankasa",
      lastName: "Crackerman",
      isEmployer: false,
      isCandidate: true,
      email: "dogkasa@gmail.com",
    },
    {
      id: 8,
      date: new Date(),
      fistName: "Berthy",
      lastName: "Hoover",
      isEmployer: false,
      isCandidate: true,
      email: "souka@gmail.com",
    },
    {
      id: 9,
      date: new Date(),
      fistName: "Marie",
      lastName: "Du Nile",
      isEmployer: true,
      isCandidate: false,
      email: "marie@gmail.com",
    },
  ];

  /*--------------Components------------*/

  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Admin gestion des utilisateurs | Skew.com
      </Typography>
      <br />

      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        // sx={{ background: "#212B36", display: "flex" }}
        pageSize={10}
        // rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
