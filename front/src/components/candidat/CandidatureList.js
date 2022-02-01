import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { Box } from '@mui/material';

export default function CandidatureList(props) {
  const { ListCandidature } = props
  console.log('component list candidature', ListCandidature);
  // console.log('gggg', ListCandidature[0].statusCheck);


  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>



      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="" />
        </ListItemAvatar>
        <ListItemText
          primary={ListCandidature.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >

              </Typography>

              {"— Lorem ipsum ..."}
              <Typography>
                {ListCandidature.ets}
              </Typography>
              <Typography>
                {ListCandidature.city}
              </Typography>

              <AddCircleOutlineIcon
                sx={{ position: "absolute", right: 5, top: "10px", fontSize: "40px" }} />

              { /* ICON STATUS*/}

              {/* candidature validé icon+text */}
              <Box
              sx={{display:"flex" , flexDirection:"row"}}>
              {ListCandidature.statusCheck && (
                <CheckCircleOutlineIcon
                  sx={{ color: "green", fontSize: 30 }}
                />)}
                {ListCandidature.statusCheck && (
                <Typography
                sx={{color:"black"}}> Candidature Validé</Typography>
                )}

              {/* candidature refusé icon+text */}
              {ListCandidature.statusDist && (
                <DoNotDisturbIcon
                  sx={{ color: "red", fontSize: 30 }}
                />)}
                 {ListCandidature.statusDist && (
                <Typography
                sx={{color:"black"}}> Candidature Refusé</Typography>
                )}

              {/* candidature en cours  icon+text */}
              {ListCandidature.statusQuery && (
                <QueryBuilderIcon
                  sx={{ color: "black", fontSize: 30 }}
                />)}
                {ListCandidature.statusQuery && (
                <Typography
                sx={{color:"black"}}> Candidature en cours d'examen</Typography>
                )}
               </Box>

              <Typography
                sx={{ position: "relative", color: "black" }}>
                {ListCandidature.date}
              </Typography>


            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>

  );
}
