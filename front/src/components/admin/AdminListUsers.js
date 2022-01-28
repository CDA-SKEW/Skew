import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

export default function BasicCard() {
  const { nbUser, name, email } = {
    nbUser: [0, 1, 2],
    name: "Jean",
    email: "jean@gmail.com",
  };
  const array = [
    {
      id: 0,
      avatar: (
        <Avatar src="https://img.search.brave.com/NYf6DicQtR8p1KhluC_artVZDP9IngN0vRp9Ho-8zMU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LmJ1/YmJsZWJsYWJiZXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzA0L0FvdEVw/MjZiLnBuZw" />
      ),
      title: "Liste des utilisateurs",
      nb: nbUser.length,
      name: name,
      email: email,
    },
    {
      id: 2,
      avatar: (
        <Avatar src="https://img.search.brave.com/d1t6rBE3zz7PYwjblR7BI5VBbJ9tALr0QcxX6vsg2w0/rs:fit:988:898:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc5L2Ew/LzBkLzc5YTAwZGUy/ZWM4NWRmZmRiYjNm/NTAzZDRlZGFkNmFk/LmpwZw" />
      ),
      title: "Liste des entreprises",
      nb: nbUser.length,
      name: name,
      email: email,
    },
  ];
  return (
    <Box
      component="span"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        p: 2,
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        borderRadius: "12px",
        fontWeight: "bold",
        position: "static",
      }}
    >
      {array.map((item, index) => {
        return (
          <Card
            key={index}
            sx={{
              borderRadius: "12px",
              fontSize: "13px",
              width: "539px",
              height: "449px",
              m: 1,
            }}
          >
            <CardContent>
              <Stack>
                <Avatar alt="avatar" sx={{ width: 56, height: 56 }}>
                  {item.avatar}
                </Avatar>
              </Stack>
              <Typography component="h6">{index}</Typography>
              <Typography component="h6">{item.title}</Typography>
              <Typography component="h6">{item.name}</Typography>
              <Typography component="h6">{item.email}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}
