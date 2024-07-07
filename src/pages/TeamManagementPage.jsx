import React, { useState } from 'react';
import { Typography, Paper, Box } from '@mui/material';
import TeamList from '../components/TeamList';
import TeamForm from '../components/TeamForm';

const containerStyle = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
};

function TeamManagementPage() {
  const [teams, setTeams] = useState([]);

  const addTeam = (team) => {
    setTeams([...teams, { ...team, id: teams.length + 1 }]);
  };

  const deleteTeam = (id) => {
    setTeams(teams.filter((team) => team.id !== id));
  };

  return (
    <Paper component="div" sx={containerStyle}>
      <Typography variant="h4" align="center" gutterBottom>
        Team Management
      </Typography>
      <Box mt={2}>
        <TeamForm onSubmit={addTeam} />
      </Box>
      <Box mt={3}>
        <TeamList teams={teams} onDelete={deleteTeam} />
      </Box>
    </Paper>
  );
}

export default TeamManagementPage;
