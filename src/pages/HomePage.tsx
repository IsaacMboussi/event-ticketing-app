import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  IconButton,
  CardActions,
  Skeleton,
  Chip,
  Fab,
  Zoom,
  Slider,
  Popover,
} from '@mui/material';
import { Search, LocationOn, CalendarToday, AttachMoney, ArrowForwardIos, ArrowBackIos, KeyboardArrowUp, FilterList } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import { format, isWithinInterval, parseISO } from 'date-fns';
import { useNavigate } from 'react-router-dom';

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

const categories = [
  'Music',
  'Sports',
  'Arts & Theater',
  'Family',
  'Comedy',
  'Technology',
  'Food & Drink',
  'Business',
  'Other'
];

const fetchEvents = async (): Promise<Event[]> => {
  // Simulated events data with more events per category
  const events: Event[] = [
    // Music Events
    {
      id: '1',
      title: 'Neon Beats Festival',
      description: 'A futuristic music festival featuring the best electronic artists.',
      date: '2024-06-15',
      location: 'Cyber City Arena',
      price: 99.99,
      image: 'https://source.unsplash.com/random/800x600?music',
      category: 'Music'
    },
    {
      id: '2',
      title: 'Synthetic Symphony',
      description: 'Orchestral performance with digital enhancements.',
      date: '2024-07-20',
      location: 'Digital Concert Hall',
      price: 79.99,
      image: 'https://source.unsplash.com/random/800x600?concert',
      category: 'Music'
    },
    {
      id: '3',
      title: 'Retro Wave Night',
      description: 'A night of 80s inspired synthwave music.',
      date: '2024-08-05',
      location: 'Neon Lounge',
      price: 49.99,
      image: 'https://source.unsplash.com/random/800x600?retro',
      category: 'Music'
    },
    {
      id: '4',
      title: 'Cyberpunk Jazz',
      description: 'Fusion of jazz and electronic music in a futuristic setting.',
      date: '2024-09-12',
      location: 'Jazz Hub',
      price: 59.99,
      image: 'https://source.unsplash.com/random/800x600?jazz',
      category: 'Music'
    },
    {
      id: '5',
      title: 'Digital DJ Battle',
      description: 'Competition between the best DJs in the city.',
      date: '2024-10-18',
      location: 'Battle Arena',
      price: 69.99,
      image: 'https://source.unsplash.com/random/800x600?dj',
      category: 'Music'
    },
    {
      id: '6',
      title: 'Holographic Opera',
      description: 'Classical opera with holographic performers.',
      date: '2024-11-25',
      location: 'Opera House',
      price: 89.99,
      image: 'https://source.unsplash.com/random/800x600?opera',
      category: 'Music'
    },
    {
      id: '7',
      title: 'Neon Rock Festival',
      description: 'Rock bands with cyberpunk aesthetics.',
      date: '2024-12-15',
      location: 'Rock Arena',
      price: 79.99,
      image: 'https://source.unsplash.com/random/800x600?rock',
      category: 'Music'
    },
    // Sports Events
    {
      id: '8',
      title: 'Cyber Athletics',
      description: 'High-tech sports competition with augmented reality.',
      date: '2024-06-20',
      location: 'Sports Complex',
      price: 49.99,
      image: 'https://source.unsplash.com/random/800x600?sports',
      category: 'Sports'
    },
    {
      id: '9',
      title: 'Neon Basketball League',
      description: 'Professional basketball with futuristic enhancements.',
      date: '2024-07-15',
      location: 'Basketball Arena',
      price: 39.99,
      image: 'https://source.unsplash.com/random/800x600?basketball',
      category: 'Sports'
    },
    {
      id: '10',
      title: 'Digital Martial Arts',
      description: 'Martial arts competition with motion tracking.',
      date: '2024-08-22',
      location: 'Martial Arts Center',
      price: 44.99,
      image: 'https://source.unsplash.com/random/800x600?martial-arts',
      category: 'Sports'
    },
    {
      id: '11',
      title: 'Holographic Racing',
      description: 'Virtual racing with real-world impact.',
      date: '2024-09-18',
      location: 'Racing Track',
      price: 59.99,
      image: 'https://source.unsplash.com/random/800x600?racing',
      category: 'Sports'
    },
    {
      id: '12',
      title: 'Cyber Soccer Cup',
      description: 'Soccer tournament with digital enhancements.',
      date: '2024-10-25',
      location: 'Soccer Stadium',
      price: 49.99,
      image: 'https://source.unsplash.com/random/800x600?soccer',
      category: 'Sports'
    },
    {
      id: '13',
      title: 'Neon Tennis Open',
      description: 'Tennis tournament with futuristic elements.',
      date: '2024-11-15',
      location: 'Tennis Center',
      price: 39.99,
      image: 'https://source.unsplash.com/random/800x600?tennis',
      category: 'Sports'
    },
    {
      id: '14',
      title: 'Digital Swimming Championship',
      description: 'Swimming competition with performance tracking.',
      date: '2024-12-20',
      location: 'Aquatic Center',
      price: 44.99,
      image: 'https://source.unsplash.com/random/800x600?swimming',
      category: 'Sports'
    },
    // Arts & Theater Events
    {
      id: '15',
      title: 'Digital Art Exhibition',
      description: 'Interactive digital art showcase.',
      date: '2024-06-25',
      location: 'Art Gallery',
      price: 29.99,
      image: 'https://source.unsplash.com/random/800x600?art',
      category: 'Arts & Theater'
    },
    {
      id: '16',
      title: 'Holographic Theater',
      description: 'Theater performance with holographic actors.',
      date: '2024-07-30',
      location: 'Theater Hall',
      price: 49.99,
      image: 'https://source.unsplash.com/random/800x600?theater',
      category: 'Arts & Theater'
    },
    {
      id: '17',
      title: 'Neon Art Installation',
      description: 'Interactive neon art experience.',
      date: '2024-08-15',
      location: 'Installation Space',
      price: 34.99,
      image: 'https://source.unsplash.com/random/800x600?installation',
      category: 'Arts & Theater'
    },
    {
      id: '18',
      title: 'Digital Dance Performance',
      description: 'Contemporary dance with digital effects.',
      date: '2024-09-22',
      location: 'Dance Studio',
      price: 39.99,
      image: 'https://source.unsplash.com/random/800x600?dance',
      category: 'Arts & Theater'
    },
    {
      id: '19',
      title: 'Cyberpunk Art Show',
      description: 'Exhibition of cyberpunk-themed artwork.',
      date: '2024-10-30',
      location: 'Art Space',
      price: 29.99,
      image: 'https://source.unsplash.com/random/800x600?cyberpunk',
      category: 'Arts & Theater'
    },
    {
      id: '20',
      title: 'Holographic Ballet',
      description: 'Classical ballet with holographic elements.',
      date: '2024-11-20',
      location: 'Ballet Theater',
      price: 59.99,
      image: 'https://source.unsplash.com/random/800x600?ballet',
      category: 'Arts & Theater'
    },
    {
      id: '21',
      title: 'Digital Sculpture Garden',
      description: 'Interactive digital sculptures exhibition.',
      date: '2024-12-25',
      location: 'Sculpture Park',
      price: 34.99,
      image: 'https://source.unsplash.com/random/800x600?sculpture',
      category: 'Arts & Theater'
    },
    // Add more events for other categories...
  ];
  return events;
};

const EventCardSkeleton = () => (
  <Card
    sx={{
      height: '500px',
      width: '100%',
      background: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(179, 136, 255, 0.1)',
      borderRadius: '16px',
      overflow: 'hidden',
    }}
  >
    <Skeleton variant="rectangular" height={240} animation="wave" />
    <CardContent sx={{ padding: '24px' }}>
      <Skeleton variant="text" height={40} width="80%" animation="wave" />
      <Skeleton variant="text" height={20} width="100%" animation="wave" />
      <Skeleton variant="text" height={20} width="90%" animation="wave" />
      <Skeleton variant="text" height={20} width="70%" animation="wave" />
      <Box sx={{ mt: 'auto', pt: 2 }}>
        <Skeleton variant="text" height={30} width="40%" animation="wave" />
      </Box>
    </CardContent>
    <CardActions sx={{ padding: '0 24px 24px' }}>
      <Skeleton variant="rectangular" height={48} width="100%" animation="wave" />
    </CardActions>
  </Card>
);

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: '500px',
        width: '100%',
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(179, 136, 255, 0.1)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 24px rgba(179, 136, 255, 0.2)',
          border: '1px solid rgba(179, 136, 255, 0.3)',
          '& .MuiCardMedia-root': {
            transform: 'scale(1.05)',
          },
          '& .event-date': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      }}
      onClick={() => navigate(`/event/${event.id}`)}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
        <CardMedia
          component="img"
          height="240"
          image={event.image}
          alt={event.title}
          sx={{
            transition: 'transform 0.5s ease',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
        <Box
          className="event-date"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '8px 16px',
            borderRadius: '8px',
            transform: 'translateY(-20px)',
            opacity: 0,
            transition: 'all 0.3s ease',
            border: '1px solid rgba(179, 136, 255, 0.2)',
          }}
        >
          <Typography variant="subtitle2" color="primary.main">
            {new Date(event.date).toLocaleDateString()}
          </Typography>
        </Box>
      </Box>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          flex: 1,
          padding: '24px',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 600,
            color: 'primary.main',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            minHeight: '3.6em',
            lineHeight: 1.2,
          }}
        >
          {event.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            minHeight: '4.5em',
            opacity: 0.8,
            lineHeight: 1.4,
          }}
        >
          {event.description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mt: 'auto',
            pt: 2,
            borderTop: '1px solid rgba(179, 136, 255, 0.1)',
          }}
        >
          <LocationOn sx={{ color: 'primary.main', fontSize: 20 }} />
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {event.location}
          </Typography>
          <Box sx={{ ml: 'auto' }}>
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                background: 'linear-gradient(45deg, #b388ff, #805acb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ${event.price}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions sx={{ padding: '0 24px 24px' }}>
        <Button
          fullWidth
          variant="contained"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/event/${event.id}`);
          }}
          sx={{
            background: 'linear-gradient(45deg, #b388ff, #805acb)',
            color: 'white',
            fontWeight: 600,
            padding: '12px 24px',
            borderRadius: '8px',
            '&:hover': {
              background: 'linear-gradient(45deg, #805acb, #b388ff)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const open = Boolean(filterAnchorEl);

  const { data: events = [], isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });

  const filteredEvents = events.filter((event: Event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !location || event.location.toLowerCase().includes(location.toLowerCase());
    const matchesCategory = !selectedCategory || event.category === selectedCategory;
    const matchesPrice = event.price >= priceRange[0] && event.price <= priceRange[1];
    const matchesDate = !dateRange[0] || !dateRange[1] || isWithinInterval(parseISO(event.date), {
      start: dateRange[0],
      end: dateRange[1],
    });
    return matchesSearch && matchesLocation && matchesCategory && matchesPrice && matchesDate;
  });

  const eventsByCategory = filteredEvents.reduce((acc, event) => {
    if (!acc[event.category]) {
      acc[event.category] = [];
    }
    acc[event.category].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  const handleCategoryClick = (category: string) => {
    navigate(`/category/${category}`);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: 'primary.main' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(179, 136, 255, 0.05)',
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: '2px',
                  },
                  '&:hover fieldset': {
                    borderColor: 'primary.light',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    boxShadow: '0 0 10px rgba(179, 136, 255, 0.3)',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'text.primary',
                  '&::placeholder': {
                    color: 'text.secondary',
                    opacity: 0.8,
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn sx={{ color: 'primary.main' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(179, 136, 255, 0.05)',
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: '2px',
                  },
                  '&:hover fieldset': {
                    borderColor: 'primary.light',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    boxShadow: '0 0 10px rgba(179, 136, 255, 0.3)',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'text.primary',
                  '&::placeholder': {
                    color: 'text.secondary',
                    opacity: 0.8,
                  },
                },
              }}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          <Chip
            label="All Categories"
            onClick={() => setSelectedCategory(null)}
            sx={{
              backgroundColor: !selectedCategory ? 'primary.main' : 'rgba(179, 136, 255, 0.1)',
              color: !selectedCategory ? 'white' : 'primary.main',
              '&:hover': {
                backgroundColor: !selectedCategory ? 'primary.dark' : 'rgba(179, 136, 255, 0.2)',
              },
            }}
          />
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              sx={{
                backgroundColor: selectedCategory === category ? 'primary.main' : 'rgba(179, 136, 255, 0.1)',
                color: selectedCategory === category ? 'white' : 'primary.main',
                '&:hover': {
                  backgroundColor: selectedCategory === category ? 'primary.dark' : 'rgba(179, 136, 255, 0.2)',
                },
              }}
            />
          ))}
          <Button
            variant="outlined"
            startIcon={<FilterList />}
            onClick={handleFilterClick}
            sx={{
              ml: 'auto',
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.dark',
                backgroundColor: 'rgba(179, 136, 255, 0.1)',
              },
            }}
          >
            More Filters
          </Button>
        </Box>
      </Box>

      <Popover
        open={open}
        anchorEl={filterAnchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(179, 136, 255, 0.2)',
            p: 3,
            minWidth: 300,
          },
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" color="primary.main" gutterBottom>
            Date Range
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                type="date"
                label="Start Date"
                value={dateRange[0] ? format(dateRange[0], 'yyyy-MM-dd') : ''}
                onChange={(e) => setDateRange([e.target.value ? new Date(e.target.value) : null, dateRange[1]])}
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'text.primary',
                    '& fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'primary.main',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="date"
                label="End Date"
                value={dateRange[1] ? format(dateRange[1], 'yyyy-MM-dd') : ''}
                onChange={(e) => setDateRange([dateRange[0], e.target.value ? new Date(e.target.value) : null])}
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'text.primary',
                    '& fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'primary.main',
                  },
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography variant="subtitle1" color="primary.main" gutterBottom>
            Price Range
          </Typography>
          <Box sx={{ px: 2 }}>
            <Slider
              value={priceRange}
              onChange={(_, newValue) => setPriceRange(newValue as [number, number])}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              step={10}
              sx={{
                color: 'primary.main',
                '& .MuiSlider-thumb': {
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: '0 0 0 8px rgba(179, 136, 255, 0.2)',
                  },
                },
                '& .MuiSlider-track': {
                  background: 'linear-gradient(45deg, #b388ff, #805acb)',
                },
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Typography variant="body2" color="primary.main">
                ${priceRange[0]}
              </Typography>
              <Typography variant="body2" color="primary.main">
                ${priceRange[1]}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button
            variant="outlined"
            onClick={() => {
              setDateRange([null, null]);
              setPriceRange([0, 1000]);
            }}
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.dark',
                backgroundColor: 'rgba(179, 136, 255, 0.1)',
              },
            }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            onClick={handleFilterClose}
            sx={{
              background: 'linear-gradient(45deg, #b388ff, #805acb)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(45deg, #805acb, #b388ff)',
              },
            }}
          >
            Apply
          </Button>
        </Box>
      </Popover>

      {isLoading ? (
        <Box>
          {[...Array(3)].map((_, index) => (
            <Box key={index} sx={{ mb: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Skeleton variant="text" height={40} width={200} animation="wave" />
                <Skeleton variant="rectangular" height={36} width={100} animation="wave" />
              </Box>
              <Grid container spacing={4}>
                {[...Array(3)].map((_, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <EventCardSkeleton />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      ) : filteredEvents.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 8,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" color="primary.main" gutterBottom>
            No events found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Try adjusting your search criteria or browse our categories
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              setSearchTerm('');
              setLocation('');
            }}
            sx={{
              background: 'linear-gradient(45deg, #b388ff, #805acb)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(45deg, #805acb, #b388ff)',
              },
            }}
          >
            Clear Filters
          </Button>
        </Box>
      ) : (
        <Box>
          {Object.entries(eventsByCategory).map(([category, categoryEvents]) => (
            <Box key={category} sx={{ mb: 6 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: 'primary.main',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.dark',
                    },
                  }}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Typography>
                <Button
                  endIcon={<ArrowForwardIos />}
                  onClick={() => handleCategoryClick(category)}
                  sx={{
                    color: 'primary.main',
                    '&:hover': {
                      color: 'primary.dark',
                    },
                  }}
                >
                  View All
                </Button>
              </Box>
              <Box sx={{ position: 'relative' }}>
                <Grid container spacing={4}>
                  {categoryEvents.slice(0, 3).map((event: Event) => (
                    <Grid item xs={12} sm={6} md={4} key={event.id}>
                      <EventCard event={event} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      <Zoom in={showScrollTop}>
        <Fab
          color="primary"
          size="medium"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            background: 'linear-gradient(45deg, #b388ff, #805acb)',
            '&:hover': {
              background: 'linear-gradient(45deg, #805acb, #b388ff)',
            },
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </Zoom>
    </Container>
  );
};

export default HomePage; 