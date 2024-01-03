import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ position: 'fixed', right: 0, top: 0, zIndex: 1201 }}> {/* Assurez-vous que le zIndex est supérieur à celui de tous les autres éléments de la page */}
      <Toolbar sx={{ justifyContent: 'flex-end', minHeight: '64px', backgroundColor: 'transparent' }}>
        <Typography variant="h4" color="inherit" noWrap sx={{ marginRight: 2 }}>
          Bonjour,
        </Typography>
        <IconButton color="inherit" sx={{ p: 3 }}>
          <Avatar src="/path-to-your-profile.jpg" alt="Profile" />
        </IconButton>
      </Toolbar>
    </Box>
  );
};

export default Header;
