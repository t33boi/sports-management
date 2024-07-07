import React from 'react';
import { List, Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const cardStyle = {
  marginBottom: '20px',
};

function MatchList({ matches, onDelete }) {
  return (
    <Box mt={2}>
      <List>
        {matches.map((match) => (
          <Card key={match.id} sx={cardStyle}>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <SportsSoccerIcon sx={{ mr: 1 }} /> {match.teamA} vs {match.teamB}
                  </Typography>
                  <Typography color="textSecondary" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <EventIcon sx={{ mr: 1 }} /> Date: {match.date}
                  </Typography>
                  <Typography color="textSecondary" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOnIcon sx={{ mr: 1 }} /> Location: {match.location}
                  </Typography>
                </Box>
                <IconButton edge="end" aria-label="delete" onClick={() => onDelete(match.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  );
}

export default MatchList;
