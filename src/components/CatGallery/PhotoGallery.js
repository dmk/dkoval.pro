import Masonry from '@mui/lab/Masonry';
import PhotoCard from './PhotoCard';
import images from '@/assets/images.json';
import { Box, Container } from '@mui/material';

const PhotoGallery = () => {
  return (
    <Box width='100%' display='flex' alignItems='center'>
      <Container maxWidth='lg'>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
          {images.map((image, index) => (
            <PhotoCard key={index} image={image} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default PhotoGallery;
