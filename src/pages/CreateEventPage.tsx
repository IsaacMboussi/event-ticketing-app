import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useNavigate } from 'react-router-dom';
import { AddPhotoAlternate, AttachMoney, LocationOn, Category, Description, Title } from '@mui/icons-material';

interface EventFormData {
  title: string;
  description: string;
  date: Date | null;
  location: string;
  price: number;
  category: string;
  image: string;
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

const steps = ['Event Details', 'Location & Pricing', 'Category & Image'];

const CreateEventPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<EventFormData>({
    title: '',
    description: '',
    date: null,
    location: '',
    price: 0,
    category: '',
    image: '',
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    navigate('/');
  };

  const handleChange = (field: keyof EventFormData) => (
    event: React.ChangeEvent<HTMLInputElement | { value: unknown }>
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Event Title"
                value={formData.title}
                onChange={handleChange('title')}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Title sx={{ color: 'primary.main' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(0, 255, 157, 0.05)',
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
                      boxShadow: '0 0 10px rgba(0, 255, 157, 0.3)',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                value={formData.description}
                onChange={handleChange('description')}
                multiline
                rows={4}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Description sx={{ color: 'primary.main' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(0, 255, 157, 0.05)',
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
                      boxShadow: '0 0 10px rgba(0, 255, 157, 0.3)',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Event Date"
                  value={formData.date}
                  onChange={handleDateChange}
                  sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(0, 255, 157, 0.05)',
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
                        boxShadow: '0 0 10px rgba(0, 255, 157, 0.3)',
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                value={formData.location}
                onChange={handleChange('location')}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn sx={{ color: 'primary.main' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(0, 255, 157, 0.05)',
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
                      boxShadow: '0 0 10px rgba(0, 255, 157, 0.3)',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Price"
                type="number"
                value={formData.price}
                onChange={handleChange('price')}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoney sx={{ color: 'primary.main' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(0, 255, 157, 0.05)',
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
                      boxShadow: '0 0 10px rgba(0, 255, 157, 0.3)',
                    },
                  },
                }}
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select
                  value={formData.category}
                  onChange={handleChange('category')}
                  label="Category"
                  startAdornment={
                    <InputAdornment position="start">
                      <Category sx={{ color: 'primary.main', ml: 1 }} />
                    </InputAdornment>
                  }
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(0, 255, 157, 0.05)',
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
                        boxShadow: '0 0 10px rgba(0, 255, 157, 0.3)',
                      },
                    },
                  }}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                value={formData.image}
                onChange={handleChange('image')}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AddPhotoAlternate sx={{ color: 'primary.main' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(0, 255, 157, 0.05)',
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
                      boxShadow: '0 0 10px rgba(0, 255, 157, 0.3)',
                    },
                  },
                }}
              />
            </Grid>
          </Grid>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ 
          color: 'primary.main',
          mb: 4,
          fontFamily: 'Orbitron, sans-serif',
        }}>
          Create New Event
        </Typography>
        
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ mt: 2 }}>
            {getStepContent(activeStep)}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{
                color: 'primary.main',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
              sx={{
                background: 'linear-gradient(45deg, #00ff9d, #00b26d)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #00b26d, #00ff9d)',
                },
              }}
            >
              {activeStep === steps.length - 1 ? 'Create Event' : 'Next'}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default CreateEventPage; 