import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  ThemeProvider,
  Divider,
  Chip,
  CssBaseline,
} from '@mui/material';
import CustomAppBar from './customAppBar';
import { styled } from '@mui/system';
import Footer from './footer';
import { createTheme } from '@mui/material/styles';

// Styled components
const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  margin: '0 auto 20px',
  border: `4px solid ${theme.palette.primary.main}`,
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#3498DB', // Main accent color
    },
    secondary: {
      main: '#2C3E50', // Text highlights
    },
    background: {
      default: '#F4F4F4', // Background color
    },
    text: {
      primary: '#2C3E50', // Main text color
      secondary: '#7F8C8D', // Muted text
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif', // Set Montserrat as the global font
  },
});

const AboutMe = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomAppBar />
      <Box sx={{ padding: 4, backgroundColor: '#f7f8fc', minHeight: '100vh' }}>
        {/* Introduction Section */}
        <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
          <ProfileAvatar src= '/images/kilel.jpg' alt="Profile Picture" />
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Deelan Kilel
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
            Software Developer | Problem Solver | Tech Enthusiast
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: 2,
              textAlign: 'justify',
              maxWidth: '700px',
              marginX: 'auto',
              lineHeight: 1.8,
            }}
          >
            Passionate about crafting scalable, user-centric software solutions, I specialize in
            modern web technologies and backend development. I thrive on creating impactful digital
            experiences that solve real-world problems.
          </Typography>
        </Box>

        <Divider sx={{ marginBottom: 6 }} />

        {/* Skills Section */}
        <Typography variant="h5" sx={{ color: 'primary.main', marginBottom: 4, textAlign: 'center' }}>
          Skills & Expertise
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Programming Languages',
              content: 'Java, JavaScript, Python, C, PHP, Flutter, Android',
            },
            {
              title: 'Web Technologies',
              content: 'React, Node.js, Express.js, JSP, HTML, CSS',
            },
            {
              title: 'Tools & Frameworks',
              content: 'Git, NetBeans, VS Code, MySQL',
            },
            {
              title: 'Cloud & DevOps',
              content: 'AWS, Docker, Vercel, CI/CD Pipelines',
            },
            {
              title: 'Problem Solving',
              content: 'Algorithm Design, Debugging, Optimization',
            },
          ].map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={3} sx={{ borderTop: `4px solid ${theme.palette.primary.main}` }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: 'secondary.main' }}
                  >
                    {skill.title}
                  </Typography>
                  <Divider sx={{ marginY: 1 }} />
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    {skill.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ marginY: 6 }} />

        {/* Certifications Section */}
        <Typography variant="h5" sx={{ color: 'primary.main', marginBottom: 4, textAlign: 'center' }}>
          Certifications
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            'J2EE Enterprise Developer',
            'Full-Stack Web Development',
            'Data Structures & Algorithms',
            'Google Cloud Fundamentals',
            'Professional Foundations',
            'B2B Sales',
          ].map((certification, index) => (
            <Grid item key={index}>
              <Chip label={certification} color="primary" variant="outlined" />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ marginY: 6 }} />

        {/* Hobbies Section */}
        <Typography variant="h5" sx={{ color: 'primary.main', marginBottom: 4, textAlign: 'center' }}>
          Hobbies & Interests
        </Typography>
        <Box sx={{ textAlign: 'center', lineHeight: 1.8 }}>
          <Typography variant="body1">
            <strong>Tech Enthusiast:</strong> Exploring AI, ML, and emerging web technologies.
          </Typography>
          <Typography variant="body1">
            <strong>Outdoor Activities:</strong> Enjoy hiking and road trips to unwind.
          </Typography>
          <Typography variant="body1">
            <strong>Personal Growth:</strong> Constantly learning through books and online courses.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default AboutMe;
