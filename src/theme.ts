import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00ff9d',
      light: '#33ffb1',
      dark: '#00b26d',
    },
    secondary: {
      main: '#ff00ff',
      light: '#ff33ff',
      dark: '#b200b2',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#00ff9d',
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      textShadow: '0 0 10px #00ff9d',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      textShadow: '0 0 8px #00ff9d',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      textShadow: '0 0 6px #00ff9d',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, #00ff9d, #ff00ff)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: 1,
          },
          '&:hover::before': {
            opacity: 0.2,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
            transform: 'rotate(45deg)',
            transition: 'transform 0.5s ease',
            zIndex: 2,
          },
          '&:hover::after': {
            transform: 'rotate(45deg) translate(50%, 50%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
          boxShadow: '0 0 20px rgba(0, 255, 157, 0.1)',
          border: '1px solid rgba(0, 255, 157, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 0 30px rgba(0, 255, 157, 0.2)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 255, 157, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 255, 157, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00ff9d',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #1a1a1a, #2a2a2a)',
          boxShadow: '0 0 20px rgba(0, 255, 157, 0.1)',
          borderBottom: '1px solid rgba(0, 255, 157, 0.1)',
        },
      },
    },
  },
}); 