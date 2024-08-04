import Paper from '@mui/material/Paper';

const PhotoCard = ({ image }) => {
  return (
    <Paper
      elevation={6}
      sx={{
        borderRadius: 4
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
