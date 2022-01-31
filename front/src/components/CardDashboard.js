// material
import { styled } from "@mui/material/styles";
import { Card, Grid, Typography } from "@mui/material";
import { themeUser } from "configs/theme";
// ----------------------------------------------------------------------

const CardDashboardStyle = styled(Card)(() => ({
  textAlign: "center",
  color: themeUser.palette.text.primary,
  backgroundColor: themeUser.palette.background.paper,
  height: "250px",
  width: "250px",
  marginTop: 8,
}));

// ----------------------------------------------------------------------

// const TOTAL = 234;

export default function CardDashboard(props) {
  //console.log(props.list.icon);
  const { list } = props;

  return (
    <CardDashboardStyle>
      <Grid sx={{ mt: 8 }}>{list.icon}</Grid>
      <Grid sx={{ my: 1 }}>
        <Typography variant="h6">{list.number}</Typography>
      </Grid>
      <Grid sx={{ mb: 8 }}>
        <Typography variant="h6">{list.text}</Typography>
      </Grid>
    </CardDashboardStyle>
  );
}
