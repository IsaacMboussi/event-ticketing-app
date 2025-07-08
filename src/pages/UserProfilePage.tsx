import React from 'react';
import { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Rating,
  Divider,
  Button,
} from '@mui/material';
import {
  Event,
  Star,
  Person,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const UserProfilePage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Mock data - replace with actual API calls
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    avatar: 'https://i.pravatar.cc/300',
    events: [
      {
        id: '1',
        title: 'Summer Music Festival',
        date: '2024-07-15',
        status: 'Upcoming',
      },
      {
        id: '2',
        title: 'Tech Conference 2024',
        date: '2024-08-20',
        status: 'Upcoming',
      },
    ],
    reviews: [
      {
        id: '1',
        eventTitle: 'Summer Music Festival 2023',
        rating: 5,
        comment: 'Amazing experience! The performances were incredible.',
        date: '2023-07-16',
      },
      {
        id: '2',
        eventTitle: 'Tech Conference 2023',
        rating: 4,
        comment: 'Great speakers and networking opportunities.',
        date: '2023-08-21',
      },
    ],
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Avatar
                src={userData.avatar}
                sx={{ width: 100, height: 100, mr: 3 }}
              />
              <Box>
                <Typography variant="h4" gutterBottom>
                  {userData.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Email sx={{ mr: 1 }} />
                  <Typography>{userData.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Phone sx={{ mr: 1 }} />
                  <Typography>{userData.phone}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn sx={{ mr: 1 }} />
                  <Typography>{userData.location}</Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="My Events" icon={<Event />} />
                <Tab label="My Reviews" icon={<Star />} />
                <Tab label="Account Settings" icon={<Person />} />
              </Tabs>
            </Box>

            <TabPanel value={tabValue} index={0}>
              <List>
                {userData.events.map((event) => (
                  <ListItem
                    key={event.id}
                    secondaryAction={
                      <Button variant="outlined" size="small">
                        View Details
                      </Button>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <Event />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={event.title}
                      secondary={`${event.date} - ${event.status}`}
                    />
                  </ListItem>
                ))}
              </List>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              <List>
                {userData.reviews.map((review) => (
                  <Box key={review.id}>
                    <ListItem>
                      <ListItemText
                        primary={review.eventTitle}
                        secondary={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Rating value={review.rating} readOnly size="small" />
                            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                              {review.date}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    <Typography variant="body2" sx={{ pl: 4, pb: 2 }}>
                      {review.comment}
                    </Typography>
                    <Divider />
                  </Box>
                ))}
              </List>
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
              <Box sx={{ maxWidth: 400 }}>
                <Button variant="contained" color="primary" sx={{ mb: 2 }}>
                  Change Password
                </Button>
                <Button variant="outlined" color="error" sx={{ mb: 2, ml: 2 }}>
                  Delete Account
                </Button>
              </Box>
            </TabPanel>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default UserProfilePage; 