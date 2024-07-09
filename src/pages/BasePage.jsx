import React, { useState } from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const BasePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = (
    <>
      <Button color="inherit" component={RouterLink} to="/">
        Home
      </Button>
      <Button color="inherit" component={RouterLink} to="/teams">
        Teams
      </Button>
      <Button color="inherit" component={RouterLink} to="/players">
        Players
      </Button>
      <Button color="inherit" component={RouterLink} to="/matches">
        Matches
      </Button>
      <Button color="inherit" component={RouterLink} to="/statistics">
      Statistics
      </Button>
      <Button color="inherit" component={RouterLink} to="/reports">
      Reports
      </Button>
    </>
  );

  const mobileMenuItems = (
    <>
      <MenuItem onClick={handleMenuClose} component={RouterLink} to="/">
        Home
      </MenuItem>
      <MenuItem onClick={handleMenuClose} component={RouterLink} to="/teams">
        Teams
      </MenuItem>
      <MenuItem onClick={handleMenuClose} component={RouterLink} to="/players">
        Players
      </MenuItem>
      <MenuItem onClick={handleMenuClose} component={RouterLink} to="/matches">
        Matches
      </MenuItem>
      <MenuItem onClick={handleMenuClose} component={RouterLink} to="/statistics">
      Statistics
      </MenuItem>
      <MenuItem onClick={handleMenuClose} component={RouterLink} to="/reports">
      Reports
      </MenuItem>
    </>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SPORT MANAGER
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {mobileMenuItems}
              </Menu>
            </>
          ) : (
            menuItems
          )}
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default BasePage;
