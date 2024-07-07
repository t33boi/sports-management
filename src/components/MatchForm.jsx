import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function MatchForm({ onSubmit }) {
  const [formData, setFormData] = useState({ teamA: '', teamB: '', date: '', location: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ teamA: '', teamB: '', date: '', location: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={2}>
      <TextField
        label="Team A"
        name="teamA"
        value={formData.teamA}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Team B"
        name="teamB"
        value={formData.teamB}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Match
      </Button>
    </Box>
  );
}

export default MatchForm;
