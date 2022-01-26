// material
import { styled } from "@mui/material/styles";
import { Card, Grid, Typography } from "@mui/material";
// ----------------------------------------------------------------------

const CardDashboardStyle = styled(Card)(() => ({
  textAlign: "center",
  padding: 2,
  color: "white",
  backgroundColor: "#FF7F50",
  height: "250px",
  width: "250px",
  marginTop: "35px",
  marginBottom: "35px",
}));

// ----------------------------------------------------------------------

// const TOTAL = 234;

const CardDashboard = (props) => {
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
};

export default CardDashboard;
