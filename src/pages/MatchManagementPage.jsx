import React, { useState } from 'react';
import { Container, Typography, Box, Alert } from '@mui/material';
import MatchList from '../components/MatchList';
import MatchForm from '../components/MatchForm';

function MatchManagementPage() {
  const [matches, setMatches] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const addMatch = (match) => {
    setMatches([...matches, { ...match, id: matches.length + 1 }]);
    setSuccessMessage('Match added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const deleteMatch = (id) => {
    setMatches(matches.filter((match) => match.id !== id));
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Match Management
        </Typography>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        <MatchForm onSubmit={addMatch} />
        <MatchList matches={matches} onDelete={deleteMatch} />
      </Box>
    </Container>
  );
}

export default MatchManagementPage;
