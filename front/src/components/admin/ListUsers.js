// Listing du nombre d'utilisateurs

/*------------MUI Imports-------------*/

import { styled } from "@mui/material/styles";
import { Card, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

/*------------Styles-------------*/

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter,
}));

/*------------Export function-------------*/

export default function ListUsers(props) {
  const { listUsers } = props;
  console.log("ListUsers", listUsers);
  return (
    <RootStyle>
      <Typography component="h1">Liste des Utilisateurs</Typography>
      <Stack direction="row" justifyContent="left" spacing={2}>
        <Avatar
          src="https://img.search.brave.com/Lp6ZQFnezOaFMCfZBmwf4KDHYIRMT_UO3gntRYZM47A/rs:fit:569:720:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg1L2Rl/LzIwLzg1ZGUyMDMx/ODdjZGM2MzBkNzhm/OGRmMDRkMDI2M2Nm/LmpwZw"
          sx={{ width: 56, height: 56, m: 2 }}
        />
        <Typography variant="subtitle2" sx={{ pt: 3 }}>
          {/* {listUsers} */}
        </Typography>
      </Stack>
    </RootStyle>
  );
}
