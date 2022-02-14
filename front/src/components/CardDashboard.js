// material
import { styled } from "@mui/material/styles";
import { Card, Grid, Typography } from "@mui/material";
import { themeEmployer } from "configs/theme";
// ----------------------------------------------------------------------

const CardDashboardStyle = styled(Card)(() => ({
  textAlign: "center",
  color: themeEmployer.palette.textTitleItems.main,
  backgroundColor: themeEmployer.palette. bgCardDashboard.main,
  height: "150px",
  width: "150px",
  marginTop: 8,
  paddingTop:4
}));

// ----------------------------------------------------------------------

// const TOTAL = 234;

export default function CardDashboard(props) {
  //console.log(props.list.icon);
  const { list } = props;

  return (
    <CardDashboardStyle sx={{display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
      <Grid >{list.icon}</Grid>
      <Grid>
        <Typography variant="h5">{list.number}</Typography>
      </Grid>
      <Grid >
        <Typography variant="body2">{list.text}</Typography>
      </Grid>
    </CardDashboardStyle>
  );
}
