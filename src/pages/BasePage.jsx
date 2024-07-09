import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Container, Typography, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const imageUrl = '/public/image/team.jpg'; // Replace with your image URL

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box display="flex">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Sport Manager
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem button>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText primary="Teams" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><SportsSoccerIcon /></ListItemIcon>
              <ListItemText primary="Players" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container>
          <Box textAlign="center" mt={5}>
            <Typography variant="h3" gutterBottom>
              Welcome to Sport Manager
            </Typography>
            <Typography variant="h6" gutterBottom>
              Your one-stop solution for managing sports teams, players, and matches effortlessly.
            </Typography>
            <Box>
              <img 
                src={imageUrl} 
                alt="Football Team" 
                style={{ 
                  width: '100%', 
                  maxWidth: '600px', 
                  height: 'auto', 
                  borderRadius: '8px', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
                }} 
              />
            </Box>
            <Box mt={4}>
              <Button variant="contained" color="primary" size="large">
                Get Started
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
