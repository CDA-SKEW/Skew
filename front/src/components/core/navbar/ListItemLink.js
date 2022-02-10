import * as React from "react";
import ListItemText from '@mui/material/ListItemText';
// const { useNavigate } from "react-router";
import { Link as RouterLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import { Typography } from "@mui/material";

function ListItemLink(props) {
  const { primary, to } = props;
  // const navigate = useNavigate()

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
                fontSize: 20,
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