import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ 
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 255, 157, 0.2)',
    }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'primary.main',
            fontFamily: 'Orbitron, sans-serif',
            '&:hover': {
              color: 'primary.light',
            },
          }}
        >
          EventTicketing
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{
              color: 'primary.main',
              '&:hover': {
                color: 'primary.light',
                background: 'rgba(0, 255, 157, 0.1)',
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/create-event"
            sx={{
              color: 'primary.main',
              '&:hover': {
                color: 'primary.light',
                background: 'rgba(0, 255, 157, 0.1)',
              },
            }}
          >
            Create Event
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 