// Nombre de messages reçus

/*------------MUI Imports-------------*/

import { Icon } from "@iconify/react";
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";

/*------------Styles-------------*/

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
}));

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

export default function Factory(props) {
  const { listMessages } = props;
  // console.log(listMessages.length);
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon="mdi:bell" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{listMessages.length}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Notifications
      </Typography>
    </RootStyle>
  );
}
