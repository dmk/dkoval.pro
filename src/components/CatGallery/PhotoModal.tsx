/* eslint-disable @next/next/no-img-element */

import { CatImage } from "./types";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: CatImage;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ isOpen, onClose, image }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <button
            className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded-full z-[100]"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="rounded-lg overflow-auto max-w-[90vw] max-h-[90vh] relative flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center">
              <img
                src={image.fullSize}
                alt={image.name}
                className="object-contain rounded-lg"
                style={{ maxHeight: '85vh', maxWidth: '100%' }}
              />
              {image.cats.map((cat, index) => (
                <div
                  key={cat}
                  className={`absolute top-4 left-4 ${cat === 'Ruby' ? 'bg-red-600' : 'bg-yellow-600'} text-white text-sm font-semibold px-3 py-1 rounded-md shadow-md`}
                  style={{ transform: `translateY(${index * 30}px)` }}
                >
                  {cat}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhotoModal;
