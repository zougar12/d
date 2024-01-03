import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Drawer, Box } from '@mui/material';

const drawerWidth = 400;

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#313131', // Or your preferred sidebar color
          color: 'white', // Or your preferred text color
        },
      }}
      variant="permanent"
      anchor="left"
    >
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        
      <List sx={{textAlign: 'center'}}>
        {/* "Admin View" avec une taille de police plus grande */}
        <ListItem button>
          <ListItemText primary="Admin View" sx={{ '& .MuiListItemText-primary': { fontSize: '4rem' },textAlign: 'center', paddingTop: 7 }} />
        </ListItem>
        {/* Autres éléments de la liste avec une taille de police standard */}
        {['Accueil', 'Admin panel'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} sx={{ '& .MuiListItemText-primary': { fontSize: '2rem' },textAlign: 'center' }} />
          </ListItem>
        ))}
      </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
