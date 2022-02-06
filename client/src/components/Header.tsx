import React from 'react';

import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';

import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ marginBottom: 10 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>Nexus Connection</Typography>
          <div style={{ flexGrow: 1 }} />
          <Button
            style={{ 'color': 'white' }}
            component={RouterLink}
            to='/forum'
          >
            Forum
          </Button>
          <IconButton style={{ 'color': 'white'}}>
            <AccountCircle/>
          </IconButton>
        </Toolbar>
      </AppBar>      
    </div>
  )
};

export default Header;