import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Chip, Divider, ThemeProvider, CssBaseline } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CustomAppBar from './customAppBar';
import Footer from './footer';
import { createTheme } from '@mui/material/styles';

const EducationPage = () => {
  const educationDetails = [
    {
      title: 'Certificate in Backend Development',
      school: 'ALX Africa',
      dates: '2024 - present',
      description: 'Focused on backend development and API integration.',
    },
    {
      title: 'Certificate in Sales and Business Development',
      school: 'Yusudi Sales Academy',
      dates: 'August 2023 - October 2023',
      description: 'Enhanced sales and business development skills.',
    },
    {
      title: 'Diploma in Software Engineering',
      school: 'Kenya Institute of Software Engineering',
      dates: '2021 - 2023',
      description: 'Focused on enterprise development and application programming.',
    },
    {
      title: 'KCSE',
      school: 'Kamagut High School',
      dates: '2016 - 2019',
      description: 'Completed high school with a focus on sciences and mathematics.',
    },
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: '#3498DB',
      },
      background: {
        default: '#F4F4F4',
      },
      text: {
        primary: '#2C3E50',
      },
    },
    typography: {
      fontFamily: 'Montserrat, Arial, sans-serif', // Set Montserrat as the global font
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <CustomAppBar/>
    <Box sx={{ padding: '2rem', backgroundColor: '#F4F4F4' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" align="center" sx={{ marginBottom: '20px' }}>
          Education & Certifications
        </Typography>

        {educationDetails.map((edu, index) => (
          <Card
            key={index}
            sx={{
              margin: '20px 0',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.02)',
              },
            }}
            elevation={3}
          >
            <CardContent>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <SchoolIcon color="primary" fontSize="large" />
                </Grid>
                <Grid item>
                  <Typography variant="h6">{edu.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {edu.school} ({edu.dates})
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {edu.description}
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ marginTop: '20px' }} />
              <Box sx={{ marginTop: '10px' }}>
                <Chip label="Certificate" color="primary" size="small" />
              </Box>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </Box>
    <Footer/>
    </ThemeProvider>  );
};

export default EducationPage;
