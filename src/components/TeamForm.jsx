import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';  // Importing necessary Material-UI components

function TeamForm({ onSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Team Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Add Team
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TeamForm;
