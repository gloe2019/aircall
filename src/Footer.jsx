import React, {useState} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Archive from '@material-ui/icons/Archive';
import History from '@material-ui/icons/History';

const Footer = () => {
  const [value, setValue] = useState(0)
  return (
    <footer>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
      >
        <BottomNavigationAction label="Call History" icon={<History />}/>
        <BottomNavigationAction label="Archived" icon={ <Archive /> }/>
      </BottomNavigation>
    </footer>
  );
};

export default Footer;
