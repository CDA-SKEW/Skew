// Nombre d'utilisateurs inscrits

import { Icon } from "@iconify/react";
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";

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
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.primary.dark,
    0
  )} 0%, ${alpha(theme.palette.primary.dark, 0.24)} 100%)`,
}));

export default function Users() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon="mdi:account-supervisor" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">100</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        utilisateurs
      </Typography>
    </RootStyle>
  );
}
