import React from 'react';
import { Box, Grid, Typography, Divider, IconButton, Link } from '@mui/material';
import { styled } from '@mui/system';
import { GitHub, LinkedIn, Twitter, Facebook } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(to right, #002B5B, #00588A)', // Same gradient as HeroSection
  color: '#E1E9F1', // Same text color as HeroSection
  padding: '1rem 0', // Reduced padding
  marginTop: 'auto', // Ensures it stays at the bottom
  textAlign: 'center', // Centers the footer content
  borderTop: `1px solid ${theme.palette.divider}`, // Optional: Adds a top border for separation
}));

const SocialIcons = styled(IconButton)({
  color: '#ECF0F1',
  '&:hover': {
    color: '#3498DB', // Light Blue on hover
  },
  margin: '0 10px',
});

const Footer = () => {
  // Function to scroll to the top of the page when a link is clicked
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FooterContainer>
<Grid container spacing={2} justifyContent="center"> 
{/* Left Section - Personal Info */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ECF0F1', fontSize: '1.2rem' }}>
            Deelan Kilel
          </Typography>
          <Typography variant="body2" sx={{ color: '#BDC3C7', fontSize: '0.875rem' }}>
            Software Developer | Problem Solver | Tech Enthusiast
          </Typography>
          <Typography variant="body2" sx={{ color: '#BDC3C7', marginTop: 1 }}>
            Passionate about crafting scalable, user-centric software solutions.
          </Typography>
        </Grid>

        {/* Center Section - Navigation Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ECF0F1' }}>
            Quick Links
          </Typography>
          <Link
            component={RouterLink}
            to="/"
            onClick={handleScrollToTop}
            sx={{ display: 'block', color: '#BDC3C7', marginTop: 1 }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/about"
            onClick={handleScrollToTop}
            sx={{ display: 'block', color: '#BDC3C7', marginTop: 1 }}
          >
            About Me
          </Link>
          <Link
            component={RouterLink}
            to="/projects"
            onClick={handleScrollToTop}
            sx={{ display: 'block', color: '#BDC3C7', marginTop: 1 }}
          >
            Projects
          </Link>
          <Link
            component={RouterLink}
            to="/contact"
            onClick={handleScrollToTop}
            sx={{ display: 'block', color: '#BDC3C7', marginTop: 1 }}
          >
            Contact
          </Link>
        </Grid>

        {/* Right Section - Social Media Icons */}
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ECF0F1' }}>
            Follow Me
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            <SocialIcons href="https://github.com/kileldylan" target="_blank">
              <GitHub />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/deelan-kilel-4555aa284" target="_blank">
              <LinkedIn />
            </SocialIcons>
            <SocialIcons href="https://x.com/dylan_kilel" target="_blank">
              <Twitter />
            </SocialIcons>
            <SocialIcons href="https://www.facebook.com/profile.php?id=100081027259309" target="_blank">
              <Facebook />
            </SocialIcons>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: 4, backgroundColor: '#BDC3C7' }} />

      {/* Bottom Copyright */}
      <Typography variant="body2" sx={{ textAlign: 'center', color: '#BDC3C7' }}>
        &copy; {new Date().getFullYear()} Deelan Kilel. All Rights Reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
