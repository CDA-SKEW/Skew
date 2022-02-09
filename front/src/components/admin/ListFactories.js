// Les dernières offres publiées

/*------------MUI Imports-------------*/

import { styled } from "@mui/material/styles";
import { Card, List, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

/*------------Styles-------------*/

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter,
}));

/*------------Export function-------------*/

export default function ListFactories(props) {
  const { listJobs} = props;
  const SliceJobs = listJobs.slice(0, 5);

  console.log("ListFactories, listJobs", listJobs);
  return (
    <RootStyle>
      <Typography variant="h6">Les dernières offres</Typography>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Box variant="subtitle1">
          {SliceJobs.map((listJobs, index) => (
            <List key={index} slice={listJobs} />
          ))}
        </Box>
      </Stack>
    </RootStyle>
  );
}
