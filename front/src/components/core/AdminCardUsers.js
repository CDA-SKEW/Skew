import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import WorkIcon from "@mui/icons-material/Work";

export default function BasicCard() {
  const { nbUser, nbWork, nbNotif } = {
    nbUser: [0, 1, 2],
    nbNotif: [0, 1, 2, 3, 4],
    nbWork: [0, 1, 2, 3, 4, 5, 6],
  };
  const array = [
    {
      id: 0,
      icon: <GroupIcon sx={{ color: "#33c863" }} />,
      title: "Utilisateurs",
      nb: nbUser.length,
    },
    {
      id: 2,
      icon: <WorkIcon sx={{ color: "#33c863" }} />,
      title: "Entreprises",
      nb: nbWork.length,
    },
    {
      id: 1,
      icon: <NotificationsActiveIcon sx={{ color: "#33c863" }} />,
      title: "Notifications",
      nb: nbNotif.length,
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
      }}
    >
      {array.map((item) => {
        return (
          <Card
            key={item}
            sx={{
              minWidth: 342,
              height: 121,
              borderRadius: "12px",
              border: "1px solid #3c4752",
              boxSizing: "border-box",
              m: 1,
            }}
          >
            <CardContent>
              <Typography>{item.icon}</Typography>

              <Typography
                component="h6"
                sx={{
                  position: "static",
                  width: "92px",
                  height: "20px",
                  left: "0px",
                  top: "0px",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  lineHeight: "20px",
                  letterSpacing: "0.4px",
                  flex: "none",
                  order: 0,
                  flexGrow: 0,
                  margin: "8px 0px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  position: "static",
                  width: "43px",
                  height: "29px",
                  left: "0px",
                  top: "28px",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  lineHeight: "29px",
                  letterSpacing: "0.4px",
                  flex: "none",
                  order: 1,
                  flexGrow: 0,
                  margin: "8px 0px",
                }}
                component="h6"
              >
                {item.nb}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}
