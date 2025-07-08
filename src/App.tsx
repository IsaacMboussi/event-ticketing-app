import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Global, css } from '@emotion/react';
import HomePage from './pages/HomePage';
import EventDetailsPage from './pages/EventDetailsPage';
import CreateEventPage from './pages/CreateEventPage';
import CategoryPage from './pages/CategoryPage';
import Navbar from './components/Navbar';
import UserProfilePage from './pages/UserProfilePage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b388ff',
      light: '#e7b9ff',
      dark: '#805acb',
    },
    secondary: {
      main: '#00e676',
      light: '#66ffa6',
      dark: '#00b248',
    },
    background: {
      default: '#0a0a0a',
      paper: 'rgba(30, 30, 30, 0.8)',
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    subtitle2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    body1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 400,
      letterSpacing: '0.01em',
    },
    body2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 400,
      letterSpacing: '0.01em',
    },
    button: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          padding: '10px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #b388ff, #e7b9ff)',
          boxShadow: '0 4px 20px rgba(179, 136, 255, 0.3)',
          '&:hover': {
            background: 'linear-gradient(45deg, #805acb, #b388ff)',
            boxShadow: '0 6px 25px rgba(179, 136, 255, 0.4)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            background: 'rgba(179, 136, 255, 0.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: 'rgba(30, 30, 30, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(179, 136, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 30px rgba(179, 136, 255, 0.2)',
            border: '1px solid rgba(179, 136, 255, 0.2)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.3s ease',
            '&:hover': {
              '& fieldset': {
                borderColor: 'rgba(179, 136, 255, 0.4)',
              },
            },
            '&.Mui-focused': {
              '& fieldset': {
                borderColor: '#b388ff',
                boxShadow: '0 0 0 4px rgba(179, 136, 255, 0.1)',
              },
            },
          },
        },
      },
    },
  },
});

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
    100% {
      transform: translateY(0px) rotate(0deg);
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(179, 136, 255, 0.4);
    }
    70% {
      box-shadow: 0 0 0 20px rgba(179, 136, 255, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(179, 136, 255, 0);
    }
  }

  @keyframes neon {
    0% {
      text-shadow: 0 0 5px #b388ff, 0 0 10px #b388ff, 0 0 15px #b388ff;
    }
    50% {
      text-shadow: 0 0 10px #b388ff, 0 0 20px #b388ff, 0 0 30px #b388ff;
    }
    100% {
      text-shadow: 0 0 5px #b388ff, 0 0 10px #b388ff, 0 0 15px #b388ff;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, #1a1a2e 0%, #0a0a1a 50%, #000000 100%);
    z-index: -2;
  }

  body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(45deg, rgba(179, 136, 255, 0.15), rgba(231, 185, 255, 0.1)),
      radial-gradient(circle at 20% 20%, rgba(179, 136, 255, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(128, 90, 203, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(179, 136, 255, 0.05) 0%, transparent 70%);
    background-size: 400% 400%, 100% 100%, 100% 100%, 100% 100%;
    animation: gradient 20s ease infinite;
    z-index: -1;
    opacity: 0.9;
  }

  .cyber-grid {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(179, 136, 255, 0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(179, 136, 255, 0.15) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: -1;
    opacity: 0.3;
    transform: perspective(500px) rotateX(60deg);
    transform-origin: top;
  }

  .cyber-grid::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  }

  .cyber-grid::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 0%, rgba(179, 136, 255, 0.2) 50%, transparent 100%);
    animation: gradient 15s ease infinite;
  }

  .cyber-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }

  .cyber-particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #b388ff;
    border-radius: 50%;
    animation: float 4s ease-in-out infinite;
    opacity: 0.8;
    box-shadow: 0 0 10px rgba(179, 136, 255, 0.6);
  }

  .cyber-particle::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: radial-gradient(circle, #b388ff 0%, transparent 70%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  .cyber-particle:nth-child(3n) {
    background: #e7b9ff;
    box-shadow: 0 0 10px rgba(231, 185, 255, 0.6);
  }

  .cyber-particle:nth-child(3n)::before {
    background: radial-gradient(circle, #e7b9ff 0%, transparent 70%);
  }

  .cyber-particle:nth-child(3n+1) {
    background: #805acb;
    box-shadow: 0 0 10px rgba(128, 90, 203, 0.6);
  }

  .cyber-particle:nth-child(3n+1)::before {
    background: radial-gradient(circle, #805acb 0%, transparent 70%);
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(179, 136, 255, 0.3);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(179, 136, 255, 0.5);
  }

  /* Selection color */
  ::selection {
    background: rgba(179, 136, 255, 0.3);
    color: #fff;
  }
`;

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={globalStyles} />
        <div className="cyber-grid" />
        <div className="cyber-particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="cyber-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/event/:id" element={<EventDetailsPage />} />
            <Route path="/create-event" element={<CreateEventPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App; 