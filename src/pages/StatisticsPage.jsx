import React, { useState } from 'react';
import { Typography, Paper, Box } from '@mui/material';
import Statistics from '../components/Statistics';

const containerStyle = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
};

function StatisticsPage() {
  const [stats, setStats] = useState({
    goalsScored: 10,
    assists: 5,
    winLossRatio: 2
  });

  return (
    <Paper component="div" sx={containerStyle}>
      <Typography variant="h4" align="center" gutterBottom>
        Statistics
      </Typography>
      <Box mt={2}>
        <Statistics stats={stats} />
      </Box>
    </Paper>
  );
}

export default StatisticsPage;
