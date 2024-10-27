/* eslint-disable @next/next/no-img-element */

import { CatImage } from "./types";
import CloseIcon from "@mui/icons-material/Close";

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: CatImage;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded-full"
        onClick={onClose}
      >
        <CloseIcon />
      </button>
      <div
        className="bg-white rounded-lg overflow-auto max-w-4xl max-h-[90vh] relative flex justify-center items-center bg-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center items-center bg-transparent">
          <img
            src={image.fullSize}
            alt={image.name}
            className="object-contain rounded-lg"
            style={{ maxHeight: '92vh', maxWidth: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
