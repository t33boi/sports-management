import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

function HomePage() {
  const imageUrl = 'public/image/team.jpg';  // Replace with your image URL

  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h3" gutterBottom>
          Welcome to Sport Manager
        </Typography>
        <Typography variant="h6" gutterBottom>
          Your one-stop solution for managing sports teams, players, and matches effortlessly.
        </Typography>
        <Box>
          <img 
            src={imageUrl} 
            alt="Football Team" 
            style={{ 
              width: '100%', 
              maxWidth: '600px', 
              height: 'auto', 
              borderRadius: '8px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
            }} 
          />
        </Box>
        <Box mt={4}>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
