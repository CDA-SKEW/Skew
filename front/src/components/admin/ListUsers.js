// Listing du nombre d'utilisateurs inscrits

/*------------MUI Imports-------------*/

import { styled } from "@mui/material/styles";
import { Card, Divider, List, ListItemAvatar, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { Icon } from "@iconify/react";
import { alpha } from "@mui/material/styles";

/*------------Styles-------------*/

// Style Card
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter,
}));

// Style Icon
const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.primary.dark,
    0
  )} 0%, ${alpha(theme.palette.primary.dark, 0.24)} 100%)`,
}));

/*------------Export function-------------*/

export default function ListUsers(props) {
  const { listUsers } = props;
  // Afficher uniquement les 6 derniers users
  const SliceUsers = listUsers.slice(0, 4);

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon="mdi:account-multiple-plus" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h4">Derniers utilisateurs inscrits</Typography>
      {SliceUsers.map((user, index) => {
        // console.log("ListUsers", user);
        return (
          <List key={index} sx={{ width: "100%", maxWidth: 360 }}>
            <ListItem alignItems="flex-start" component="div">
              <ListItemAvatar>
                <Avatar alt="avatar" src={user.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={user.fullName}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {user.email}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        );
      })}
    </RootStyle>
  );
}
