// src/globalStyles.js
import { createTheme } from '@mui/material';

// Define the custom theme
export const theme = createTheme({
  palette: {
    primary: {
      main: '#3498DB',
    },
    secondary: {
      main: '#2ECC71',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

// Global styles
export const globalStyles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: '"Roboto", sans-serif',
  },
  '*': {
    boxSizing: 'border-box',
  },
};
