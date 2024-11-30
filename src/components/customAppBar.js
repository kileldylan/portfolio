import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu'; // Icon for hamburger menu
import { CSSTransition } from 'react-transition-group'; // Add this import

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundImage: 'linear-gradient(to right, #002B5B, #00588A)', // Same gradient as HeroSection
  color: '#E1E9F1',
  padding: 0,
  margin: 0,
  borderRadius: 0, // Remove border radius
  boxShadow: 'none', // Optional: No shadow for a clean look
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: '0 20px', // Provide minimal horizontal padding for content alignment
  [theme.breakpoints.down('sm')]: {
    padding: '0 10px', // Adjust padding for smaller screens
  },
}));

const PageTransitionWrapper = styled('div')({
  position: 'relative',
  transition: 'opacity 500ms ease-out, transform 500ms ease-out',
});

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundImage: 'linear-gradient(to right, #00588A, #66A3D2)', // Lighter gradient
    color: '#E1E9F1', // Set text color
    width: '250px',
    border: 'none', // Optional: Remove border
  },
}));

const CustomAppBar = () => {
  const location = useLocation(); // Get the current location for page transitions
  const [drawerOpen, setDrawerOpen] = useState(false); // Manage drawer state for mobile view

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Scroll to the top of the page on navigation
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [location]);

  return (
    <>
      {/* AppBar for large screens */}
      <AppBarStyled position="sticky">
        <ToolbarStyled>
          {/* Branding */}
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Deelan Kilel
          </Typography>

          {/* Navigation Links for large screens */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About Me
            </Button>
            <Button color="inherit" component={Link} to="/projects">
              Projects
            </Button>
            <Button color="inherit" component={Link} to="/experience">
              Experience
            </Button>
            <Button color="inherit" component={Link} to="/education">
              Education
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </Box>

          {/* Hamburger menu for mobile screens */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </ToolbarStyled>
      </AppBarStyled>

      {/* Drawer for mobile screens */}
      <DrawerStyled anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={toggleDrawer}>
            <ListItemText primary="About Me" />
          </ListItem>
          <ListItem button component={Link} to="/projects" onClick={toggleDrawer}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component={Link} to="/experience" onClick={toggleDrawer}>
            <ListItemText primary="Experience" />
          </ListItem>
          <ListItem button component={Link} to="/education" onClick={toggleDrawer}>
            <ListItemText primary="Education" />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={toggleDrawer}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </DrawerStyled>

      {/* Page Transitions */}
      <CSSTransition
        in={true}
        timeout={500}
        classNames="page"
        key={location.pathname}
        unmountOnExit
      >
        <PageTransitionWrapper>
          {/* Page content would go here */}
        </PageTransitionWrapper>
      </CSSTransition>
    </>
  );
};

export default CustomAppBar;
