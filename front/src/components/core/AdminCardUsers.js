import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  return (
    <Box component="span" sx={{ display: "flex" }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} component="h6" gutterBottom>
            Word of the Day
          </Typography>
          <Typography component="h6">ghsrehrt</Typography>
          <Typography sx={{ mb: 1.5 }} component="h6">
            adjective
          </Typography>
          <Typography variant="body2" component="h6">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
