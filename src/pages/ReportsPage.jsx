import React, { useState } from 'react';
import { Typography, Paper, Box } from '@mui/material';
import Reports from '../components/Reports';

const containerStyle = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
};

function ReportsPage() {
  const [reports, setReports] = useState([
    'Report 1',
    'Report 2',
    'Report 3'
  ]);

  return (
    <Paper component="div" sx={containerStyle}>
      <Typography variant="h4" align="center" gutterBottom>
        Reports
      </Typography>
      <Box mt={2}>
        <Reports reports={reports} />
      </Box>
    </Paper>
  );
}

export default ReportsPage;
