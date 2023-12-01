import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ClearIcon from '@mui/icons-material/Clear';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';

export default function BottomNavBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ marginTop: '.5em',  width: '100%' }}>
      <BottomNavigation
        sx={{ '& > :not(style)': { m: 1} }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >

        <Fab variant='extended' color="primary" aria-label="add">
        <PersonAddIcon sx={{ mr: 1}} />
            Assign
        </Fab>
        <Fab variant='extended' color="secondary" aria-label="add">
        <ClearIcon sx={{ mr: 1}} />
            Delete
        </Fab>
      </BottomNavigation>
    </Box>
  );
}