import * as React from 'react';
import { ListItem, Divider } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import BtnOption from 'components/candidat/listOffer/BtnOption'
import { Box } from '@mui/material';

export default function CandidatureRow(props) {
  const { name, type, title, description, statut, id } = props.candidature
  return (
    <Box>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>

        <React.Fragment>
          <ListItemText>

            <Typography>
              Entreprise : {name}
            </Typography>
            <Typography>
              Type de Contrat: {type} || Poste : {title}
            </Typography>
            <Typography>
              Description : {description}
            </Typography>

            {/* BTN OPTION */}

            <BtnOption id={id} />

            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}>
              {statut === 0 ? <Typography sx={{ color: "black" }}> Candidature Validé <CheckCircleOutlineIcon sx={{ color: "green", fontSize: 30, mb: -1, mr: 1 }} /></Typography>
                : statut === 1 ? <Typography sx={{ color: "black" }}> Candidature Refusé <DoNotDisturbIcon sx={{ color: "red", fontSize: 30, mb: -1, mr: 1 }} /></Typography>
                  : <Typography sx={{ color: "black" }}> Candidature en cours d'examen <QueryBuilderIcon sx={{ color: "black", fontSize: 30, mb: -1, mr: 1 }} /></Typography>}
            </Box>
          </ListItemText>
        </React.Fragment>


      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  );
}
