import React from 'react';
import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TeamList({ teams, onDelete }) {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Teams
      </Typography>
      <List>
        {teams.map((team) => (
          <ListItem key={team.id}>
            <ListItemText primary={team.name} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => onDelete(team.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TeamList;
