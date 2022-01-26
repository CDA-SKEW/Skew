import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { themeAdmin } from "configs/theme";

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
        padding: "32px",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        borderRadius: "12px",
        fontWeight: "bold",
        position: "relative",
      }}
    >
      {array.map((item) => {
        return (
          <Card
            key={item}
            sx={{
              backgroundColor: themeAdmin.palette.background.paper,
              borderRadius: "12px",
              border: "1px solid #3c4752",
              fontSize: "13px",
              width: "539px",
              height: "449px",
              m: 1,
            }}
          >
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="avatar"
                  sx={{
                    width: "48px",
                    height: "48px",
                    left: "0px",
                    top: "0px",
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                    margin: "0px 12px",
                  }}
                >
                  {item.avatar}
                </Avatar>
              </Stack>
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
