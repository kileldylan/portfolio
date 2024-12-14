import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/system';
import CustomAppBar from './customAppBar';
import Footer from './footer';
import { GlobalStyles, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Custom styling for Hero Section
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(to right, #002B5B, #00588A)',
  color: '#E1E9F1',
  padding: '20px 15px', // Reduced padding for better responsiveness
  textAlign: 'center',
  minHeight: '40vh', // Adjusted height for smaller appearance
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    minHeight: '30vh', // Reduced height for small devices
    padding: '10px', // Less padding on small screens
  },
}));

const SkillsSection = styled(Box)({
  backgroundImage: 'linear-gradient(to right, #002B5B, #00588A)', // Same gradient as HeroSection
  padding: '60px 20px',
  color: '#E1E9F1',
});

const SkillCategory = styled(Box)({
  margin: '20px 0',
});

const SkillsList = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '12px',
});

const TestimonialSection = styled(Box)({
  backgroundColor: '#F4F4F4',
  padding: '60px 20px',
});

const TestimonialCard = styled(Card)({
  backgroundColor: '#E8F1F8',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 43, 91, 0.1)',
});


const techSkills = [
  'React', 'Node.js', 'MySQL', 'Flutter', 'Material-UI', 'API Design',
  'Figma', 'Blockchain Programming', 'Express.js', 'RESTful APIs'
];

const softSkills = [
  'Team Collaboration', 'Critical Thinking', 'Adaptability',
  'Problem-Solving', 'Time Management', 'Client Communication',
  'Project Management', 'Creative Thinking'
];

const projects = [
  {
    id: 1,
    title: 'CloudHaven',
    description:
      'A SaaS-based hotel management system that streamlines booking, user profiles, and hotel operations for small and large businesses.',
    tags: ['Flutter', 'Node.js', 'MySQL'],
    image: '/images/cloudhaven.jpg', // Updated to public path
    link: 'https://github.com/kileldylan/cloudhaven',
  },
  {
    id: 2,
    title: 'Wahome Automotives',
    description:
      'An automated attendance management system designed to simplify tracking and reporting for educational institutions.',
    tags: ['React', 'Node.js', 'MYSQL', 'API Design'],
    image: '/images/wahome_logo.jpg', // Updated to public path
    link: 'https://github.com/kileldylan/wahome_automotives',
  },
  {
    id: 3,
    title: 'Edulog Attendance System',
    description:
      'A car sales platform that allows users to browse, filter, and connect with sellers for a seamless vehicle purchasing experience.',
    tags: ['React', 'Node.js', 'MySQL'],
    image: '/images/Edulog.jpg', // Updated to public path
    link: 'https://github.com/kileldylan/edulog_ameer',
  },
];

const testimonials = [
  {
    name: 'Andersone Kitheka',
    feedback:
      "Working with Deelan was an absolute pleasure. His ability to transform ideas into scalable solutions is unmatched!",
  },
  {
    name: 'Jeffery Barrows',
    feedback:
      "Deelan's dedication and creativity brought our project to life. Highly recommend him for any development work!",
  },
  {
    
    name: 'Sarah Kerubo',
    feedback:
      "Deelan’s expertise and innovation were essential in making our project successful. His problem-solving skills and attention to detail are unmatched, making him an invaluable asset to any team.",
  },
];

// Memoized Footer and AppBar to avoid re-renders
const MemoizedFooter = React.memo(Footer);
const MemoizedCustomAppBar = React.memo(CustomAppBar);

// Define your custom theme here
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



const Home = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>

        {/* Helmet for managing <head> */}
        <Helmet>
          {/* Page Title */}
          <title>Deelan Kilel | Web Developer Portfolio</title>

          {/* Meta Description */}
          <meta
            name="description"
            content="Deelan Kilel - A passionate web developer specializing in React, Node.js, and innovative digital solutions. Explore my projects and experience."
          />

          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Deelan Kilel",
              "jobTitle": "Web Developer",
              "url": "https://deelankilel.vercel.app",
              "sameAs": [
                "https://www.linkedin.com/in/deelan-kilel",
                "https://github.com/deelankilel"
              ]
            })}
          </script>
        </Helmet>

        {/* Global styles */}
        <GlobalStyles
          styles={{
            'html, body': {
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
              height: '100%',
            },
            body: {
              overflowX: 'hidden',
            },
          }}
        />
        <CssBaseline /> {/* Reset default styles from Material-UI */}

        <MemoizedCustomAppBar />

        {/* Hero Section */}
        <HeroSection>
          <Container sx={{ padding: 0, maxWidth: '100%' }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom>
                  Hi, I'm Deelan Kilel
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  Proficient and versatile Software Developer with extensive experience in front-end
                  development using React and back-end development with Node.js and Express. Skilled in
                  crafting highly interactive, scalable applications and data-driven solutions that improve
                  functionality and user experience. Proficient with MySQL for relational database
                  management and experienced in building dynamic, feature-rich systems that align with
                  modern web standards. Demonstrated ability to take projects from concept through to
                  deployment, ensuring robust code, efficient workflows, and effective collaboration within
                  cross-functional teams.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src= '/images/kilel.jpg'
                  alt="Deelan Kilel"
                  loading="lazy"
                  style={{
                    width: '100%',
                    maxHeight: '300px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </HeroSection>

        {/* Featured Projects */}
        <Container sx={{ margin: '60px auto' }}>
          <Typography variant="h4" gutterBottom align="center">
            Featured Projects
          </Typography>
          <Grid container spacing={4} id="projects">
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card
                  elevation={3}
                  sx={{
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      height: '180px',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '4px',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.tags.map((tag, idx) => (
                        <Chip key={idx} label={tag} color="primary" size="small" />
                      ))}
                    </Box>
                    <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      marginTop: 2,
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      color: '#FFFFFF', // Pure white text for readability
                      border: '2px solid #007BFF', // Vivid blue border
                      background: 'linear-gradient(to right, #007BFF, #00C6FF)', // Light blue gradient
                      boxShadow: '0 4px 6px rgba(0, 123, 255, 0.5)', // Subtle glow
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(to right, #0056B3, #004085)', // Darker blue gradient
                        color: '#FFFFFF', // Retain white text
                        borderColor: '#004085',
                        boxShadow: '0 6px 12px rgba(0, 64, 133, 0.8)', // Enhanced glow
                      },
                      '&:focus': {
                        outline: 'none',
                        boxShadow: '0 0 8px rgba(0, 123, 255, 0.8)', // Focus highlight
                      },
                    }}
                    href={project.link}
                    target="_blank"
                  >
                    View Project
                  </Button>

                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

{/* Tech Stack & Skills Section */}
<SkillsSection>
          <Container>
            <Typography variant="h4" gutterBottom align="center">
              Tech Stack & Skills
            </Typography>
            
            {/* Technical Skills */}
            <SkillCategory>
              <Typography variant="h5" gutterBottom>
                Technical Skills
              </Typography>
              <SkillsList>
                {techSkills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    variant="filled"
                    sx={{
                      fontSize: '1rem',
                      padding: '8px 16px',
                      backgroundColor: '#0074B7',
                      color: '#FFFFFF',
                      '&:hover': {
                        backgroundColor: '#00588A',
                      },
                      
                    }}
                  />
                ))}
              </SkillsList>
            </SkillCategory>

            {/* Soft Skills */}
            <SkillCategory>
              <Typography variant="h5" gutterBottom>
                Soft Skills
              </Typography>
              <SkillsList>
                {softSkills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    variant="outlined"
                    sx={{
                      fontSize: '1rem',
                      padding: '8px 16px',
                      color: '#0098DB',
                      borderColor: '#0074B7',
                      '&:hover': {
                        backgroundColor: '#0098DB',
                        color: '#FFFFFF',
                      },                      
                    }}
                  />
                ))}
              </SkillsList>
            </SkillCategory>
          </Container>
        </SkillsSection>

      {/* Testimonials Section */}
      <TestimonialSection>
        <Container>
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#2C3E50' }}>
            Testimonials
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <TestimonialCard>
                  <CardContent>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                      "{testimonial.feedback}"
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      - {testimonial.name}
                    </Typography>
                  </CardContent>
                </TestimonialCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </TestimonialSection>

        {/* Footer */}
        <MemoizedFooter />
      </ThemeProvider>
    </div>
  );
};

export default Home;
