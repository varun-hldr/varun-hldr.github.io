import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

export const HeaderOffset = Toolbar;

export default function Header({ siteTitle }) {
  return (
    <AppBar variant="outlined" elevation={0} position="fixed" color="inherit">
      <Toolbar>
        <Logo title={siteTitle} />
        <Box flexGrow={1} />
        <Navigation />
      </Toolbar>
    </AppBar>
  );
}
