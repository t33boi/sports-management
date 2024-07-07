import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function PlayerList({ players, onDelete }) {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Players
      </Typography>
      <List>
        {players.map((player) => (
          <ListItem key={player.id} disablePadding>
            <ListItemText primary={player.name} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => onDelete(player.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default PlayerList;
