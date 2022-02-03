/*------------MUI Imports-------------*/

import React from "react";
// import IconChips from "components/admin/tables/Chips";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import Dates from "components/admin/tables/Dates";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Actions from "components/admin/tables/Actions";
import Avatars from "components/admin/tables/Avatars";
import IconChips from "./tables/Chips";
/*------------Export function + table header-------------*/

export default function MessagesTable(props) {
  const { listMessages } = props;

  // Search Bar
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  // Table Head
  const columns = [
    { field: "id", headerName: "ID", width: 50, editable: true },
    {
      field: "date",
      headerName: "Dates",
      width: 130,
      renderCell: () => {
        return <Dates />;
      },
      editable: false,
    },
    {
      field: "avatar",
      headerName: "Avatars",
      width: 80,
      renderCell: (cell) => {
        return <Avatars avatar={cell} />;
      },
    },
    {
      field: "name",
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
        `${params.row.firstName || ""} ${params.row.name || ""}`,
    },
    {
      field: "phone",
      headerName: "Téléphone",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "email",
      width: 190,
      editable: true,
    },
    {
      field: "subject",
      headerName: "Objet",
      width: 150,
      editable: true,
    },
    {
      field: "message",
      headerName: "Messages",
      width: 150,
      editable: true,
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
      renderCell: (id) => {
        // columnsBan => pour ne pas afficher l'action bannir
        return <Actions columnsBan={false} key={id} id={id} />;
      },
      width: 200,
      editable: false,
    },
  ];

  /*--------------Components------------*/

  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center", mb: "20px" }}>
        Admin gestion de la messagerie | Skew.com
      </Typography>

      <Search sx={{ mb: "40px" }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      <DataGrid
        autoHeight
        rowHeight={80}
        rows={listMessages}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={true}
      />
    </Box>
  );
}
