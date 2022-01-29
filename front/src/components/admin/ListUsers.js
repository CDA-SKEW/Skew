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

/*------------Table-------------*/

const { nbUser, name, email, title } = {
  nbUser: [0, 1, 2, 3, 4],
  title: "Liste des Utilisateurs",
  name: "Jean Cuckstein",
  email: "jean@gmail.com",
};
const array = [
  {
    id: 0,
    avatarURL: (
      <Avatar src="https://img.search.brave.com/NYf6DicQtR8p1KhluC_artVZDP9IngN0vRp9Ho-8zMU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LmJ1/YmJsZWJsYWJiZXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzA0L0FvdEVw/MjZiLnBuZw" />
    ),
    title: title,
    nb: nbUser.length,
    name: name,
    email: email,
  },
  {
    id: 2,
    avatarURL: (
      <Avatar src="https://img.search.brave.com/Lp6ZQFnezOaFMCfZBmwf4KDHYIRMT_UO3gntRYZM47A/rs:fit:569:720:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg1L2Rl/LzIwLzg1ZGUyMDMx/ODdjZGM2MzBkNzhm/OGRmMDRkMDI2M2Nm/LmpwZw" />
    ),
    title: title,
    nb: nbUser.length,
    name: name,
    email: email,
  },
];

/*------------Export function-------------*/

export default function ListUsers() {
  return (
    <RootStyle>
      <Typography component="h1">{title}</Typography>
      <Stack direction="row" justifyContent="left" spacing={2}>
        <Avatar
          src="https://img.search.brave.com/Lp6ZQFnezOaFMCfZBmwf4KDHYIRMT_UO3gntRYZM47A/rs:fit:569:720:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg1L2Rl/LzIwLzg1ZGUyMDMx/ODdjZGM2MzBkNzhm/OGRmMDRkMDI2M2Nm/LmpwZw"
          sx={{ width: 56, height: 56, m: 2 }}
        />
        <Typography variant="subtitle2" sx={{ pt: 3 }}>
          {name}
          <br />
          {email}
        </Typography>
      </Stack>
    </RootStyle>
  );
}
