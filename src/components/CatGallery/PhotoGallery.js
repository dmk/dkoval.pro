import PhotoCard from './PhotoCard';
import images from '@/assets/images.json';

const PhotoGallery = () => {
  return (
    <div className="w-full flex items-center">
      <div className="max-w-6xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 py-6">
          {images.reverse().map((image, index) => (
            <div key={index} className="mb-6 break-inside-avoid overflow-visible">
              <PhotoCard image={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
