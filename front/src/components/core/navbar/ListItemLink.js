import * as React from "react";
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';

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
          width: { xs: '100%', md: 290 },
        }}
      >
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default ListItemLink