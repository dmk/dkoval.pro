/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { CatImage } from "./types";
import PhotoModal from "./PhotoModal";

interface PhotoCardProps {
  image: CatImage;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl hover:scale-103 duration-300 max-w-72"
        onClick={handleOpenModal}
      >
        <img
          srcSet={image.thumbnail}
          src={image.thumbnail}
          alt={image.name}
          loading="lazy"
          className="block w-full rounded-lg"
        />
        {image.cats.map((cat, index) => (
          <div
            key={cat}
            className={`absolute top-2 left-2 ${cat === 'Ruby' ? 'bg-red-600' : 'bg-yellow-600'} 
                        text-white text-sm font-semibold px-3 py-1 rounded-md shadow-md`}
            style={{ transform: `translateY(${index * 30}px)` }}
          >
            {cat}
          </div>
        ))}
      </div>

      <PhotoModal isOpen={isModalOpen} onClose={handleCloseModal} image={image} />
    </>
  );
};

export default PhotoCard;
