// components/PhotoCard.js
import React from 'react';
import { Paper } from '@mui/material';

const PhotoCard = ({ image }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        borderRadius: 4,
        maxWidth: 256
      }}
    >
      <img
        srcSet={image.thumbnail}
        src={image.thumbnail}
        alt={image.name}
        loading="lazy"
        style={{
          display: 'block',
          borderRadius: 4,
          width: '100%',
        }}
      />
    </Paper>
  );
};

export default PhotoCard;
