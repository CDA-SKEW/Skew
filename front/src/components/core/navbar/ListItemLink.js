import * as React from "react";
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import { Typography } from "@mui/material";

function ListItemLink(props) {
  const { primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem button
        component={renderLink}
        sx={{
          width: { xs: '100%', md: 250, lg: 300, xl: 400 },
        }}
      >
        <ListItemText
          primary={
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 25,
              }}
            >
              {primary}
            </Typography>
          }
        />
      </ListItem>
    </li>
  );
}

export default ListItemLink