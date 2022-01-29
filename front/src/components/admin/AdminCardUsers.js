// Component parent contenants tous les sous-components cards

/*------------MUI Imports-------------*/

import { Box, Grid, Container, Typography } from "@mui/material";
import { Factory, Notif, Users } from "components/admin";
import { ListFactories, ListUsers } from ".";

/*------------Export function-------------*/

export default function DashboardApp() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Espace Admin | Skew.com
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
