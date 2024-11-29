import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/system';

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
}));

const PageTransitionWrapper = styled('div')({
  position: 'relative',
  transition: 'opacity 500ms ease-out, transform 500ms ease-out',
});

const CustomAppBar = () => {
  const location = useLocation(); // Get the current location for page transitions

  return (
    <AppBarStyled position="sticky">
      <ToolbarStyled>
        {/* Branding */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Deelan Kilel
        </Typography>

        {/* Navigation Links */}
        <Box>
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
      </ToolbarStyled>

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
    </AppBarStyled>
  );
};

export default CustomAppBar;
