import React from 'react';
import { Card, CardContent, Typography, Box, Button, Collapse, CssBaseline } from '@mui/material';
import { styled, ThemeProvider } from '@mui/system';
import CustomAppBar from './customAppBar'; // Import your custom AppBar
import Footer from './footer';
import { createTheme } from '@mui/material/styles';

const ExperienceCard = styled(Card)({
  margin: '20px 0',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Subtle shadow
  border: '1px solid #7F8C8D', // Border matching the background
  transition: 'transform 0.3s ease-in-out',
  backgroundColor: 'inherit', // Inherit the background color from the parent container
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
  },
});

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

const JobTitle = styled(Typography)({
  fontWeight: '600',
  fontSize: '1.2rem',
});

const projects = [
  {
    title: 'TechBiz Limited, Mombasa',
    role: 'Tech Sales Executive',
    overview: 'Played a key role in identifying client requirements and delivering custom tech solutions, including ERP systems, custom apps, and cloud services.',
    contributions: [
      'Worked closely with clients and internal tech teams to develop tailored solutions, bridging the gap between technical offerings and business needs.',
      'Presented compelling, tech-driven solutions that aligned with client goals and enhanced operational efficiencies.',
    ],
    techStack: 'ERP Systems, Custom Apps, Cloud Services',
    result: 'Enhanced client operations by delivering innovative solutions tailored to business needs.',
  },
  {
    title: 'Hotel Management System (CloudHaven)',
    role: 'Lead Mobile Application Developer and Backend Integration',
    overview: 'Designed and implemented a mobile application for a SaaS-based hotel management system catering to various types of lodging, from BnBs to luxury hotels.',
    contributions: [
      'Developed the “Explore Amenities” and “Booking” modules featuring local attractions, user reviews, and availability filters.',
    ],
    techStack: 'Flutter, Node.js, Express.js, MySQL',
    result: 'Delivered a s  eamless user interface that enabled real-time reservation updates and facility exploration, enhancing the guest experience.',
  },
  {
    title: 'Point of Sale (POS) & Inventory Management System',
    role: 'Full-Stack Developer',
    overview: 'Built a comprehensive POS system with advanced inventory and sales management features.',
    contributions: [
      'Developed modules for product management, inventory tracking, and sales reporting.',
      'Created a user-friendly interface for retail staff.',
    ],
    techStack: 'J2EE, JSP, Servlets, MySQL',
    result: 'Improved operational efficiency by 25% through real-time inventory updates and streamlined sales processing.',
  },
  {
    title: 'Student Attendance System',
    role: 'Front-End and Back-End Developer',
    overview: 'Built a system to simplify and automate attendance management for educational institutions.',
    contributions: [
      'Integrated real-time synchronization and attendance tracking.',
      'Automated notifications for missing data.',
    ],
    techStack: 'React, Node.js, Express, MySQL',
    result: 'Reduced manual errors and improved efficiency with an accessible interface for faculty and students.',
  },
  {
    title: 'Automotive Website',
    role: 'Full-Stack Developer',
    overview: 'Developed a dynamic automotive website with vehicle listing and user account functionalities.',
    contributions: [
      'Implemented search, filter, and detailed listing functionalities.',
      'Created a streamlined sign-up and login system.',
    ],
    techStack: 'React, Node.js, Express.js, MySQL',
    result: 'Improved user engagement and retention by 30% compared to the client’s previous static site.',
  },
];

const ExperiencePage = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomAppBar /> {/* Your Custom AppBar here */}

      {/* Page content with padding to prevent overlap */}
      <Box sx={{ padding: '4rem 2rem', backgroundColor: '#F4F4F4' }}>
        <Typography variant="h3" align="center" sx={{ marginBottom: '20px' }}>
          Professional Experience
        </Typography>

        {projects.map((project, index) => (
          <ExperienceCard key={index} elevation={3}>
            <CardContent>
              <JobTitle>{project.title}</JobTitle>
              <Typography variant="body2" color="textSecondary">
                Role: {project.role}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
                {project.overview}
              </Typography>
              <Button
                onClick={() => handleClick(index)}
                sx={{ marginTop: '20px' }}
                variant="contained"
                color="info"
              >
                {openIndex === index ? 'Show Less' : 'Show More'}
              </Button>

              <Collapse in={openIndex === index}>
                <Box sx={{ marginTop: '10px' }}>
                  {project.contributions.map((item, idx) => (
                    <Typography key={idx} variant="body2" sx={{ marginBottom: '10px' }}>
                      - {item}
                    </Typography>
                  ))}
                  <Typography variant="body2">
                    <strong>Tech Stack:</strong> {project.techStack}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: '10px' }}>
                    <strong>Result:</strong> {project.result}
                  </Typography>
                </Box>
              </Collapse>
            </CardContent>
          </ExperienceCard>
        ))}
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default ExperiencePage;
