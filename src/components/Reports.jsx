import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function Reports({ reports }) {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Reports
      </Typography>
      <List>
        {reports.map((report, index) => (
          <ListItem key={index}>
            <ListItemText primary={report} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Reports;
