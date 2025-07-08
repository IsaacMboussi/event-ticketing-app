import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  Button,
  Box,
  Chip,
  Divider,
  TextField,
  IconButton,
  Paper,
} from '@mui/material';
import {
  LocationOn,
  CalendarToday,
  AttachMoney,
  Share,
  Favorite,
  FavoriteBorder,
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  price: number;
  image: string;
  category: string;
}

const fetchEvent = async (id: string): Promise<Event> => {
  // Simulated API call - replace with actual API
  const events = await fetchEvents();
  const event = events.find(e => e.id === id);
  if (!event) throw new Error('Event not found');
  return event;
};

const EventDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const { data: event, isLoading, error } = useQuery({
    queryKey: ['event', id],
    queryFn: () => fetchEvent(id!),
  });

  if (isLoading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Typography>Loading event details...</Typography>
        </Box>
      </Container>
    );
  }

  if (error || !event) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Typography variant="h5" color="error" gutterBottom>
            Event not found
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/')}
            sx={{
              background: 'linear-gradient(45deg, #b388ff, #805acb)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(45deg, #805acb, #b388ff)',
              },
            }}
          >
            Return to Home
          </Button>
        </Box>
      </Container>
    );
  }

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const handleCheckout = () => {
    navigate(`/checkout?eventId=${event.id}&quantity=${quantity}`);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(179, 136, 255, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              <CardMedia
                component="img"
                height="400"
                image={event.image}
                alt={event.title}
                sx={{ objectFit: 'cover' }}
              />
              <Box sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Chip
                    label={event.category}
                    sx={{
                      backgroundColor: 'rgba(179, 136, 255, 0.1)',
                      color: 'primary.main',
                      mr: 2,
                    }}
                  />
                  <IconButton
                    onClick={() => setIsFavorite(!isFavorite)}
                    sx={{ ml: 'auto' }}
                  >
                    {isFavorite ? (
                      <Favorite sx={{ color: 'primary.main' }} />
                    ) : (
                      <FavoriteBorder sx={{ color: 'primary.main' }} />
                    )}
                  </IconButton>
                  <IconButton>
                    <Share sx={{ color: 'primary.main' }} />
                  </IconButton>
                </Box>
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
                  {event.title}
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                  {event.description}
                </Typography>
                <Divider sx={{ my: 3, borderColor: 'rgba(179, 136, 255, 0.1)' }} />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CalendarToday sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {format(new Date(event.date), 'MMMM d, yyyy')}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {event.location}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AttachMoney sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        ${event.price}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3,
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(179, 136, 255, 0.1)',
                borderRadius: '16px',
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                Purchase Tickets
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" gutterBottom sx={{ color: 'text.secondary' }}>
                  Quantity
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    sx={{ color: 'primary.main' }}
                  >
                    -
                  </IconButton>
                  <TextField
                    value={quantity}
                    onChange={(e) => handleQuantityChange(Number(e.target.value))}
                    type="number"
                    inputProps={{ min: 1, max: 10 }}
                    sx={{
                      width: '60px',
                      mx: 1,
                      '& .MuiOutlinedInput-root': {
                        color: 'text.primary',
                        '& fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                  <IconButton
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= 10}
                    sx={{ color: 'primary.main' }}
                  >
                    +
                  </IconButton>
                </Box>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" gutterBottom sx={{ color: 'text.secondary' }}>
                  Total Price
                </Typography>
                <Typography variant="h5" sx={{ color: 'primary.main' }}>
                  ${(event.price * quantity).toFixed(2)}
                </Typography>
              </Box>
              <Button
                fullWidth
                variant="contained"
                onClick={handleCheckout}
                sx={{
                  background: 'linear-gradient(45deg, #b388ff, #805acb)',
                  color: 'white',
                  py: 1.5,
                  '&:hover': {
                    background: 'linear-gradient(45deg, #805acb, #b388ff)',
                  },
                }}
              >
                Proceed to Checkout
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EventDetailsPage; 