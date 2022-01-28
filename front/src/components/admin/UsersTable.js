import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "date",
    width: 150,
    type: "date",
    editable: true,
    renderHeader: () => (
      <strong>
        {"Inscription "}
        <span role="img" aria-label="enjoy">
          📅
        </span>
      </strong>
    ),
  },

  {
    field: "avatar",
    width: 150,
    editable: true,
    renderHeader: () => (
      <strong>
        {"Avatars "}
        <span role="img" aria-label="enjoy">
          🧑👩
        </span>
      </strong>
    ),
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
    field: "email",
    headerName: "Emails",
    // type: "number",
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
    field: "status",
    headerName: "Status",
    width: 150,
    editable: true,
  },
  {
    field: "action",
    headerName: "Actions",
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    date: new Date(),
    firstName: "Cuckstein",
    lastName: "Jean",
    isEmployer: false,
    isCandidate: true,
    email: "jean@gmail.com",
  },
  {
    id: 2,
    date: new Date(),
    firstName: "Alluminium",
    lastName: "Armong",
    isEmployer: false,
    isCandidate: true,
    email: "armong@gmail.com",
  },
  {
    id: 3,
    date: new Date(),
    firstName: "Yoghurt",
    lastName: "Cuckren",
    isEmployer: false,
    isCandidate: true,
    email: "cuckren@gmail.com",
  },
  {
    id: 4,
    date: new Date(),
    firstName: "Lee Jackson",
    lastName: "Samy",
    isEmployer: false,
    isCandidate: true,
    email: "samy@gmail.com",
  },
  {
    id: 5,
    date: new Date(),
    firstName: "Pixis",
    lastName: "Jacky",
    isEmployer: false,
    isCandidate: true,
    age: null,
  },
  {
    id: 6,
    date: new Date(),
    fistName: "Springer",
    lastName: null,
    isEmployer: false,
    isCandidate: true,
    email: "springer@gmail.com",
  },
  {
    id: 7,
    date: new Date(),
    fistName: "Crackerman",
    lastName: "Dogkasa",
    isEmployer: false,
    isCandidate: true,
    email: "dogkasa@gmail.com",
  },
  {
    id: 8,
    date: new Date(),
    fistName: "Super",
    lastName: "Souka",
    isEmployer: false,
    isCandidate: true,
    email: "souka@gmail.com",
  },
  {
    id: 9,
    date: new Date(),
    fistName: "Nile",
    lastName: "Marie",
    isEmployer: true,
    isCandidate: false,
    email: "marie@gmail.com",
  },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Typography>Gestion des utilisateurs</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
