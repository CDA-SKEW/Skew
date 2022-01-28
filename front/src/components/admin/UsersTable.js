import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { deepOrange } from "@mui/material/colors";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

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
        <span role="img" aria-label="calendar">
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
        <span role="img" aria-label="person">
          🧑
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
    renderHeader: () => (
      <strong>
        {"Emails "}
        <span role="img" aria-label="mail">
          ✉️
        </span>
      </strong>
    ),
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
    avatar: (
      <StyledBadge
        overlap="circular"
        anchororigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt="S" sx={{ bgcolor: deepOrange[500] }} />
      </StyledBadge>
    ),
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
