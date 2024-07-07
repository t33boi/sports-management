import React, { useState } from 'react';
import { Container, Typography, Box, Alert } from '@mui/material';
import PlayerList from '../components/PlayerList';
import PlayerForm from '../components/PlayerForm';

function PlayerManagementPage() {
  const [players, setPlayers] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const addPlayer = (player) => {
    setPlayers([...players, { ...player, id: players.length + 1 }]);
    setSuccessMessage('Player added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const deletePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Player Management
        </Typography>
        {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}
        <PlayerForm onSubmit={addPlayer} />
        <PlayerList players={players} onDelete={deletePlayer} />
      </Box>
    </Container>
  );
}

export default PlayerManagementPage;
