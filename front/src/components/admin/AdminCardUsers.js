// Component parent contenants tous les sous-components cards

/*------------MUI Imports-------------*/

import { Box, Grid, Container, Typography } from "@mui/material";
import {
  Factory,
  Notif,
  Users,
  ListFactories,
  ListUsers,
} from "components/admin";
import DashboardIcon from "@mui/icons-material/Dashboard";

/*------------Export function-------------*/

export default function DashboardApp(props) {

  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography
          variant="h4"
          color="primary"
          sx={{
            textAlign: "center",
            mb: "50px",
            background: "linear-gradient(to right bottom, #E8FFEF, #C1F8D2)",
            borderRadius: 2,
          }}
        >
          <DashboardIcon /> Espace Admin | Skew.com
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Users />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Factory />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <Notif />
        </Grid>
        <Grid item xs={6}>
          <ListUsers />
        </Grid>
        <Grid item xs={6}>
          <ListFactories />
        </Grid>
      </Grid>
    </Container>
  );
}
