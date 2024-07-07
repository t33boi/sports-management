import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function Statistics({ stats }) {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Statistics
      </Typography>
      <List>
        {Object.entries(stats).map(([key, value]) => (
          <ListItem key={key}>
            <ListItemText primary={`${key}: ${value}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Statistics;
