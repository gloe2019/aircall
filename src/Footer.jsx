import React, { useState } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Archive from '@material-ui/icons/Archive';
import History from '@material-ui/icons/History';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [ value, setValue ] = useState(0);
  return (
    <footer>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
      >
        <BottomNavigationAction label="Call History" value="/history" icon={<History />} component={Link} to="/history"/>
        <BottomNavigationAction label="Archive" icon={ <Archive /> } value="/archive" component={Link} to="/archive"/>
      </BottomNavigation>
    </footer>
  );
};

export default Footer;
