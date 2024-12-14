import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Snackbar,
  Alert,
  CssBaseline,
} from '@mui/material';
import { styled, ThemeProvider } from '@mui/system';
import CustomAppBar from './customAppBar'; // Assuming CustomAppBar is defined
import Footer from './footer';
import { createTheme } from '@mui/material/styles';

// Updated image references from public/images
const theme = createTheme({
  palette: {
    primary: { main: '#3498DB' },
    background: { default: '#F4F4F4' },
    text: { primary: '#2C3E50' },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif', // Set Montserrat as the global font
  },
});

const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '20px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  marginBottom: '20px',
}));

const ProjectButton = styled(Button)({
  marginTop: '20px',
  backgroundImage: 'linear-gradient(to right, #002B5B, #00588A)', // Same gradient as HeroSection
  color: '#E1E9F1',
  '&:hover': { backgroundColor: '#1D6FA5' },
});

const ProjectPage = () => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

  const projects = [
    {
      id: 1,
      title: 'POS System',
      description:
        'A point-of-sale system featuring product management, inventory tracking, and sales analytics. Built with robust data handling and seamless user interaction.',
      tags: ['React', 'Node.js', 'MySQL'],
      image: '/images/Flowpay.jpg', // Updated to public path
      technologies: ['React', 'Node.js', 'MySQL'],
      role: 'Full Stack Developer',
      outcome: 'Improved client operational efficiency by 40%.',
      link: 'https://github.com/kileldylan/flowpay',
    },
    {
      id: 2,
      title: 'Edulog Student Attendance System',
      description:
        'A student attendance tracking app integrating real-time data entry and automated attendance reports.',
      tags: ['React', 'Node.js', 'MySQL'],
      image: '/images/Edulog.jpg', // Updated to public path
      technologies: ['React', 'Node.js', 'MySQL'],
      role: 'Full Stack Developer',
      outcome: 'Streamlined attendance logging for over 500 students.',
      link: 'https://github.com/kileldylan/edulog_ameer',
    },
    {
      id: 3,
      title: 'Wahome Automotive Website',
      description:
        'A dynamic website for Wahome Automotive, showcasing services, vehicle listings, and online appointment booking.',
      tags: ['React', 'Node.js', 'MySQL'],
      image: '/images/wahome_logo.jpg', // Updated to public path
      technologies: ['React', 'Node.js', 'MySQL'],
      role: 'Frontend Developer',
      outcome: 'Increased client engagement by 70%.',
      link: 'https://github.com/kileldylan/wahome_automotives',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description:
        'A personalized portfolio website showcasing my projects, skills, and contact information. Features an interactive UI for seamless navigation.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: '/images/portfolio-image.jpg', // Updated to public path
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      role: 'Full Stack Developer',
      outcome: 'Attracted multiple job interviews from potential clients.',
      link: 'https://github.com/kileldylan/portfolio',
    },
    {
      id: 5,
      title: 'CloudHaven HMS',
      description:
        'A SaaS hotel management system with modules for bookings, amenities exploration, and staff management.',
      tags: ['Flutter', 'Node.js', 'MySQL'],
      image: '/images/cloudhaven.jpg', // Updated to public path
      technologies: ['Flutter', 'Node.js', 'MySQL'],
      role: 'Lead Developer',
      outcome: 'Enabled automation of hotel operations, increasing efficiency by 60%.',
      link: 'https://github.com/kileldylan/cloudhaven',
    },
    {
      id: 6,
      title: 'Electra Voting App',
      description:
        'A secure blockchain-based voting app leveraging Solana for transparent and efficient elections.',
      tags: ['Flutter', 'Node.js', 'MySQL', 'Solana Blockchain'],
      image: '/images/Electra.jpg', // Updated to public path
      technologies: ['Flutter', 'Node.js', 'MySQL', 'Solana Blockchain'],
      role: 'Blockchain Developer',
      outcome: 'Provided a secure and tamper-proof voting platform.',
      link: 'https://github.com/kileldylan/cloudhaven',
    },
  ];

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomAppBar />
      <Box sx={{ padding: '4rem 0', backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
        <Typography variant="h3" align="center" sx={{ marginBottom: '30px', color: theme.palette.text.primary }}>
          My Projects
        </Typography>
        <Grid container spacing={3} justifyContent="center" sx={{ padding: '0 2rem' }}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ height: '200px', width: '100%', objectFit: 'cover', borderRadius: '8px' }}
                />
                <CardContent sx={{ backgroundColor: '#F7F7F7', padding: '20px' }}>
                  <Typography variant="h5" gutterBottom sx={{ color: theme.palette.text.primary }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.tags.map((tag, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          backgroundImage: 'linear-gradient(to right, #002B5B, #00588A)',
                          color: '#E1E9F1',
                          padding: '5px 10px',
                          borderRadius: '20px',
                          fontSize: '14px',
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
                    <strong>Technologies:</strong> {project.technologies.join(', ')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
                    <strong>Role:</strong> {project.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
                    <strong>Outcome:</strong> {project.outcome}
                  </Typography>
                  <ProjectButton
                    fullWidth
                    variant="contained"
                    href={project.link}
                    target="_blank"
                  >
                    View Project
                  </ProjectButton>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
        <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default ProjectPage;
