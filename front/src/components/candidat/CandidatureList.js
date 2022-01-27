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

export default function CandidatureList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Developpeur Web"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                SII
              </Typography>
             
              {"— Lorem ipsum ..."}
              <Typography>
                  Le Mans
              </Typography>
              <Typography>
                  candidature envoyer le 31 février 2021
              </Typography>
              
              <AddCircleOutlineIcon
              sx={{position:"absolute",right:5,top:"10px",fontSize:"40px"}}/>
              <Box
              sx={{position:"absolute",right:350,top:"5px"}}>
              <CheckCircleOutlineIcon
              sx={{color:"green", fontSize:30}}
              />
              <Typography
              sx={{position:"relative" ,color:"black"}}>
                  Candidature retenue
              </Typography>
              </Box>
             
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Developpeur Front-end"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                EDF
              </Typography>
              {" — Lorem ipsum ..."}
              <Typography>
                  Nantes
              </Typography>
              <Typography>
                  candidature envoyer le 31 février 2021
              </Typography>
              <AddCircleOutlineIcon
              sx={{position:"absolute",right:5,top:"10px",fontSize:"40px"}}/>
              <Box
              sx={{position:"absolute",right:320,top:"5px"}}>
              <DoNotDisturbIcon
              sx={{color:"red", fontSize:30}}
              />
              <Typography
              sx={{position:"relative" ,color:"black"}}>
                  Candidature non retenue
              </Typography>
              </Box>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Developpeur Backend"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                EDF
              </Typography>
              {' — Lorem ipsum…'}
              <Typography>
                  Paris 16eme
              </Typography>
              <Typography>
                  candidature envoyer le 31 février 2021
              </Typography>
              <AddCircleOutlineIcon
              sx={{position:"absolute",right:5,top:"10px",fontSize:"40px"}}/>
               <Box
              sx={{position:"absolute",right:270,top:"5px"}}>
              <QueryBuilderIcon
              sx={{color:"black", fontSize:30}}
              />
              <Typography
              sx={{position:"relative" ,color:"black"}}>
                  Candidature en cours d'examen
              </Typography>
              </Box>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
