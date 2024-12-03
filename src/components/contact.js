import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  Snackbar,
  Alert,
  CssBaseline,
} from '@mui/material';
import { styled, ThemeProvider } from '@mui/system';
import CustomAppBar from './customAppBar'; // Assuming CustomAppBar is defined
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from './footer';
import { createTheme } from '@mui/material/styles';

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

// Custom styles for the form card
const FormCard = styled(Card)(({ theme }) => ({
  padding: '20px',
  marginTop: '30px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  [theme.breakpoints.down('sm')]: {
    padding: '15px', // Adjust padding on smaller screens
  },
}));

// Custom styles for interactive elements
const ContactButton = styled(Button)({
  marginTop: '20px',
  backgroundImage: 'linear-gradient(to right, #002B5B, #00588A)', // Same gradient as HeroSection
  color: '#E1E9F1',
  '&:hover': {
    backgroundColor: '#1D6FA5',
  },
});

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const { name, email, message } = formData; // Destructure from formData state
  
    try {
      const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://deelnakilel.vercel.app'
    : 'http://localhost:3000';

      const response = await fetch(`${baseURL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
  
      const result = await response.json();
      if (response.ok) {
        setSnackbar({ open: true, message: result.message, severity: 'success' });
      } else {
        setSnackbar({ open: true, message: result.error, severity: 'error' });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'An error occurred while sending your message. Please try again later.',
        severity: 'error',  
      });
    }
  };  
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomAppBar />

      <Box sx={{ padding: '4rem 0', backgroundColor: theme.palette.background.default, minHeight: '100vh', margin: 0 }}>
        <Typography variant="h3" align="center" sx={{ marginBottom: '30px', color: theme.palette.text.primary }}>
          Contact Me
        </Typography>

        {/* Contact Information Section */}
        <Grid container spacing={3} justifyContent="center" sx={{ padding: '0 2rem' }}>
          {/* Email Card */}
          <Grid item xs={12} md={4}>
            <Card sx={{ padding: '20px', textAlign: 'center', margin: '0 10px' }}>
              <EmailIcon color="primary" sx={{ fontSize: '40px' }} />
              <Typography variant="h6" sx={{ marginTop: '10px' }}>
                Email
              </Typography>
              <Typography variant="body1">kileldylan@gmail.com</Typography>
            </Card>
          </Grid>

          {/* Phone Card */}
          <Grid item xs={12} md={4}>
            <Card sx={{ padding: '20px', textAlign: 'center', margin: '0 10px' }}>
              <PhoneIcon color="primary" sx={{ fontSize: '40px' }} />
              <Typography variant="h6" sx={{ marginTop: '10px' }}>
                Phone
              </Typography>
              <Typography variant="body1">+254 758 715 788</Typography>
            </Card>
          </Grid>

          {/* Location Card */}
          <Grid item xs={12} md={4}>
            <Card sx={{ padding: '20px', textAlign: 'center', margin: '0 10px' }}>
              <LocationOnIcon color="primary" sx={{ fontSize: '40px' }} />
              <Typography variant="h6" sx={{ marginTop: '10px' }}>
                Location
              </Typography>
              <Typography variant="body1">Nairobi, Kenya</Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Contact Form Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <FormCard sx={{ width: '100%', maxWidth: '600px' }}>
            <Typography variant="h5" align="center" gutterBottom sx={{ color: theme.palette.text.primary }}>
              Send a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
              />
              <ContactButton fullWidth type="submit" variant="contained">
                Send Message
              </ContactButton>
            </form>
          </FormCard>
        </Box>

        {/* Snackbar Notification */}
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

export default ContactPage;
