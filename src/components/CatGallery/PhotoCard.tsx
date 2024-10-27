/* eslint-disable @next/next/no-img-element */

import { CatImage } from "./types";

interface PhotoCardProps {
  image: CatImage;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl hover:scale-103 duration-300">
      <img
        srcSet={image.thumbnail}
        src={image.thumbnail}
        alt={image.name}
        loading="lazy"
        className="block w-full rounded-lg max-w-72"
      />
    </div>
  );
};

export default PhotoCard;
