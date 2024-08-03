import Masonry from '@mui/lab/Masonry';
import PhotoCard from './PhotoCard';
import images from '@/assets/images.json';

const PhotoGallery = () => {
  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
      {images.map((image, index) => (
        <PhotoCard key={index} image={image} />
      ))}
    </Masonry>
  );
};

export default PhotoGallery;
