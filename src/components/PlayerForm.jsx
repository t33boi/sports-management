import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Paper } from '@mui/material';

const formStyle = {
  padding: '20px',
  marginBottom: '20px',
};

function PlayerForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, position });
    setName('');
    setPosition('');
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} sx={formStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Player Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Position"
            fullWidth
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Add Player
        </Button>
      </Box>
    </Paper>
  );
}

export default PlayerForm;
