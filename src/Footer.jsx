import React, { useState } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper'
import Archive from '@material-ui/icons/Archive';
import History from '@material-ui/icons/History';
import { Link } from 'react-router-dom';
import { GpsFixed } from '@material-ui/icons';

const Footer = () => {
  const [ value, setValue ] = useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation 
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
      >
        <BottomNavigationAction label="Call History" value="/" icon={<History />} component={Link} to="/"/>
        <BottomNavigationAction label="Archived" icon={ <Archive /> } value="/archive" component={Link} to="/archive"/>
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
