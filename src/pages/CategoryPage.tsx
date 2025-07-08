import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Skeleton,
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn,
  CalendarToday,
  AttachMoney,
  Favorite,
  FavoriteBorder,
} from '@mui/icons-material';

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  price: number;
  category: string;
  isFavorite?: boolean;
}

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Simulate API call
    const fetchEvents = async () => {
      setLoading(true);
      try {
        // Simulated API response
        const response = await new Promise<Event[]>((resolve) => {
          setTimeout(() => {
            resolve([
              {
                id: 1,
                title: 'Summer Music Festival',
                description: 'A three-day music festival featuring top artists from around the world.',
                image: 'https://source.unsplash.com/random/800x600/?concert',
                date: '2024-07-15',
                location: 'Central Park, New York',
                price: 299.99,
                category: 'Music',
              },
              // Add more mock events here
            ]);
          }, 1000);
        });

        setEvents(response.filter(event => event.category === category));
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [category]);

  const handleEventClick = (eventId: number) => {
    navigate(`/event/${eventId}`);
  };

  const handleFavoriteClick = (eventId: number) => {
    setEvents(events.map(event =>
      event.id === eventId
        ? { ...event, isFavorite: !event.isFavorite }
        : event
    ));
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    event.location.toLowerCase().includes(location.toLowerCase())
  );

  const EventCardSkeleton = () => (
    <Grid item component="div" xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Skeleton variant="rectangular" height={200} />
        <CardContent>
          <Skeleton variant="text" height={40} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Skeleton variant="rectangular" width={100} height={36} />
            <Skeleton variant="rectangular" width={100} height={36} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 2,
            background: 'linear-gradient(45deg, #b388ff, #e7b9ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          {category} Events
        </Typography>
        <Grid container spacing={2}>
          <Grid item component="div" xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(179, 136, 255, 0.05)',
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: 'rgba(179, 136, 255, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(179, 136, 255, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#b388ff',
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#b388ff' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item component="div" xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Filter by location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(179, 136, 255, 0.05)',
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: 'rgba(179, 136, 255, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(179, 136, 255, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#b388ff',
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn sx={{ color: '#b388ff' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        {loading ? (
          Array.from(new Array(6)).map((_, index) => (
            <EventCardSkeleton key={index} />
          ))
        ) : filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Grid item component="div" xs={12} sm={6} md={4} key={event.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(179, 136, 255, 0.2)',
                  },
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  border: '1px solid rgba(179, 136, 255, 0.1)',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={event.image}
                  alt={event.title}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: '1px solid rgba(179, 136, 255, 0.1)',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                      color: '#fff',
                      fontWeight: 'bold',
                      mb: 2,
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)' }}
                  >
                    {event.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOn sx={{ color: '#b388ff', mr: 1 }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {event.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CalendarToday sx={{ color: '#b388ff', mr: 1 }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {new Date(event.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AttachMoney sx={{ color: '#b388ff', mr: 1 }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      ${event.price.toFixed(2)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button
                      variant="contained"
                      onClick={() => handleEventClick(event.id)}
                      sx={{
                        background: 'linear-gradient(45deg, #b388ff, #e7b9ff)',
                        color: '#fff',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #805acb, #b388ff)',
                        },
                      }}
                    >
                      View Details
                    </Button>
                    <IconButton
                      onClick={() => handleFavoriteClick(event.id)}
                      sx={{ color: event.isFavorite ? '#b388ff' : 'rgba(255, 255, 255, 0.7)' }}
                    >
                      {event.isFavorite ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box
              sx={{
                textAlign: 'center',
                py: 4,
                backgroundColor: 'rgba(179, 136, 255, 0.05)',
                borderRadius: 2,
                border: '1px solid rgba(179, 136, 255, 0.1)',
              }}
            >
              <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                No events found matching your criteria
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default CategoryPage; 