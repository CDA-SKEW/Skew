// Listing du nombre d'entreprises

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
  title: "Listes des entreprises",
  name: "Connie Springer",
  email: "connie@gmail.com",
};
const array = [
  {
    id: 0,
    avatarURL: (
      <Avatar src="https://img.search.brave.com/NYf6DicQtR8p1KhluC_artVZDP9IngN0vRp9Ho-8zMU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LmJ1/YmJsZWJsYWJiZXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzA0L0FvdEVw/MjZiLnBuZw" />
    ),
    title: "Liste des utilisateurs",
    nb: nbUser.length,
    name: name,
    email: email,
  },
  {
    id: 2,
    avatarURL: (
      <Avatar src="https://img.search.brave.com/d1t6rBE3zz7PYwjblR7BI5VBbJ9tALr0QcxX6vsg2w0/rs:fit:988:898:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc5L2Ew/LzBkLzc5YTAwZGUy/ZWM4NWRmZmRiYjNm/NTAzZDRlZGFkNmFk/LmpwZw" />
    ),
    title: "Liste des utilisateurs",
    nb: nbUser.length,
    name: name,
    email: email,
  },
];

/*------------Export function-------------*/

export default function ListFactories() {
  return (
    <RootStyle>
      <Typography component="h1">{title}</Typography>
      <Stack direction="row" justifyContent="left" spacing={2}>
        <Avatar
          src="https://img.search.brave.com/NYf6DicQtR8p1KhluC_artVZDP9IngN0vRp9Ho-8zMU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LmJ1/YmJsZWJsYWJiZXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzA0L0FvdEVw/MjZiLnBuZw"
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
