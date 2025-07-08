import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Event, Person, ShoppingCart } from '@mui/icons-material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ 
          background: 'linear-gradient(90deg, rgba(26, 26, 26, 0.95), rgba(42, 42, 42, 0.95))',
          borderBottom: '1px solid rgba(0, 255, 157, 0.2)',
          boxShadow: '0 0 20px rgba(0, 255, 157, 0.1)',
        }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              color: 'primary.main',
              textShadow: '0 0 10px rgba(0, 255, 157, 0.5)',
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 700,
              letterSpacing: '2px',
            }}
          >
            <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              EVENTHUB
            </RouterLink>
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              component={RouterLink}
              to="/"
              startIcon={<Event />}
              sx={{
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                  textShadow: '0 0 10px rgba(0, 255, 157, 0.5)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Events
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/create-event"
              startIcon={<Event />}
              sx={{
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                  textShadow: '0 0 10px rgba(0, 255, 157, 0.5)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Create Event
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/profile"
              startIcon={<Person />}
              sx={{
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                  textShadow: '0 0 10px rgba(0, 255, 157, 0.5)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Profile
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/checkout"
              startIcon={<ShoppingCart />}
              sx={{
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                  textShadow: '0 0 10px rgba(0, 255, 157, 0.5)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Cart
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ flex: 1, py: 4 }}>
        {children}
      </Container>
      <Box 
        component="footer" 
        sx={{ 
          py: 3, 
          bgcolor: 'background.paper',
          borderTop: '1px solid rgba(0, 255, 157, 0.2)',
          boxShadow: '0 0 20px rgba(0, 255, 157, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="body2" 
            color="text.secondary" 
            align="center"
            sx={{
              textShadow: '0 0 5px rgba(0, 255, 157, 0.3)',
            }}
          >
            © {new Date().getFullYear()} EventHub. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout; 